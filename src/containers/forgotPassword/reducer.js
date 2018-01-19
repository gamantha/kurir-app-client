import { fromJS } from 'immutable';
import {
  SHOW_LOADING,
  VERIFICATION_SUCCESS,
  VERIFICATION_ERROR,
} from './constants';

const initialState = fromJS({
  showLoading: false,
  message: '',
  isSuccess: false,
});

/**
 * Will handle all dispatched action and
 * Set the value of state from actions.js
 *
 * @param  Object state  - initialState
 * @param  Object action - { type, payload } from action creator
 * @return Object
 */
function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return state.set('showLoading', action.status);
    case VERIFICATION_SUCCESS:
      return state.set('message', action.payload);
    case VERIFICATION_ERROR:
      return state.set('isSuccess', action.status);
    default:
      return state;
  }
}

export default forgotPasswordReducer;
