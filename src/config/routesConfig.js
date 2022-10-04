//* Import components here 👇👇
import { ErrorPage, HomePage, MantainancePage, ProjectPage } from 'pages';

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
        path: parsePath('/project/:projectId'),
        component: ProjectPage,
        exact: true,
        footer: false,
        scrollBtn: false
    },
    {
        path: parsePath(mantainancePath),
        component: MantainancePage,
        layout: false
    },
    {
        component: ErrorPage,
        layout: false,
        noLayoutFooter: false,
        noLayoutBtn: true
    }
];
