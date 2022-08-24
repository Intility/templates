import { Module } from '@nestjs/common';
import { IssueModule } from './issue/issue.module';

@Module({
  imports: [IssueModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
