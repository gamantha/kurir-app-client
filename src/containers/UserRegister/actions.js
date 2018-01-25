import {
  USER_REGISTRATION_SUCCESS,
  IS_LOADING,
  UPDATE_SINGLE_INPUT_FIELD,
  INPUT_FIELD_VALIDATION
} from './constants';
import Api from '../../services/userregister';
import { validateEmail, validateName } from '../../helpers/utils';

export function setIsLoading(status) {
  return {
    type: IS_LOADING,
    status
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
      const password = getState().getIn(['userRegister', 'inputFields', 'password']);
      isValid = value.length < 4 && value !== '' && value === password;
      dispatch(setValidationValue(field, isValid));
    }
  };
}

/**
 * Do http request to api
 *
 * We need check if password dan repassword match first and give user warning.
 *
 * @param  {object} payload
 * @return {object}
 */
export function registerUser(payload, callback) {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await Api.post(payload);
      if (response && response.data) {
        dispatch({
          type: USER_REGISTRATION_SUCCESS,
          payload: response.data
        });
        callback();
      }
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));
      console.log(err);
    }
  };
}
