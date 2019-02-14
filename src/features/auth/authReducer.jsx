import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { createReducer } from '../../app/common/util/reducerUtil';


const initialState = {
    currentUser : {} // empty state at the begining. IT is an empty object
}

export const loginUser = (state, payload) => {

    return {
        ...state, // this returns a new state with following parameters
        authenticated: true,
        currentUser: payload.creds.email
    }
}

export const signOutUser = (state, payload) => {
        return {
            ...state,
            authenticated: false,
            currentUser: {}
        }
}

export default createReducer ( initialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser
})