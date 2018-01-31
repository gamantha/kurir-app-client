import forgotPasswordService from '../../services/forgotpassword';
import { SHOW_LOADING, VERIFICATION_STATUS, VERIFICATION_MESSAGE, SET_EMAIL } from './constants';

/**
 * Toggle loading status
 *
 * @param  Boolean status
 * @return Object
 */
export function showLoading(status) {
  return {
    type: SHOW_LOADING,
    status
  };
}

/**
 * Set email value on reducer object
 *
 * @param  Boolean status
 * @return Object
 */
export function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email
  };
}

/**
 * Api call for forgot password
 * Email will be use to send the verification code
 *
 * @param  Object email - registered user email
 * @return Object
 */
export function forgotPassword(email) {
  return async (dispatch) => {
    try {
      dispatch(showLoading(true));

      const res = await forgotPasswordService.post(email);
      if (res.data && res.data.ok) {
        dispatch({ type: VERIFICATION_STATUS, payload: true });
        dispatch({ type: VERIFICATION_MESSAGE, payload: res.data.msg });
      } else {
        dispatch({ type: VERIFICATION_STATUS, payload: false });
        dispatch({ type: VERIFICATION_MESSAGE, payload: res.data.msg });
      }
      dispatch(showLoading(false));
    } catch (err) {
      dispatch(showLoading(false));
      return err;
    }
  };
}
