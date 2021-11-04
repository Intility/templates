import { mockPassportMiddlewares } from '../src/utils/mocks/passport';
import { Routes, validateRouterPathsExist } from '../src/utils/test/expressRouterUtils';

jest.mock('../src/middlewares/passport', () => (mockPassportMiddlewares));

describe('BaseRouter', () => {
    it('Should create user router', () => {
        const actualRouter = jest.requireActual('../src/baseRouter').default;

        const routes: Routes[] = [
            { path: '/health' },
        ];

        validateRouterPathsExist(actualRouter, routes);
    });
});
