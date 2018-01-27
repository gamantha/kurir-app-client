import { fromJS } from 'immutable';

import { UPDATE_LOGIN_INPUT_FIELD, IS_LOADING_USER_LOGIN, LOGIN_IS_SUCCESS } from './constants';

const initialState = fromJS({
  loginInputField: {
    password: '',
    username: ''
  },
  isLoadingUserLogin: false,
  loginData: {}
});

function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGIN_INPUT_FIELD:
      return state.setIn(['loginInputField', action.field], action.value);
    case IS_LOADING_USER_LOGIN:
      return state.set('isLoadingUserLogin', action.status);
    case LOGIN_IS_SUCCESS:
      return state.set('loginData', fromJS(action.payload));
    default:
      return state;
  }
}

export default userLoginReducer;
