import { updateObject } from "../_helper/utility";


const initState = {
    token: "",
    message: "",
    error: "",
    loading: false
}


export default function AuthReducer(state = initState, action) {
    switch (action.type) {
        case "AUTH_START":
            return updateObject(state, { error: null, loading: true });
        case "AUTH_SUCCESS":
            return updateObject(state, {
                token: action.token,
                message: action.message,
                loading: false,
            });
        case "AUTH_FAIL":
            return updateObject(state, {
                error: action.error,
                loading: false
            });
        case "LOGOUT":
            return updateObject(state, initState);
        default:
            return { ...state };
    }

}