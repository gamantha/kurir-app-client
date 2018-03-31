import {
    SHOW_LOADING,
    STATUS_MESSAGE,
    SET_EMAIL,
    FORGOT_PASSWORD
} from './constants';

const initialState = {
    email: '',
    showLoading: false,
    statusMessage: {
        status: false,
        message: ''
    }
};

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
            return { ...state, 'showLoading' : action.status };
        case SET_EMAIL:
            return { ...state, 'email' : action.payload };
        case STATUS_MESSAGE:
            return { ...state, 'statusMessage' : action.payload };
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

export const setEmail = email => ({
    type: SET_EMAIL,
    payload: email
});

export const forgotPassword = email => ({
    type: FORGOT_PASSWORD,
    payload: email
});
