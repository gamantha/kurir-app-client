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
        email: '',
        password: '',
        repassword: ''
    },
    inputFieldValidations: {
        isValidEmail: null,
        isValidPassword: null,
        isValidRepassword: null
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
            return state.setIn(['inputFields', action.field], action.value);
        case INPUT_FIELD_VALIDATION:
            console.log('REDUCER', action);
            return state.setIn(
                ['inputFieldValidations', action.field],
                action.value
            );
        case USER_REGISTRATION_SUCCESS:
            return state.set('registeredUser', fromJS(action.payload));
        default:
            return state;
    }
}

export const setIsLoading = status => ({
    type: IS_LOADING,
    status
});

export const setErrorMessage = payload => ({
    type: SET_ERROR_MESSAGE,
    payload
});

export const updateSingleInputField = (field, value) => ({
    type: UPDATE_SINGLE_INPUT_FIELD,
    field,
    value
});

export const setValidationValue = (field, value) => ({
    type: INPUT_FIELD_VALIDATION,
    field,
    value
});

export const inputFieldValidations = (field, value) => ({
    type: INPUT_FIELD,
    field,
    value
});

export const registerUser = payload => ({
    type: REGISTER,
    payload
});
