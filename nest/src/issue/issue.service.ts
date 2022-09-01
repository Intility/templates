import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issue } from './entities/issue.entity';
import { IssueRepository } from './issue.repository';

@Injectable()
export class IssueService {
    // Nest provides its own logger, which can be used instead of console.log() to log messages with the same formatting as logs from the Nest framework gets.
    // This will also enable Nest not to log messages below the log level configured in main.ts
    // https://docs.nestjs.com/techniques/logger#using-the-logger-for-application-logging
    private readonly logger = new Logger(IssueService.name);

    constructor(private readonly repository: IssueRepository) {
        this.logger.log('Issue service initialized');
    }

    create(createIssueDto: CreateIssueDto) {
        const issue: Issue = {
            ...createIssueDto,
            id: Math.floor(Math.random() * 1000000),
            created: new Date().toISOString(),
            open: true,
        };
        this.repository.create(issue);

        return issue;
    }

    findAll() {
        return this.repository.read();
    }

    findOne(id: number) {
        const matchingIssues = this.repository.read(id);

        if (matchingIssues.length === 0) throw new NotFoundException();

        return matchingIssues[0];
    }

    update(id: number, updateIssueDto: UpdateIssueDto) {
        let issue = this.findOne(id);
        issue = {
            ...issue,
            ...updateIssueDto,
        };
        this.repository.update(issue);

        return issue;
    }

    remove(id: number) {
        this.findOne(id);
        this.repository.delete(id);
    }
}
