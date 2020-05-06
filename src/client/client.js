import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

import Routes from "./Routes";
import createStore from "../helpers/createStore";

const store = createStore();

ReactDOM.hydrate(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);