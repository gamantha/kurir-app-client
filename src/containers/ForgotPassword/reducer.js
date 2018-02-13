import { fromJS } from 'immutable';
import {
    SHOW_LOADING,
    STATUS_MESSAGE,
    SET_EMAIL,
    FORGOT_PASSWORD
} from './constants';

const initialState = fromJS({
    email: '',
    showLoading: false,
    statusMessage: {
        status: false,
        message: ''
    },
    testing: ''
});

/**
 * Will handle all dispatched action and
 * Set the value of state from actions.js
 *
 * @param  Object state  - initialState
 * @param  Object action - { type, payload } from action creator
 * @return Object
 */
export default function forgotPasswordReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return state.set('showLoading', action.status);
        case SET_EMAIL:
            return state.set('email', action.payload);
        case STATUS_MESSAGE:
            return state.set('statusMessage', fromJS(action.payload));
        default:
            return state;
    }
}

/**
 * Toggle loading status
 *
 * @param  Boolean status
 * @return Object
 */
export const showLoading = status => ({
    type: SHOW_LOADING,
    status
});

/**
 * Set email value on reducer object
 *
 * @param  Boolean status
 * @return Object
 */
export const setEmail = email => ({
    type: SET_EMAIL,
    payload: email
});

export const forgotPassword = email => ({
    type: FORGOT_PASSWORD,
    payload: email
});
