import Api from '../../services/verificationcode';
import {
  IS_LOADING_VERIFICATION_CODE,
  VERIFICATION_STATUS,
  VERIFICATION_MESSAGE,
  SET_VERIFICATION_CODE
} from './constants';

export function isLoadingVerificationCode(status) {
  return {
    type: IS_LOADING_VERIFICATION_CODE,
    status
  };
}

export function setVerificationCode(verificationCode) {
  return {
    type: SET_VERIFICATION_CODE,
    payload: verificationCode
  };
}

export function checkCodeVerification(payload) {
  return async (dispatch) => {
    try {
      dispatch(isLoadingVerificationCode(true));
      const response = await Api.post(payload);
      if (response && response.data) {
        dispatch({
          type: VERIFICATION_STATUS,
          payload: response.data.msg
        });
      } else {
        dispatch({
          type: VERIFICATION_MESSAGE,
          payload: response.data.msg
        });
      }
      dispatch(isLoadingVerificationCode(false));
    } catch (err) {
      dispatch(isLoadingVerificationCode(false));
      console.log(err.message);
    }
  };
}
