import { CacheModule, Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { IssueRepository } from './issue.repository';

@Module({
    imports: [
        // Add caching. This can also be done globally instead of for specific modules. https://docs.nestjs.com/techniques/caching
        CacheModule.register({
            ttl: 10,
        }),
    ],
    controllers: [IssueController],
    providers: [IssueService, IssueRepository],
})
export class IssueModule {}
