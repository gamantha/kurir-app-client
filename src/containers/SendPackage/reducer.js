import {
    SEND_PACKAGE,
    SEND_PACKAGE_ERROR,
    CLEAR_ERROR_MESSAGE,
    UPDATE_SEND_PACKAGE
} from 'constants';

const initialState = {
    from: '',
    to:'',
    approachWeight:'',
    textInputFrom: '#FFFFFF',
    textInputTo: '#FFFFFF',
    textInputApproachWight: '#FFFFFF',
    loading:false,
    message: '',
};

export default function sendPackageReducer( state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEND_PACKAGE :
            return { ...state, [action.field]: action.value};
        case SEND_PACKAGE:
            return { ...state, loading: true}
        case SEND_PACKAGE_ERROR:
            return { ...state, message: action.payload, loading:false }
        case SEND_PACKAGE_SUCCESS:
            return { ...state, message: action.payload, loading:false }
        default:
            return state;
    
    }
}

export const updateField =  (field, value) => ({
    type: UPDATE_SEND_PACKAGE,
    field,
    value
});

export const requestSendPackage = () => {
    type: SEND_PACKAGE
}