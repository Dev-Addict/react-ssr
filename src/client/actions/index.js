import axios from 'axios';

import {GET_USERS} from "./types";

export const getUsers = () => async dispatch => {
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

    dispatch({
        type: GET_USERS,
        payload: res
    });
};