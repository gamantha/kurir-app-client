import { fromJS } from 'immutable';

import {
    UPDATE_LOGIN_INPUT_FIELD,
    IS_LOADING_USER_LOGIN,
    TEXT_INPUT_FOCUS,
    LOGIN_SUCCESS,
    ACCESS_TOKEN,
    LOGIN_ERROR,
    LOGIN
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
