import * as appInsights from 'applicationinsights';
import LoggerService from './LoggerService';

const { NODE_ENV, APPINSIGHTS_INSTRUMENTATIONKEY } = process.env;

if (!NODE_ENV) {
    throw new Error('Missing Environment variable: NODE_ENV');
}

if (!APPINSIGHTS_INSTRUMENTATIONKEY) {
    throw new Error('Missing Environment variable: APPINSIGHTS_INSTRUMENTATIONKEY');
}

const logger = new LoggerService('Application Insights');


logger.info('Configuring Application Insights Handlers');

// Application Insights will automatically recognize the instrumentation key localized in the environment variables
appInsights.setup()
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectConsole(true, true);

appInsights.defaultClient.commonProperties = {
    environment: NODE_ENV,
};

// No need to submit logs in development environment
appInsights.defaultClient.config.disableAppInsights = NODE_ENV === 'development';

export default appInsights;
