import mongoose, { ConnectionOptions } from 'mongoose';
import LoggerService from './LoggerService';

const { MONGO_DB_CONNECTION_STRING } = process.env;
export const connectionString = MONGO_DB_CONNECTION_STRING || 'mongodb://root:example@127.0.0.1:27017/local?authSource=admin';

export const mongooseConfig: ConnectionOptions = {
    // List of connection config options: https://mongoosejs.com/docs/connections.html#options
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};


const logger = new LoggerService('Mongoose');

// OPTIONAL: Connection events
// You can tap into mongoose internal event system and execute custom logic when given connection events accures
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

export const connect = (): Promise<typeof mongoose> => mongoose.connect(connectionString, mongooseConfig);

// export the customized mongoose instance
export default mongoose;
