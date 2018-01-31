import { UPDATE_LOGIN_INPUT_FIELD, IS_LOADING_USER_LOGIN, LOGIN_IS_SUCCESS } from './constants';
import { setErrorMessage } from '../UserRegister/actions';
import Api from '../../services/userlogin';

export function updateLoginInputField(field, value) {
  return {
    type: UPDATE_LOGIN_INPUT_FIELD,
    field,
    value
  };
}

export function setIsLogin(status) {
  return {
    type: IS_LOADING_USER_LOGIN,
    status
  };
}

/**
 * Send the payload to API
 *
 * @param  {Object} payload - email/username and password
 * @param  {Function} callback - Actions to profile if login succesfully
 * @return {Object}
 */
export function loginUser(payload, callback) {
  return async (dispatch) => {
    try {
      dispatch(setIsLogin(true));
      const response = await Api.post(payload);
      if (response && response.data.meta.success && response.data.data) {
        dispatch({
          type: LOGIN_IS_SUCCESS,
          payload: response.data.data
        });
        callback();
        dispatch(setIsLogin(false));
      }
      dispatch(setIsLogin(false));
    } catch (err) {
      dispatch(setIsLogin(false));
      if (err.response && err.response.data) {
        dispatch(setErrorMessage(err.response.data.meta.message));
      }
    }
  };
}
