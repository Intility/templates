import router from '../../../src/api/health/health.router';
import { Routes, validateRouterPathsExist } from '../../../src/utils/test/expressRouterUtils';

describe('HealthRouter', () => {
    it('Should create health router', () => {
        const routes: Routes[] = [
            { path: '/server', method: 'get' }
        ];

        validateRouterPathsExist(router, routes);
    });
});
