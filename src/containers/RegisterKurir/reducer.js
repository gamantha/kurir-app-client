export const UPLOAD_IMAGE = 'src/containers/RegisterKurir/upload-image';
export const UPLOAD_FULFILLED = 'src/containers/RegisterKurir/upload-fullfiled';
export const UPLOAD_REJECTED = 'src/containers/RegisterKurir/upload-rejected';
export const UPDATE_FIELD = 'src/containers/RegisterKurir/update-field';
export const REQUEST = 'src/containers/RegisterKurir/request';

export const uploadImage = payload => ({
    type: UPLOAD_IMAGE,
    payload
});

export const updateField = (field, value) => ({
    type: UPDATE_FIELD,
    field,
    value
});

export const request = () => ({
    type: REQUEST
});

const initialState = {
    phone: '',
    bankAccount: '',
    address: '',
    message: '',
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIELD:
            return { ...state, [action.field]: action.value };
        case REQUEST:
        case UPLOAD_IMAGE:
            return { ...state, loading: true };
        case UPLOAD_FULFILLED:
        case UPLOAD_REJECTED:
            return {
                ...state,
                message: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
