import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { IssueRepository } from './issue.repository';

@Module({
    controllers: [IssueController],
    providers: [IssueService, IssueRepository],
})
export class IssueModule {}
