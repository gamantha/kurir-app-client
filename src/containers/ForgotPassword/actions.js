import forgotPasswordService from '../../services/forgotpassword';
import {
    SHOW_LOADING,
    VERIFICATION_STATUS,
    VERIFICATION_MESSAGE,
    SET_EMAIL
} from './constants';

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
    return async dispatch => {
        try {
            dispatch(showLoading(true));
            const res = await forgotPasswordService.post({ email });
            if (res.data && res.data.meta && res.data.meta.message) {
                dispatch({ type: VERIFICATION_STATUS, status: true });
                dispatch({
                    type: VERIFICATION_MESSAGE,
                    payload: res.data.meta.message
                });
            }
            dispatch(showLoading(false));
        } catch (err) {
            dispatch(showLoading(false));
            if (err.response && err.response.data.meta) {
                dispatch({
                    type: VERIFICATION_MESSAGE,
                    payload: err.response.data.meta.message
                });
            }
        }
    };
}
