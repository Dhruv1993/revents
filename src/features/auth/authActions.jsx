import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";
import { closeModal } from '../Modals/modalActions'

export const login = creds => { /// creds are passed through the redux forms
  
  return dispatch => {
      dispatch({type: LOGIN_USER,
        payload: {
          creds
        }});
        dispatch(closeModal());


  }

};

export const logout = () => {

    return {
        type: SIGN_OUT_USER
    }
}