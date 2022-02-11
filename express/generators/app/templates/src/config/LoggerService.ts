import winston, { createLogger, format, Logger, transports } from 'winston';

type ColorTextFn = (text: string) => string;

class LoggerService {
    private readonly logger: winston.Logger;

    constructor(route: string) {
        const { NODE_ENV } = process.env;
        this.logger = createLogger({
            level: NODE_ENV && [ 'production', 'prod' ].includes(NODE_ENV) ? 'warn' : 'silly',
            transports: [
                new transports.Console({
                    format: format.combine(
                        format.printf(({ level, obj, message }) => {
                            const color = this.getColorByLogLevel(level);
                            const timeStamp = new Date().toISOString();
                            const messageData = `${level.toUpperCase().padStart(7, ' ')} [${route}] ${message}`;
                            
                            let completeMessage = `${timeStamp} ${color(messageData)}`;
                            completeMessage = obj ? completeMessage + `\n  ${JSON.stringify(obj)}` : completeMessage;
                            return completeMessage;
                        })
                    )
                })
            ],
        });
    }

    public error = (message: string, obj?: Record<string, any>): Logger =>
        obj ? this.logger.error(message, { obj }) : this.logger.error(message);
    
    public warn = (message: string, obj?: Record<string, any>): Logger =>
        obj ? this.logger.warn(message, { obj }) : this.logger.warn(message);
    
    public info = (message: string, obj?: Record<string, any>): Logger =>
        obj ? this.logger.info(message, { obj }) : this.logger.info(message);
    
    public verbose = (message: string, obj?: Record<string, any>): Logger =>
        obj ? this.logger.verbose(message, { obj }) : this.logger.verbose(message);
    
    public debug = (message: string, obj?: Record<string, any>): Logger =>
        obj ? this.logger.debug(message, { obj }) : this.logger.debug(message);
    
    public silly = (message: string, obj?: Record<string, any>): Logger =>
        obj ? this.logger.silly(message, { obj }) : this.logger.silly(message);
    

    private isColorAllowed = () => !process.env.NO_COLOR;
    private colorIfAllowed = (colorFn: ColorTextFn) => (text: string) => this.isColorAllowed() ? colorFn(text) : text;

    private clc = {
        white: this.colorIfAllowed((text: string) => `\x1B[37m${text}\x1B[39m`),
        red: this.colorIfAllowed((text: string) => `\x1B[31m${text}\x1B[39m`),
        green: this.colorIfAllowed((text: string) => `\x1B[32m${text}\x1B[39m`),
        yellow: this.colorIfAllowed((text: string) => `\x1B[33m${text}\x1B[39m`),
        blue: this.colorIfAllowed((text: string) => `\x1B[34m${text}\x1B[39m`),
        magentaBright: this.colorIfAllowed((text: string) => `\x1B[95m${text}\x1B[39m`)
    };

    private getColorByLogLevel(level: string) {
        switch (level) {
            case 'info':
                return this.clc.green;
            case 'debug':
                return this.clc.magentaBright;
            case 'warn':
                return this.clc.yellow;
            case 'error':
                return this.clc.red;
            case 'verbose':
                return this.clc.blue;
            case 'silly':
                return this.clc.white;
            default:
                return this.clc.white;
        }
    }

}
export default LoggerService;
