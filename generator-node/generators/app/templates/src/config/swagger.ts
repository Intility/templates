import { Options } from 'express-jsdoc-swagger';
import { name, version, license, description } from '../../package.json';

const { INTILITY_TENANT_ID, APP_CLIENT_ID, SWAGGER_APP_CLIENT_ID } = process.env;

const oAuthStrategyName = 'OAuthStrategy';

export const swaggerOptions: Options = {
    info: {
        version: version,
        title: name,
        description: description,
        license: {
            name: license,
            url: ''
        },
    },
    security: {
        //@ts-expect-error xx
        [oAuthStrategyName]: [
            'Api.Access'
        ]
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: [
        '../**/*.ts',
        '../**/*.js',
    ],
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/api-docs',
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: true,
    // Open API JSON Docs endpoint.
    apiDocsPath: '/api-docs.json',
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
    // You can customize your UI options.
    // https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md
    swaggerUiOptions: {
        swaggerOptions: {
            deepLinking: true,
            oauth: {
                clientId: SWAGGER_APP_CLIENT_ID
            }
        }
    },
};

export const swaggerSecurityOptions = {
    components: {
        securitySchemes: {
            [oAuthStrategyName]: {
                type: 'oauth2',
                description: 'This API uses OAuth 2 with the implicit grant flow. [More info](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow)',
                flows: {
                    implicit: {
                        authorizationUrl: `https://login.microsoftonline.com/${INTILITY_TENANT_ID}/oauth2/v2.0/authorize`,
                        scopes: {
                            [`api://${APP_CLIENT_ID}/Api.Access`]: 'Access to the API',
                        }
                    }
                }
            }
        }
    }
};
