import axios from 'axios';
import { DEV_API_URL_LOCALHOST } from 'react-native-dotenv';
import * as actionTypes from '../../actions/constants';

export const checkVeriCode = requestBody => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_LOADING_IN_CHECK_VERIF_CODE_FORGOT_PASS,
  });
  axios.post(`${DEV_API_URL_LOCALHOST}/api/mail/check-forgot-code`, requestBody).then((res) => {
    if (res.data.ok) {
      dispatch({
        type: actionTypes.CHECK_VERI_CODE_FORGOT_PASS_SUCCESS,
        payload: res.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.CHECK_VERI_CODE_FORGOT_PASS_ERR,
        payload: res.data.msg,
      });
    }
  });
};

export const test = () => {};
