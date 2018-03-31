import {
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_ERROR,
    CLEAR_ERROR_MESSAGE,
    UPDATE_NEW_PASSWORD,
    NEW_PASSWORD
} from './constants';

const initialState = {
    oldPassword: '',
    newPassword: '',
    textInputPassword: '#FFFFFF',
    textInputRepassword: '#FFFFFF',
    loading: false,
    message: ''
};

export default function newPasswordReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_PASSWORD:
            return { ...state, [action.field]: action.value };
        case NEW_PASSWORD:
            return { ...state, loading: true };
        case NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                message: action.payload,
                loading: false
            };
        case NEW_PASSWORD_ERROR:
            return { ...state, message: action.payload, loading: false };
        default:
            return state;
    }
}

export const updateField = (field, value) => ({
    type: UPDATE_NEW_PASSWORD,
    field,
    value
});

export const requestNewPassword = () => ({
    type: NEW_PASSWORD
});
