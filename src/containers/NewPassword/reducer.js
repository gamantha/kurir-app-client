import { fromJS } from 'immutable';

import {
    SHOW_LOADING,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_ERROR,
    TEXT_INPUT_FOCUS,
    CLEAR_ERROR_MESSAGE,
    UPDATE_NEW_PASSWORD,
    NEW_PASSWORD
} from './constants'

const initialState = fromJS({
    newPasswordField: {
        password: '',
        rePassword:''
    },
    inputTextFocus: {
        password: '#FFFFFF',
        rePassword: '#FFFFFF'
    }
});

export default function newPasswordReducer(state = initialState, action) {
    switch ( action.type ) {
        case UPDATE_NEW_PASSWORD:
            return state.set(['newPasswordField', action.field], action.value);
        case TEXT_INPUT_FOCUS:
            return state.setIn(['inputTextFocus', action.field], action.style);
        default:
            return state;
    }
}

export const updateNewPasswordField = (field, value ) => ({
    type: UPDATE_NEW_PASSWORD,
    field,
    value
})

export const textInputFocus = (field, style) => ({
    type: TEXT_INPUT_FOCUS,
    field,
    style
});

export const newPasswordFlow = payload => ({
    type: NEW_PASSWORD,
    payload
});