import dotenv from 'dotenv';
dotenv.config();

import { Server } from 'http';
import 'express-async-errors';
import app from './config/app';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import { swaggerOptions, swaggerSecurityOptions } from './config/swagger';
import LoggerService from './config/LoggerService';

const { PORT, APPINSIGHTS_INSTRUMENTATIONKEY, MONGO_DB_CONNECTION_STRING } = process.env;

if (APPINSIGHTS_INSTRUMENTATIONKEY) {
    import('./config/appInsights')
    .then((appInsConfig) => appInsConfig.default.start());
}

if (MONGO_DB_CONNECTION_STRING) {
    import('./config/mongoose')
    .then(async (mongoose) => mongoose.connect());
}

const logger = new LoggerService('Server');

const appPort = PORT || 4000;

const startServer = async (): Promise<Server> => {

    // Generate and host Swagger Docs
    expressJSDocSwagger(app)(swaggerOptions, swaggerSecurityOptions);

    // Setup server and listen for requests on specified port
    return app.listen(appPort, () => {
        logger.info(`HTTP Server successfully initialized and listening for requests on port ${appPort}`);
    });
};

const server = startServer();
export default server;
