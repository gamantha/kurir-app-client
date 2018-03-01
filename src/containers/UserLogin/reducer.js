import { fromJS } from 'immutable';

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

const initialState = fromJS({
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
    }
});

export default function userLoginReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOGIN_INPUT_FIELD:
            return state.setIn(['loginInputField', action.field], action.value);
        case IS_LOADING_USER_LOGIN:
            return state.set('isLoadingUserLogin', action.status);
        case LOGIN_SUCCESS:
            return state.set('success', action.payload);
        case LOGIN_ERROR:
            return state.set('errorMessage', action.payload);
        case TEXT_INPUT_FOCUS:
            return state.setIn(['inputTextFocus', action.field], action.style);
        case CLEAR_ERROR_MESSAGE:
            return state.set('errorMessage', '');
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
