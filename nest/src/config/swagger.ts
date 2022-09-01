import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvironmentVariables } from 'src/interfaces/environment-variables.interface';
import { name, description } from '../../package.json';

export const AdminOAuthFlow = 'AdminBearerStrategy';
export const AdminApiScope = `api://${process.env.APP_CLIENT_ID}/User.Impersonation`;

export const configureSwagger = (app: INestApplication): void => {
    const configService = app.get<ConfigService<EnvironmentVariables, true>>(ConfigService);
    const azureTenantId = configService.get('AZURE_TENANT_ID', { infer: true });
    const swaggerAppClientId = configService.get('SWAGGER_APP_CLIENT_ID', { infer: true });
    const appClientId = configService.get('APP_CLIENT_ID', { infer: true });
    const buildVersion = configService.get('BUILD_VERSION', { infer: true });

    const microsoftLoginBaseUrl = `https://login.microsoftonline.com/${azureTenantId}/oauth2/v2.0`;
    const scope = `api://${appClientId}/User.Impersonation`;

    const swaggerConfig = new DocumentBuilder()
        .setTitle(name)
        .setDescription(description)
        .setVersion(buildVersion || '')
        // Configure Swagger Authentication
        // Official Swagger Documentation: https://swagger.io/docs/specification/authentication/oauth2/
        .addOAuth2({
            type: 'oauth2',
            name: AdminOAuthFlow,
            flows: {
                authorizationCode: {
                    authorizationUrl: `${microsoftLoginBaseUrl}/authorize`,
                    tokenUrl: `${microsoftLoginBaseUrl}/token`,
                    scopes: {
                        [scope]: 'Access API as User',
                    },
                },
            },
        })
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('api/docs', app, document, {
        customSiteTitle: `${name} - Swagger`,
        // Customize Swagger Client
        // Official Swagger Documentation: https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/
        swaggerOptions: {
            // Persists authorization data and it would not be lost on browser close/refresh.
            // Can be troublesome if you have multiple apis behind the same gateway/base url
            persistAuthorization: false,
            // NOTE: If API grows too big, it can be helpful to set this to `none` to disable automatic expansion of all tags
            docExpansion: 'list',
            deepLinking: true,
            // Customize Swagger OAuth configuration
            // Official Swagger Documentation: https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/
            oauth: {
                //  Auto fill API Client ID
                clientId: swaggerAppClientId,
                //  Auto select API scope
                scopes: [scope],
                // Set custom app name
                appName: name,
                // Set OAuth to use OAuth 2.0 authorization code flow with PKCE.
                usePkceWithAuthorizationCodeGrant: true,
            },
        },
    });
};
