import axios from 'axios';
import { DEV_API_URL } from 'react-native-dotenv';
import * as actionType from '../../actions/constants';

export const userSuccessRegister = userData => ({
  type: actionType.REGISTER_USER,
  payload: userData,
});

export const userTryToRegister = data => (dispatch) => {
  const register = async () => {
    try {
      console.log(data);
      const result = await axios.post(`${DEV_API_URL}/api/sender/create`, data);
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
  type: actionType.USER_CLICK_LOGIN_LABEL,
});
