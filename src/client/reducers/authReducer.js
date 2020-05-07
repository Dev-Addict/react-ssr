import {GET_CURRENT_USER} from "../actions/types";

export default (state = null, action) => {
    if (action.type === GET_CURRENT_USER) {
        return action.payload.data || false;
    }
    return state;
};