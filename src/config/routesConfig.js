//* Import components here 👇👇
import { ErrorPage, HomePage, MantainancePage } from 'pages';

import { mantainancePath, parsePath } from 'utils/helpers';
import { MainRouteRedirect } from 'utils';

export const defaultRedirects = {
    notAuthenticated: '/home',
    default: '/home'
};

export const routes = [
    {
        path: parsePath('/'),
        component: MainRouteRedirect,
        exact: true,
        footer: false
    },
    {
        path: parsePath('/home'),
        component: HomePage,
        exact: true,
        footer: false
    },
    {
        path: parsePath(mantainancePath),
        component: MantainancePage,
        layout: false
    },
    {
        component: ErrorPage,
        layout: false,
        noLayoutFooter: true,
        noLayoutBtn: true
    }
];
