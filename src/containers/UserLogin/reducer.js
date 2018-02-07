import { fromJS } from 'immutable';

import {
  UPDATE_LOGIN_INPUT_FIELD,
  IS_LOADING_USER_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './constants';

const initialState = fromJS({
  loginInputField: {
    password: '',
    username: ''
  },
  isLoadingUserLogin: false,
  loginData: {},
  errorMessage: ''
});

function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGIN_INPUT_FIELD:
      return state.setIn([ 'loginInputField', action.field ], action.value);
    case IS_LOADING_USER_LOGIN:
      return state.set('isLoadingUserLogin', action.status);
    case LOGIN_SUCCESS:
      return state.set('loginData', fromJS(action.payload));
    case LOGIN_ERROR:
      return state.set('errorMessage', action.payload);
    default:
      return state;
  }
}

export default userLoginReducer;
