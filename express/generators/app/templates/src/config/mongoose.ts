import mongoose, { ConnectOptions, Mongoose } from 'mongoose';
import LoggerService from './LoggerService';

const { MONGO_DB_CONNECTION_STRING } = process.env;
export const connectionString = MONGO_DB_CONNECTION_STRING || 'mongodb://root:example@127.0.0.1:27017/local?authSource=admin';

    // List of connection config options: https://mongoosejs.com/docs/connections.html#options
export const mongooseConfig: ConnectOptions = { };


const logger = new LoggerService('Mongoose');

// OPTIONAL: Connection events
// You can tap into mongoose internal event system and execute custom logic when given connection events occurs
mongoose.connection.on('connecting', () => {
    logger.info(`Connecting to Database`);
});

mongoose.connection.on('connected', async () => {
    logger.info(`Database successfully connected`);
});

mongoose.connection.on('disconnected', async () => {
    logger.error(`Database connection disconnected`);
});

mongoose.connection.on('error', (err) => {
    logger.error(`Database connection failed`, err);
});

export const connect = (): Promise<Mongoose> => mongoose.connect(connectionString, mongooseConfig);

// export the customized mongoose instance
export default mongoose;
