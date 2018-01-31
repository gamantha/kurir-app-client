import {
  USER_REGISTRATION_SUCCESS,
  IS_LOADING,
  UPDATE_SINGLE_INPUT_FIELD,
  INPUT_FIELD_VALIDATION,
  SET_ERROR_MESSAGE
} from './constants';
import Api from '../../services/userregister';
import { validateEmail, validateName } from '../../helpers/utils';

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

function setValidationValue(field, value) {
  return {
    type: INPUT_FIELD_VALIDATION,
    field,
    value
  };
}

export function inputFieldValidations(field, value) {
  return (dispatch, getState) => {
    let isValid;
    if (field === 'isValidEmail') {
      isValid = validateEmail(value);
      dispatch(setValidationValue(field, isValid));
    }
    if (field === 'isValidName') {
      isValid = validateName(value);
      dispatch(setValidationValue(field, isValid));
    }
    if (field === 'isValidPassword') {
      isValid = value.length < 4 && value !== '';
      dispatch(setValidationValue(field, isValid));
    }
    if (field === 'isValidRepassword') {
      const password = getState().getIn([ 'userRegister', 'inputFields', 'password' ]);
      isValid = value.length > 4 && value !== '' && value === password;
      if (isValid) {
        dispatch(setValidationValue(field, isValid));
      }
    }
  };
}

/**
 * Get the user data and send to API
 * @param  {[type]}   payload
 * @param  {Function} callback This is callback action to userlogin if register succesfully
 * @return {[type]}
 */
export function registerUser(payload, callback) {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await Api.post(payload);
      if (response && response.data.meta.success && response.data.data) {
        dispatch({
          type: USER_REGISTRATION_SUCCESS,
          payload: response.data.data
        });
        callback();
      }
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));
      if (err.response && err.response.data) {
        dispatch(setErrorMessage(err.response.data.meta.message));
      }
    }
  };
}
