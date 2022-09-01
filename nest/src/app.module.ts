import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { Integrations } from '@sentry/node';
import { EnvironmentVariables } from './interfaces/environment-variables.interface';
import { IssueModule } from './issue/issue.module';

@Module({
    imports: [
        // Official Nest documentation: https://docs.nestjs.com/techniques/configuration
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env.development',
        }),
        SentryModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService<EnvironmentVariables>) => ({
                dsn: configService.get('SENTRY_DSN'),
                environment: configService.get('NODE_ENV'),
                debug: configService.get('NODE_ENV') === 'development',
                integrations: [new Integrations.Http({ tracing: true })],
            }),
            inject: [ConfigService],
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
