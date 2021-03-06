import { MiddlewareRegistry } from '../redux';

import { APP_NAVIGATE } from './actionTypes';
import RouteRegistry from './RouteRegistry';

/**
 * This router middleware is used to abstract navigation inside the app for both
 * native and web.
 *
 * @param {Store} store - Redux store.
 * @returns {Function}
 */
const router = store => next => action => {
    if (action.type === APP_NAVIGATE) {
        let route = RouteRegistry.getRouteByComponent(action.component);

        if (route && route.navigate) {
            return route.navigate(store, action);
        }
    }

    return next(action);
};

MiddlewareRegistry.register(router);
