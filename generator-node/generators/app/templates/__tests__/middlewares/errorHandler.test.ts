import { Request, Response, NextFunction } from 'express';
import errorHandler from '../../src/middlewares/errorHandler';

describe('ErrorHandler', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;
    
    beforeEach(() => {
        req = {
            params: {},
            query: {}
        } as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };
    });
    
    it('Should handle errors', () => {
        errorHandler(
            new Error('Hello World'),
            req as Request,
            res as Response,
            next
        );

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });
});
