import { LogLevel, ValidationPipe } from '@nestjs/common';
import { configureSwagger } from './config/swagger';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { EnvironmentVariables } from './interfaces/environment-variables.interface';

async function bootstrap() {
    const apiPrefix = 'api';
    // Normally we get env variables using the config service, but we need this variable before the config service is available,
    // so we make an exception for this value.
    const logLevels = process.env.LOG_LEVELS;

    const app = await NestFactory.create(AppModule, {
        // Enable specific log levels https://docs.nestjs.com/techniques/logger
        // When setting log level all the levels "above" it will also be included.
        // E.g. if log level is set to "warn", "error" will also be included.
        logger: (logLevels?.split(',') as LogLevel[]) || ['log'],
    });

    // Get config from environment variables, using ConfigService
    const configService = app.get<ConfigService<EnvironmentVariables, true>>(ConfigService);
    const port = configService.get('PORT', { infer: true });
    const azureTenantId = configService.get('AZURE_TENANT_ID', { infer: true });

    // Configure CORS
    // Official Nest Documentation: https://docs.nestjs.com/security/cors
    app.enableCors({
        origin: [`https://super-awesome-frontend.intility.com`],
    });

    // Configure Helmet security plugin.
    // Official Nest Documentation: https://docs.nestjs.com/security/helmet
    // In the configuration we need to allow Swagger OAuth redirect inline-script.
    // Note that the SHA specified in `script-src` property may change if swagger dependencies is updated.
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                    'script-src': ["'sha256-4IiDsMH+GkJlxivIDNfi6qk0O5HPtzyvNwVT3Wt8TIw='", "'self'"],
                    'connect-src': ["'self'", `https://login.microsoftonline.com/${azureTenantId}/oauth2/v2.0/token`],
                },
            },
            crossOriginOpenerPolicy: {
                policy: 'unsafe-none',
            },
        }),
    );

    // Configure API prefix
    // Official Nest Documentation: https://docs.nestjs.com/faq/global-prefix
    app.setGlobalPrefix(apiPrefix, { exclude: ['health'] });
	
    // Configure API versioning.
    // Official Nest Documentation: https://docs.nestjs.com/techniques/versioning
    app.enableVersioning();
	
    // Configure validation of DTOs.
    // https://docs.nestjs.com/techniques/validation#using-the-built-in-validationpipe
    app.useGlobalPipes(
        new ValidationPipe({
            // Whitelist removes properties from the request which are not specified in the DTO
            whitelist: true,
            errorHttpStatusCode: 422,
        }),
    );

	configureSwagger(app);

    // Create API and listen to port
	// NOTE If the runtime port is changed form 4000, you need to update the EXPORT <port> instruction at the bottom of the Dockerfile.
    await app.listen(port || 4000);
}

bootstrap();
