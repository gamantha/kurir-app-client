import { fromJS } from 'immutable';
import {
  USER_REGISTRATION_SUCCESS,
  IS_LOADING,
  UPDATE_SINGLE_INPUT_FIELD,
  INPUT_FIELD_VALIDATION,
  SET_ERROR_MESSAGE,
  REGISTER,
  INPUT_FIELD
} from './constants';

/**
 * Initial state for containers
 *
 * @type {Immutable Maps}
 */
const initialState = fromJS({
  isLoading: false,
  errorMessage: '',
  inputFields: {
    username: '',
    email: '',
    password: '',
    repassword: ''
  },
  inputFieldValidations: {
    isValidName: false,
    isValidEmail: false,
    isValidPassword: false,
    isValidRepassword: false
  },
  registeredUser: {}
});

/**
 * Setter for userRegistration in main reducer.
 *
 * @param  {Immutable Maps} [state=initialState]
 * @param  {Object}         action
 * @return {Immutable Maps}
 */
export default function userRegistrationReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return state.set('isLoading', action.status);
    case SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.payload);
    case UPDATE_SINGLE_INPUT_FIELD:
      return state.setIn([ 'inputFields', action.field ], action.value);
    case INPUT_FIELD_VALIDATION:
      return state.setIn([ 'inputFieldValidations', action.field ], action.value);
    case USER_REGISTRATION_SUCCESS:
      return state.set('registeredUser', fromJS(action.payload));
    default:
      return state;
  }
}

export function setIsLoading(status) {
  return {
    type: IS_LOADING,
    status
  };
}

export function setErrorMessage(payload) {
  return {
    type: SET_ERROR_MESSAGE,
    payload
  };
}

export function updateSingleInputField(field, value) {
  return {
    type: UPDATE_SINGLE_INPUT_FIELD,
    field,
    value
  };
}

export function setValidationValue(field, value) {
  return {
    type: INPUT_FIELD_VALIDATION,
    field,
    value
  };
}

export function inputFieldValidations(field, value) {
  return {
    type: INPUT_FIELD,
    field,
    value
  };
}

export function registerUser(payload) {
  return {
    type: REGISTER,
    payload
  };
}
