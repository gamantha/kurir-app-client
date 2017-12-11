import axios from 'axios';
import { DEV_API_URL } from 'react-native-dotenv';
import Expo from 'expo';
import * as actionTypes from '../../actions/constants';

export const userTryToLogin = data => (dispatch) => {
  console.log(data);
  const login = async () => {
    try {
      const result = await axios.post(`${DEV_API_URL}/api/sender/login`, data);
      if (!result.data.ok) {
        return result.data;
      }
      Expo.SecureStore.setItemAsync('token', result.data.token);
      return result.data;
    } catch (err) {
      return err;
    }
  };
  login();
  dispatch({
    type: actionTypes.LOGIN_USER,
  });
};

export const userClickRegisterLabel = () => ({
  type: actionTypes.USER_CLICK_REGISTER_LABEL,
});

export const userClickLogout = () => ({
  type: actionTypes.USER_CLICK_LOGOUT_LABEL,
});
