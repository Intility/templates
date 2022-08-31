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
        // Caching has been enabled for the issue module, but you can enable caching globally by using the code below instead.
        // The global settings can be overridden for specific endpoints if you need it.
        // https://docs.nestjs.com/techniques/caching#use-module-globally
        // CacheModule.register({
        //     isGlobal: true,
        // }),
        IssueModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
