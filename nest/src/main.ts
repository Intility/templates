import { VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentVariables } from './interfaces/environment-variables.interface';

async function bootstrap() {
	const apiPrefix = 'api';

	const app = await NestFactory.create(AppModule);

	// Get config from environment variables, using ConfigService
	const configService = app.get<ConfigService<EnvironmentVariables, true>>(ConfigService);
	const port = configService.get('PORT', { infer: true });

	// Configure API prefix
	// Official Nest Documentation: https://docs.nestjs.com/faq/global-prefix
    app.setGlobalPrefix(apiPrefix, { exclude: [ 'health' ] });

	// Configure API versioning.
	// Official Nest Documentation: https://docs.nestjs.com/techniques/versioning
	app.enableVersioning();

	// Create API and listen to port
  	await app.listen(port || 4000);
}
bootstrap();
