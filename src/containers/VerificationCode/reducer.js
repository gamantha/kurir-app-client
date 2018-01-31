import { fromJS } from 'immutable';
import {
  IS_LOADING_VERIFICATION_CODE,
  VERIFICATION_STATUS,
  VERIFICATION_MESSAGE,
  SET_VERIFICATION_CODE
} from './constants';

/**
 * Initial state for application
 * @type {Map}
 */
const initialState = fromJS({
  code: '',
  isLoading: false,
  verificationStatus: '',
  verificationMessage: ''
});

/**
 * Set all object map value corresponding with the action type
 * The payload come from  action payload of './actions.js' of
 * VerificationCode Container
 *
 * @param  {Map} [state=initialState]
 * @param  {Object} action
 * @return {Mixed}
 */
function verificationCodeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VERIFICATION_CODE:
      return state.set('code', action.payload);
    case IS_LOADING_VERIFICATION_CODE:
      return state.set('isLoading', action.status);
    case VERIFICATION_STATUS:
      return state.set('verificationStatus', action.payload);
    case VERIFICATION_MESSAGE:
      return state.set('verificationMessage', action.payload);
    default:
      return state;
  }
}

export default verificationCodeReducer;
