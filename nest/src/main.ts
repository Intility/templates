import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentVariables } from './interfaces/environment-variables.interface';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configService = app.get<ConfigService<EnvironmentVariables, true>>(ConfigService);
	const port = configService.get('PORT', { infer: true });

	// Configure API versioning.
	// Official Nest Documentation: https://docs.nestjs.com/techniques/versioning
	app.enableVersioning();
  	await app.listen(port || 4000);
}
bootstrap();
