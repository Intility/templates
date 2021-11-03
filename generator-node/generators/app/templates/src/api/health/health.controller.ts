import { Request, Response } from 'express';
import { version, name } from '../../../package.json';

export class HealthController {
    public getServerHealth = (_req: Request, res: Response): Response<Record<string, unknown>> => {
        return res.status(200).json({
            nodeVersion: process.version,
            uptime: this.formatSecondsToHourString(process.uptime()),
            project: {
                version,
                name
            }
        });
    }

    /**
     * Convert epoch timestamp to formatted string
     *
     * @private
     * @param {number} input
     * @memberof HealthController
     */
    private formatSecondsToHourString = (input: number): string => {
        const pad = (s: number) => (s < 10 ? '0' : '') + s;
        
        const hours = pad(Math.floor(input / (60 * 60)));
        const minutes = pad(Math.floor((input % (60 * 60)) / 60));
        const seconds = pad(Math.floor(input % 60));

        return `${hours}:${minutes}:${seconds}`;
    };
}
