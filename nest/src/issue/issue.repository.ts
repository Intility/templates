import { Injectable } from '@nestjs/common';
import { Issue } from './entities/issue.entity';

/**
 * Right now this class only contains mocked data, but ideally it should be used to handle database access.
 * Nest has created documentation for how to integrate with different databases, but you can use other ones as well.
 * https://docs.nestjs.com/techniques/database
 * https://docs.nestjs.com/techniques/mongodb
 */
@Injectable()
export class IssueRepository {
    private issues: Map<number, Issue>;

    constructor() {
        this.issues = new Map();

        for (let i = 0; i < 3; i++) {
            const id = Math.floor(Math.random() * 1000000);
            this.issues.set(id, {
                id,
                open: true,
                title: `Issue #${id}`,
                description: `This is issue number ${id}. Please solve this ASAP`,
                created: new Date().toISOString(),
            });
        }
    }

    public create = (issue: Issue) => {
        this.issues.set(issue.id, issue);
        return issue;
    };

    public read = (id?: number) => {
        if (!id) return Array.from(this.issues.values());

        const issue = this.issues.get(id);

        return issue ? [issue] : [];
    };

    public update = (issue: Issue) => {
        this.issues.set(issue.id, issue);

        return issue;
    };

    public delete = (id: number) => {
        this.issues.delete(id);
    };
}
