import axios from 'axios';
import { DEV_API_URL_IP_2 } from 'react-native-dotenv';
import Expo from 'expo';
import { Toast } from 'native-base';
import * as actionTypes from '../../actions/constants';

export const userTryToLogin = data => (dispatch) => {
  // axios.get('http://192.168.0.105:3000/api/sender/').then((res) => {
  //   console.log(res.data);
  // });
  // fetch(`${DEV_API_URL}/api/sender/`).then((response) => {
  //   console.log(response.json);
  //   return response.json();
  // });
  const login = async () => {
    try {
      console.log(data);
      const result = await axios.post(`${DEV_API_URL_IP_2}/api/sender/login`, data);
      console.log(result.data);
      if (result.data.ok) {
        Expo.SecureStore.setItemAsync('token', result.data.token);
        dispatch({
          type: actionTypes.LOGIN_USER,
          payload: result.data.msg,
        });
        Toast.show({
          text: `${result.data.msg}`,
          position: 'bottom',
          buttonText: 'Okay',
        });
        return result.data;
      }
      dispatch({
        type: actionTypes.LOGIN_USER,
        payload: result.data.msg,
      });
      Toast.show({
        text: `${result.data.msg}`,
        position: 'bottom',
        buttonText: 'Okay',
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
