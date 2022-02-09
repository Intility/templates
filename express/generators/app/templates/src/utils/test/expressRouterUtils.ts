import { Router } from 'express';

export interface Routes {
    path: string;
    /**
     * HTTP Method for this endpoint
     * If route is another router, leave this out.
     */
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head',
}

interface RouteStack {
    name: 'router' | string;
    regexp: RegExp;
    route: {
        methods: Record<string, boolean>
    };
}

export const validateRouterPathsExist = (router: Router, routes: Routes[]): void => {
    routes.forEach((route) => {
        const match: RouteStack = router.stack.find((routeStack: RouteStack) => {
            if (routeStack.route) {
                // You are testing an endpoint
                if (!route.method) {
                    throw new Error('Looks like you are testing and endpoint, please provide an method value in routes object');
                }
                return (routeStack.regexp as RegExp).test(route.path) && routeStack.route?.methods[route.method];
            } else {
                return (routeStack.regexp as RegExp).test(route.path);
            }
        });

        expect(match).toBeTruthy();
    });
};
