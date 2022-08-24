import { Module } from '@nestjs/common';
import { IssueModule } from './issue/issue.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		// Official Nest documentation: https://docs.nestjs.com/techniques/configuration
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env.development',
		}),
		IssueModule
	],
  controllers: [],
  providers: [],
})
export class AppModule {}
