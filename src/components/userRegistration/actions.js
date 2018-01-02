import axios from 'axios';
import { DEV_API_URL_IP_2 } from 'react-native-dotenv';
import * as actionTypes from '../../actions/constants';

export const userSuccessRegister = userData => ({
  type: actionTypes.REGISTER_USER,
  payload: userData,
});

export const userTryToRegister = data => (dispatch) => {
  const register = async () => {
    try {
      console.log(data);
      const result = await axios.post(`${DEV_API_URL_IP_2}/api/sender/create`, data);
      console.log(result.data);
      return result.data;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  register();
};

export const userClickLoginLabel = () => ({
  type: actionTypes.USER_CLICK_LOGIN_LABEL,
});
