import express, { json } from 'express';
import errorHandler from '../middlewares/errorHandler';
import baseRouter from '../baseRouter';
import cors from 'cors';
import passport from '../middlewares/passport';
import helmet from 'helmet';
import hpp from 'hpp';
// @ts-expect-error
import contentLength from 'express-content-length-validator';
import { join } from 'path';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import LoggerService from './LoggerService';

// Init express api
const app = express();
const MAX_CONTENT_LENGTH_ACCEPTED = 1048576; // 1MB

const { SENTRY_DSN } = process.env;

if (SENTRY_DSN) {
    const logger = new LoggerService('Sentry');

    logger.info(`Configuring Sentry Handlers`);
    
    Sentry.init({
        dsn: SENTRY_DSN,
        integrations: [
            // enable HTTP calls tracing
            new Sentry.Integrations.Http({ tracing: true }),
            // enable Express.js middleware tracing
            new Tracing.Integrations.Express({ app }),
        ],
    
        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 1.0,
    });

    // RequestHandler creates a separate execution context using domains, so that every
    // transaction/span/breadcrumb is attached to its own Hub instance
    app.use(Sentry.Handlers.requestHandler());

    // TracingHandler creates a trace for every incoming request
    app.use(Sentry.Handlers.tracingHandler());
}

// activating auth on server
app.use(passport.initialize());
app.use(passport.session());

// use json body parser
app.use(json());

// Apply HTTP Security helpers 
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(contentLength.validateMax({ max: MAX_CONTENT_LENGTH_ACCEPTED, status: 413, message: 'Payload Too Large' }));

app.use(express.static(join(__dirname, '..', 'static')));

app.use('/api/v1', baseRouter);


if (SENTRY_DSN) {
    // The error handler must be before any other error middleware and after all controllers
    app.use(Sentry.Handlers.errorHandler());
}

app.use(errorHandler);

export default app;
