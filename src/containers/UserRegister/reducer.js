import {
    USER_REGISTRATION_SUCCESS,
    IS_LOADING,
    UPDATE_SINGLE_INPUT_FIELD,
    INPUT_FIELD_VALIDATION,
    SET_ERROR_MESSAGE,
    REGISTER,
    INPUT_FIELD,
    CLEAR_ERROR_MESSAGE,
    SOCIAL_OAUTH
} from './constants';

/**
 * Initial state for containers
 *
 * @type {Maps}
 */
const initialState = {
    isLoading: false,
    errorMessage: '',
    inputFields: {
        email: '',
        username: '',
        password: '',
        repassword: ''
    },
    inputFieldValidations: {
        email: null,
        username: null,
        password: null,
        repassword: null
    },
    registeredUser: {}
};

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
            return { ...state, isLoading: action.status };
        case SET_ERROR_MESSAGE:
            return { ...state, errorMessage: action.payload };
        case UPDATE_SINGLE_INPUT_FIELD:
            var newField = [];
            newField[action.field] = action.value;
            return {
                ...state,
                inputFields: { ...state['inputFields'], ...newField }
            };
        case INPUT_FIELD_VALIDATION:
            var newField = [];
            newField[action.field] = action.value;
            return {
                ...state,
                inputFieldValidations: {
                    ...state['inputFieldValidations'],
                    ...newField
                }
            };
        case CLEAR_ERROR_MESSAGE:
            return { ...state, errorMessage: '' };
        case USER_REGISTRATION_SUCCESS:
            return {
                ...state,
                inputFields: {
                    email: '',
                    username: '',
                    password: '',
                    repassword: ''
                },
                inputFieldValidations: {
                    email: null,
                    username: null,
                    password: null,
                    repassword: null
                }
            };
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

export const socialOauth = (tokenId, action, socialType) => ({
    type: SOCIAL_OAUTH,
    tokenId,
    action,
    socialType
});

export const clearErrorMessage = () => ({
    type: CLEAR_ERROR_MESSAGE
});
