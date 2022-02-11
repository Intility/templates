import { Request, Response, NextFunction } from 'express';

export const mockPassportMiddlewares = {
    authenticate: (_req: Request, _res: Response, next: NextFunction) => next(),
    authorize: (_roles: string[]) => function authorize (_req: Request, _res: Response, next: NextFunction){ return next(); }
};
