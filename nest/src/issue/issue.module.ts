import { CacheModule, Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { IssueRepository } from './issue.repository';

@Module({
    imports: [CacheModule.register({ // Add caching. https://docs.nestjs.com/techniques/caching
        ttl: 10
    })],
    controllers: [IssueController],
    providers: [IssueService, IssueRepository]
})

export class IssueModule {}
