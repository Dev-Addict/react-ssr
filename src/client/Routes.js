import React from 'react';

import App from "./components/App";
import HomePage from "./pages/HomePage";
import UsersPage, {loadData as UsersPageLoadData} from "./pages/UsersPage";

export default [
    {
        component: App,
        routes: [{
            path: '/',
            component: HomePage,
            exact: true
        },
            {
                path: '/users',
                component: UsersPage,
                loadData: UsersPageLoadData
            }]
    }
];