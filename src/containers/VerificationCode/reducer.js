import { fromJS } from 'immutable';
import { IS_LOADING, STATUS_MESSAGE, SET_CODE, VERIFY } from './constants';

/**
 * Initial state for application
 * @type {Map}
 */
const initialState = fromJS({
    isLoading: false,
    code: '',
    statusMessage: {
        status: '',
        message: ''
    }
});

/**
 * Set all object map value corresponding with the action type
 * The payload come from  action payload of './actions.js' of
 * VerificationCode Container
 *
 * @param  {Map} [state=initialState]
 * @param  {Object} action
 * @return {Mixed}
 */
export default function verificationCodeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CODE:
            return state.set('code', action.payload);
        case IS_LOADING:
            return state.set('isLoading', action.status);
        case STATUS_MESSAGE:
            return state.set('statusMessage', fromJS(action.payload));
        default:
            return state;
    }
}

export const isLoading = status => ({
    type: IS_LOADING,
    status
});

export const setCode = code => ({ type: SET_CODE, payload: code });

export const verify = code => ({
    type: VERIFY,
    payload: code
});
