import { HealthController } from '../../../src/api/health/health.controller';
import { Request, Response } from 'express';

describe('HealthController', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    
    beforeEach(() => {
        req = {} as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };
    });
    
    it('Should return service status', () => {
        const controller = new HealthController();
        
        // @ts-expect-error Mock request object
        controller.getServerHealth(req, res as Response);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.any(Object));
    });
});
