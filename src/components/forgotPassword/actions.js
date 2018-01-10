import axios from 'axios';
import { DEV_API_URL_LOCALHOST } from 'react-native-dotenv';
import * as actionTypes from '../../actions/constants';

export const sendForgotPassVerificationCode = email => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_LOADING_IN_SEND_VERIF_CODE_FORGOT_PASS,
  });
  axios.post(`${DEV_API_URL_LOCALHOST}/api/mail/sent-forgot-pass-code`, email).then((res) => {
    if (res.data.ok) {
      dispatch({
        type: actionTypes.SEND_FORGOT_PASS_VERIF_CODE_SUCCESS,
        payload: res.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.SEND_FORGOT_PASS_VERIF_CODE_ERR,
        payload: res.data.msg,
      });
    }
  });
};

export const test = () => {};