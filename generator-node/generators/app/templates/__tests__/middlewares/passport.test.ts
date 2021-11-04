import { AzureToken } from './../../src/interfaces/token';
import { NextFunction, Request, Response } from 'express';

describe('Passport Auth Middlewares', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    const next = jest.fn();
    
    beforeEach(() => {
        req = {} as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };
    });
    
    it('Should invalidate request, wrong tenant', () => {
        const mockUserRoles = [ 'Admin' ];
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: 'yyy',
                acct: 0,
                roles: mockUserRoles
            } as Partial<AzureToken>
        };
        
        process.env.INTILITY_TENANT_ID = intilityTenantId;
        process.env.APP_CLIENT_ID = 'xxx';

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize(mockAcceptedRolesRoles)(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.any(String) }));
    });
    
    it('Should invalidate request, guest user', () => {
        const mockUserRoles = [ 'Admin' ];
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: intilityTenantId,
                acct: 1,
                roles: mockUserRoles
            } as Partial<AzureToken>
        };
        
        process.env.INTILITY_TENANT_ID = intilityTenantId;
        process.env.APP_CLIENT_ID = 'xxx';

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize(mockAcceptedRolesRoles)(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.any(String) }));
    });
    
    it('Should invalidate request, invalid roles', () => {
        const mockUserRoles = [ 'User' ];
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: intilityTenantId,
                acct: 0,
                roles: mockUserRoles
            } as Partial<AzureToken>
        };
        
        process.env.INTILITY_TENANT_ID = intilityTenantId;
        process.env.APP_CLIENT_ID = 'xxx';

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize(mockAcceptedRolesRoles)(req, res, next);

        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.any(String) }));
    });
    
    it('Should allow the request, correct roles', () => {
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: intilityTenantId,
                acct: 0,
                roles: mockAcceptedRolesRoles
            } as Partial<AzureToken>
        };
        
        process.env.INTILITY_TENANT_ID = intilityTenantId;
        process.env.APP_CLIENT_ID = 'xxx';

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize(mockAcceptedRolesRoles)(req, res, next);

        expect(next).toHaveBeenCalled();
    });
    
    it('Should allow the request, all roles allowed', () => {
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: intilityTenantId,
                acct: 0,
                roles: mockAcceptedRolesRoles
            } as Partial<AzureToken>
        };
        
        process.env.INTILITY_TENANT_ID = intilityTenantId;
        process.env.APP_CLIENT_ID = 'xxx';

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize([])(req, res, next);

        expect(next).toHaveBeenCalled();
    });
});
