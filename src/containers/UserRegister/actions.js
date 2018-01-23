import {
  SET_USERNAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_REPASSWORD,
  USER_REGISTRATION_SUCCESS,
  USER_CLICK_LOGIN_LABEL,
  IS_LOADING
} from './constants';
import Api from '../../services/userregister';

export function setIsLoading(status) {
  return {
    type: IS_LOADING,
    status
  };
}

export function setUserName(name) {
  return {
    type: SET_USERNAME,
    payload: name
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email
  };
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    payload: password
  };
}

export function setRePassword(password) {
  return {
    type: SET_REPASSWORD,
    payload: password
  };
}

/**
 * Do http request to api
 *
 * We need check if password dan repassword match first and give user warning.
 *
 * @param  {object} payload
 * @return {object}
 */
export function registerUser(payload) {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await Api.post(payload);
      if (response && response.data) {
        dispatch({
          type: USER_REGISTRATION_SUCCESS,
          payload: response.data
        });
      }
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));
      console.log(err);
    }
  };
}
