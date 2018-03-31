import {
    UPDATE_LOGIN_INPUT_FIELD,
    IS_LOADING_USER_LOGIN,
    TEXT_INPUT_FOCUS,
    REFRESH_TOKEN,
    LOGIN_SUCCESS,
    ACCESS_TOKEN,
    LOGIN_ERROR,
    LOGIN,
    LOGOUT,
    CLEAR_ERROR_MESSAGE
} from './constants';

const initialState = {
    loginInputField: {
        password: '',
        username: ''
    },
    isLoadingUserLogin: false,
    success: null,
    errorMessage: '',
    inputTextFocus: {
        username: '#FFFFFF',
        password: '#FFFFFF'
    },
    userId: '',
    username: '',
    email: ''
};

export default function userLoginReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOGIN_INPUT_FIELD:
            var newField = [];
            newField[action.field] = action.value;
            return {
                ...state,
                loginInputField: { ...state['loginInputField'], ...newField }
            };
        case IS_LOADING_USER_LOGIN:
            return { ...state, isLoadingUserLogin: action.status };
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                userId: action.payload.id,
                username: action.payload.username,
                email: action.payload.email
            };
        case LOGIN_ERROR:
            return { ...state, errorMessage: action.payload };
        case TEXT_INPUT_FOCUS:
            var newField = [];
            newField[action.field] = action.value;
            return {
                ...state,
                inputTextFocus: { ...state['inputTextFocus'], ...newField }
            };
        case CLEAR_ERROR_MESSAGE:
            return { ...state, errorMessage: '' };

        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export const updateLoginInputField = (field, value) => ({
    type: UPDATE_LOGIN_INPUT_FIELD,
    field,
    value
});

export const setIsLogin = status => ({
    type: IS_LOADING_USER_LOGIN,
    status
});

export const loginFlow = payload => ({
    type: LOGIN,
    payload
});

export const textInputFocus = (field, style) => ({
    type: TEXT_INPUT_FOCUS,
    field,
    style
});

export const reqRefreshToken = refreshToken => ({
    type: REFRESH_TOKEN,
    payload: refreshToken
});

export const logoutFlow = () => ({
    type: LOGOUT
});

export const clearErrorMessage = () => ({
    type: CLEAR_ERROR_MESSAGE
});
