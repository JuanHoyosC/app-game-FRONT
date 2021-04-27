import { types } from '../types/types';
import jwt_decode from "jwt-decode"

const init = () => {
    const token = localStorage.getItem('appToken');
    if (token && token.length > 3) {
        const decoded = jwt_decode(token);
        return ({ type: types.LOGIN, payload:  decoded.token })
    }

    return ({ type: types.LOGOUT});
}

export const authReducer = (state = init(), action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...action.payload,
                logged: true
            }

        case types.RETURN_EQUAL_AUTH:
            return {
                ...state,
                ...action.payload
            }   
        case types.LOGOUT:
            return {
                logged: false
            }
        default:
            return state;
    }
}
