import { fromJS } from 'immutable';

import { SET_PASSWORD, SET_EMAIL, IS_LOADING_USER_LOGIN, LOGIN_IS_SUCCESS } from './constants';

const initialState = fromJS({
  password: '',
  email: '',
  isLoadingUserLogin: false,
  loginData: {}
});

function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state.set('email', action.payload);
    case SET_PASSWORD:
      return state.set('password', action.payload);
    case IS_LOADING_USER_LOGIN:
      return state.set('isLoadingUserLogin', action.status);
    case LOGIN_IS_SUCCESS:
      return state.set('loginData', fromJS(action.payload));
    default:
      return state;
  }
}

export default userLoginReducer;
