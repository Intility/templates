import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
    return res.status(500).json({
        message: err.message
    });
};

export default errorHandler;
