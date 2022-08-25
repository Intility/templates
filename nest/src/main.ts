import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { EnvironmentVariables } from './interfaces/environment-variables.interface';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	
	const configService = app.get<ConfigService<EnvironmentVariables, true>>(ConfigService);
	const port = configService.get('PORT', { infer: true });
	const azureTenantId = configService.get('AZURE_TENANT_ID', { infer: true });
	
	// Configure Helmet security plugin.
	// Official Nest Documentation: https://docs.nestjs.com/security/helmet
	// In the configuration we need to allow Swagger OAuth redirect inline-script.
	// Note that the SHA specified in `script-src` property may change if swagger dependencies is updated.
	app.use(helmet({
		contentSecurityPolicy: {
			directives: {
				...helmet.contentSecurityPolicy.getDefaultDirectives(),
				'script-src': [ '\'sha256-OpxCZnOOZiLaVhybyx3fw6kxbScQz672StP4vrWXcds=\'', '\'self\'', ],
				'connect-src': [
					'\'self\'',
					// Single tenant app
					`https://login.microsoftonline.com/${azureTenantId}/oauth2/v2.0/token`,
					// Multi tenant app
					`https://login.microsoftonline.com/common/oauth2/v2.0/token`,
				],
			},
		},
		crossOriginOpenerPolicy: {
			policy: 'unsafe-none',
		},
	}));

  	await app.listen(port || 4000);
}
bootstrap();
