import axios from 'axios';
import { DEV_API_URL_LOCALHOST } from 'react-native-dotenv';
import * as actionTypes from '../../actions/constants';

export const checkVeriCode = requestBody => (dispatch) => {
  axios.post(`${DEV_API_URL_LOCALHOST}/api/mail/check-forgot-code`, requestBody).then((res) => {
    if (res.data.ok) {
      console.log(res.data);
    } else {
      console.log(res.data);
    }
  });
};

export const test = () => {};
