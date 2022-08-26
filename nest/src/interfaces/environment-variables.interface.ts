export interface EnvironmentVariables {

	/**
	 * Build version to be shown in swagger, and in health endpoint
	 */
	BUILD_VERSION: string;

	/**
	 * Environment the API is running in
	 */
	NODE_ENV: 'development' | 'test' | 'qa' | 'production';

	/**
	 * Optional port to overwrite the default `4000`
	 */
	PORT?: number;

	/**
	 * Azure Tenant ID this application registration is registred in.
	 * * Use the provided uuid if single tenant
	 * * Use `commmon` of multi tenant
	 */
	AZURE_TENANT_ID: string;

	/**
	 * Client ID for Azure Application Registration used for this API
	 */
	APP_CLIENT_ID: string;

	/**
	 * Client ID for Azure Application Registration used for the Swagger client
	 */
	SWAGGER_APP_CLIENT_ID: string;
}
