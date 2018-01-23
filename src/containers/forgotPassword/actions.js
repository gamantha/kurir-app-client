import forgotPasswordService from '../../services/forgotpassword';
import { SHOW_LOADING, VERIFICATION_SUCCESS, VERIFICATION_ERROR, SET_EMAIL } from './constants';

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

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email
  };
}
/**
 * Api call for forgot password
 * Email will be use to send the verifycation code
 *
 * @param  Object email - registered user email
 * @return Object
 */
export function forgotPassword(email) {
  return (dispatch) => {
    dispatch(showLoading(true));

    forgotPasswordService
      .post(email)
      .then((res) => {
        if (res.data && res.data.ok) {
          dispatch({ type: VERIFICATION_SUCCESS, payload: res.data.msg });
        } else {
          dispatch({ type: VERIFICATION_ERROR, payload: res.data.msg });
        }
        dispatch(showLoading(false));
      })
      .catch((err) => {
        dispatch(showLoading(false));
        return err;
      });
  };
}
