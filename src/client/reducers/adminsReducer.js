import {GET_ADMINS} from "../actions/types";

export default (state = [], action) => {
    if (action.type === GET_ADMINS) {
        return action.payload.data;
    }
    return state;
};