import { mockPassportMiddlewares } from '../../../src/utils/mocks/passport';
import { Routes, validateRouterPathsExist } from '../../../src/utils/test/expressRouterUtils';

jest.mock('../../../src/middlewares/passport', () => (mockPassportMiddlewares));

describe('UserRouter', () => {
    it('Should create user router', () => {
        const actualRouter = jest.requireActual('../../../src/api/users/user.router').default;

        const routes: Routes[] = [
            { path: '/', method: 'get' },
            { path: '/:oid', method: 'get' },
            { path: '/', method: 'post' },
            { path: '/', method: 'post' },
            { path: '/:oid', method: 'put' },
            { path: '/:oid', method: 'patch' },
            { path: '/:oid', method: 'delete' },
        ];

        validateRouterPathsExist(actualRouter, routes);
    });
});
