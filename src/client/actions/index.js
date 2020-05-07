import {GET_USERS} from "./types";

export const getUsers = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/users');

    dispatch({
        type: GET_USERS,
        payload: res
    });
};