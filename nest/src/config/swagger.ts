import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { EnvironmentVariables } from "src/interfaces/environment-variables.interface";
import { name, description } from "../../package.json"

export const AdminOAuthFlow = 'AdminBearerStrategy';
export const AdminApiScope = `api://${process.env.APP_CLIENT_ID}/User.Impersonation`;

export const configureSwagger = (app: INestApplication): void => {

	const configService = app.get<ConfigService<EnvironmentVariables, true>>(ConfigService);
	const azureTenantId = configService.get('AZURE_TENANT_ID', { infer: true });
	const swaggerAppClientId = configService.get('SWAGGER_APP_CLIENT_ID', { infer: true });
	const appClientId = configService.get('APP_CLIENT_ID', { infer: true });
	const buildVersion = configService.get('BUILD_VERSION', { infer: true });

	const microsoftLoginBaseUrl = `https://login.microsoftonline.com/${azureTenantId}/oauth2/v2.0`;

	const swaggerConfig = new DocumentBuilder()
        .setTitle(name)
        .setDescription(description)
        .setVersion(buildVersion || '')
        .addOAuth2({
            type: 'oauth2',
            name: AdminOAuthFlow,
            flows: {
                authorizationCode: {
                    authorizationUrl: `${microsoftLoginBaseUrl}/authorize`,
					tokenUrl: `${microsoftLoginBaseUrl}/token`,
                    scopes: {
						[`api://${appClientId}/User.Impersonation`]: 'Access API as User',
					},
                },
            },
        })
        .build();

	const document = SwaggerModule.createDocument(app, swaggerConfig);
	
	SwaggerModule.setup(`api/docs`, app, document, {
        customSiteTitle: `${name} - Swagger`,
        swaggerOptions: {
            persistAuthorization: false,
            deepLinking: true,
            oauth: {
                clientId: swaggerAppClientId,
                usePkceWithAuthorizationCodeGrant: true,
            },
        },
	});
	
	return;
}