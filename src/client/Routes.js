import React from 'react';

import HomePage from "./pages/HomePage";
import UsersPage , {loadData as UsersPageLoadData} from "./pages/UsersPage";

export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/users',
        component: UsersPage,
        loadData: UsersPageLoadData
    }
];