import { fromJS } from 'immutable';

import {
  UPDATE_LOGIN_INPUT_FIELD,
  IS_LOADING_USER_LOGIN,
  LOGIN_SUCCESS,
  ACCESS_TOKEN,
  LOGIN_ERROR,
  LOGIN
} from './constants';

const initialState = fromJS({
  loginInputField: {
    password: '',
    username: ''
  },
  isLoadingUserLogin: false,
  success: null,
  errorMessage: ''
});

export default function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGIN_INPUT_FIELD:
      return state.setIn([ 'loginInputField', action.field ], action.value);
    case IS_LOADING_USER_LOGIN:
      return state.set('isLoadingUserLogin', action.status);
    case LOGIN_SUCCESS:
      return state.set('success', action.payload);
    case LOGIN_ERROR:
      return state.set('errorMessage', action.payload);
    default:
      return state;
  }
}

export function updateLoginInputField(field, value) {
  return {
    type: UPDATE_LOGIN_INPUT_FIELD,
    field,
    value
  };
}

export function setIsLogin(status) {
  return {
    type: IS_LOADING_USER_LOGIN,
    status
  };
}

export function loginFlow(payload) {
  return {
    type: LOGIN,
    payload
  };
}
