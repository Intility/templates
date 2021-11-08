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

    afterEach(() => {
        jest.clearAllMocks();

        process.env.INTILITY_TENANT_ID = undefined;
        process.env.APP_CLIENT_ID = undefined;
    });
    
    it('Should block request, wrong tenant', () => {
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
    
    it('Should block request, wrong tenant with allowedTenants overwrite', () => {
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

        authorize(mockAcceptedRolesRoles, { allowedTenants: [ 'zzz' ] })(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.any(String) }));
    });
    
    it('Should block request, guest user', () => {
        const mockUserRoles = [ 'Admin' ];
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: intilityTenantId,
                acct: 1, // Guest user
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

    it('Should block the request, allowGuests false and guest User', () => {
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: intilityTenantId,
                acct: 1, // Guest User
                roles: mockAcceptedRolesRoles
            } as Partial<AzureToken>
        };
        
        process.env.INTILITY_TENANT_ID = intilityTenantId;
        process.env.APP_CLIENT_ID = 'xxx';

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize(mockAcceptedRolesRoles, { allowGuests: false })(req, res, next);
        
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.any(String) }));
    });
    
    it('Should block request, invalid roles', () => {
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

        it('Should block the request, empty array', () => {
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

        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
    });
    
    it('Should allow the request, correct roles and allowGuests', () => {
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: intilityTenantId,
                acct: 1,
                roles: mockAcceptedRolesRoles
            } as Partial<AzureToken>
        };
        
        process.env.INTILITY_TENANT_ID = intilityTenantId;
        process.env.APP_CLIENT_ID = 'xxx';

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize(mockAcceptedRolesRoles, { allowGuests: true })(req, res, next);

        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
    });

    it('Should block the request, missing decoded user values', () => {
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: undefined
        };
        
        process.env.INTILITY_TENANT_ID = intilityTenantId;
        process.env.APP_CLIENT_ID = 'xxx';

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize(mockAcceptedRolesRoles, { allowGuests: true })(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.any(String) }));
    });
    
    it('Should block the request, missing user roles in decoded user', () => {
        const mockAcceptedRolesRoles = [ 'Admin' ];
        const intilityTenantId = 'xxx';
        
        req = {
            user: {
                tid: intilityTenantId,
                acct: 1,
                roles: undefined
            } as Partial<AzureToken>
        };

        const { authorize } = jest.requireActual('../../src/middlewares/passport');

        authorize(mockAcceptedRolesRoles, { allowGuests: true })(req, res, next);

        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.any(String) }));
    });
});
