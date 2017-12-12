import axios from 'axios';
import { DEV_API_URL } from 'react-native-dotenv';
import Expo from 'expo';
import * as actionTypes from '../../actions/constants';

export const userTryToLogin = data => (dispatch) => {
  const login = async () => {
    try {
      const result = await axios.post(`${DEV_API_URL}/api/sender/login`, data);
      if (!result.data.ok) {
        return result.data;
      }
      Expo.SecureStore.setItemAsync('token', result.data.token);
      dispatch({
        type: actionTypes.LOGIN_USER,
      });
      return result.data;
    } catch (err) {
      return err;
    }
  };
  login();
};

export const userClickRegisterLabel = () => ({
  type: actionTypes.USER_CLICK_REGISTER_LABEL,
});
