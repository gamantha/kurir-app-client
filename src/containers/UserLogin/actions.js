import { SET_PASSWORD, SET_EMAIL, IS_LOADING_USER_LOGIN, LOGIN_IS_SUCCESS } from './constants';
import Api from '../../services/userlogin';

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    payload: password
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email
  };
}

export function setIsLogin(status) {
  return {
    type: IS_LOADING_USER_LOGIN,
    status
  };
}

export function loginUser(payload) {
  return async (dispatch) => {
    try {
      dispatch(setIsLogin(true));
      const response = await Api.post(payload);
      if (response && response.data) {
        dispatch({
          type: LOGIN_IS_SUCCESS,
          payload: response.data
        });
        dispatch(setIsLogin(false));
      }
      dispatch(setIsLogin(false));
    } catch (err) {
      dispatch(setIsLogin(false));
      console.log(err);
    }
  };
}
