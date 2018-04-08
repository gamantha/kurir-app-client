export const STATUS_MESSAGE = 'src/containers/ForgotPassword/STATUS_MESSAGE';
export const UPDATE_FIELD = 'src/containers/ForgotPassword/UPDATE_FIELD';
export const FORGOT_PASSWORD = 'src/containers/ForgotPassword/FORGOT_PASSWORD';
export const VERIFY = 'src/containers/ForgotPassword/VERIFY';
export const NEW_PASSWORD = 'src/containers/ForgotPassword/NEW_PASSWORD';

export const updateField = (field, value) => ({
    type: UPDATE_FIELD,
    field,
    value
});

export const forgotPassword = email => ({
    type: FORGOT_PASSWORD,
    payload: email
});

export const verify = () => ({
    type: VERIFY
});

export const requestNewPassword = () => ({
    type: NEW_PASSWORD
});

const initialState = {
    email: '',
    veriCode: '',
    newPassword: '',
    loading: false,
    message: ''
};

export default function forgotPasswordReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FIELD:
            return { ...state, [action.field]: action.value };
        case FORGOT_PASSWORD:
        case VERIFY:
        case NEW_PASSWORD:
            return { ...state, loading: true };
        case STATUS_MESSAGE:
            return { ...state, message: action.payload, loading: false };
        default:
            return state;
    }
}
