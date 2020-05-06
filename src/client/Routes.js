import React from 'react';

import Home from "./Components/Home";
import UsersList, {loadData} from "./Components/UsersList";

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: UsersList,
        loadData
    }
];