import React from 'react';
import {renderRoutes} from "react-router-config";

import Header from './Header';
import {getCurrentUser} from "../actions";

const App = ({route}) => {
    return (
        <div>
            <Header/>
            {renderRoutes(route.routes)}
        </div>
    );
};

export const loadData = ({dispatch}) => {
    dispatch(getCurrentUser())
};

export default App;