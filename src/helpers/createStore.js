import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import reducers from '../client/reducers/index';

export default () => {
    return createStore(reducers, {}, applyMiddleware(thunk));
};