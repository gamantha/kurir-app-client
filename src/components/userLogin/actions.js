import axios from 'axios';
import { DEV_API_URL } from 'react-native-dotenv';
import * as actionTypes from '../../actions/constants';

export const userTryToLogin = data => (dispatch) => {
  console.log(data);
  const login = async () => {
    try {
      const result = await axios.post(`${DEV_API_URL}/api/sender/login`, data);
      console.log(result.data);
      return result.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  login();
};

export const test = () => {};
