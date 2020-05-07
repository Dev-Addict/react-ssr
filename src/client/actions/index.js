import {GET_USERS, GET_CURRENT_USER, GET_ADMINS} from "./types";

export const getUsers = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/users');

    dispatch({
        type: GET_USERS,
        payload: res
    });
};

export const getCurrentUser = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/current_user');
    dispatch({
        type: GET_CURRENT_USER,
        payload: res
    })
};

export const getAdmins = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/admins');
    dispatch({
        type: GET_ADMINS,
        payload: res
    });
};