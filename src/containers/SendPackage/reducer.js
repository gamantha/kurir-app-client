import {
    SEND_PACKAGE,
    SEND_PACKAGE_ERROR,
    CLEAR_ERROR_MESSAGE,
    UPDATE_FIELD,
    SEND_PACKAGE_SUCCESS,
    SEARCH,
    FULFILLED,
    CLEAR_STATE
} from './constants';

export const updateField = (field, value) => ({
    type: UPDATE_FIELD,
    field,
    value
});

export const search = value => ({
    type: SEARCH,
    value
});

export const fulfilled = payload => ({
    type: FULFILLED,
    payload
});

export const requestSendPackage = () => ({
    type: SEND_PACKAGE
});

export const clearState = () => ({
    type: CLEAR_STATE
});

const initialState = {
    query: '',
    active: '',
    origin: '',
    originCoord: '',
    destination: '',
    destinationCoord: '',
    approximateWeight: '',
    itemName: '',
    cost: '',
    country: '',
    city: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    description: '',
    airports: [],
    textInputFrom: '#FFFFFF',
    textInputTo: '#FFFFFF',
    textInputApproximateWeight: '#FFFFFF',
    loading: false,
    message: '',
    summary: [],
    route: ''
};

export default function sendPackageReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FIELD:
            return { ...state, [action.field]: action.value };
        case SEARCH:
            return { ...state, query: action.value };
        case SEND_PACKAGE:
            return { ...state, loading: true };
        case FULFILLED:
            return { ...state, airports: action.payload, loading: false };
        case SEND_PACKAGE_ERROR:
            return { ...state, message: action.payload, loading: false };
        case SEND_PACKAGE_SUCCESS:
            return { ...state, summary: action.payload, loading: false };
        case CLEAR_STATE:
            return {
                ...state,
                query: '',
                active: '',
                origin: '',
                originCoord: '',
                destination: '',
                destinationCoord: '',
                approximateWeight: '',
                itemName: '',
                cost: '',
                country: '',
                city: '',
                address: '',
                name: '',
                email: '',
                phone: '',
                description: '',
                airports: [],
                loading: false,
                message: '',
                summary: []
            };
        default:
            return state;
    }
}
