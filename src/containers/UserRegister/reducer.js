import { fromJS } from 'immutable';
import {
  SET_USERNAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_REPASSWORD,
  USER_REGISTRATION_SUCCESS,
  USER_CLICK_LOGIN_LABEL,
  IS_LOADING
} from './constants';

/**
 * Initial state for containers
 *
 * @type {Immutable Maps}
 */
const initialState = fromJS({
  isLoading: false,
  username: '',
  email: '',
  password: '',
  repassword: '',
  registeredUser: {}
});

/**
 * Setter for userRegistration in main reducer.
 *
 * @param  {Immutable Maps} [state=initialState]
 * @param  {Object}         action
 * @return {Immutable Maps}
 */
function userRegistrationReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return state.set('isLoading', action.status);
    case SET_USERNAME:
      return state.set('username', action.payload);
    case SET_PASSWORD:
      return state.set('password', action.payload);
    case SET_REPASSWORD:
      return state.set('repassword', action.payload);
    case SET_EMAIL:
      return state.set('email', action.payload);
    case USER_REGISTRATION_SUCCESS:
      return state.set('registeredUser', fromJS(action.response));
    default:
      return state;
  }
}

export default userRegistrationReducer;
