/**
 * This is special reducer for access token only
 */
import { AsyncStorage } from 'react-native';

/**
 * TODO Change this to redux-persist reducer later
 */
export function saveTokenData(accessToken, refreshToken, User) {
    return AsyncStorage.multiSet([
        ['accessToken', accessToken],
        ['refreshToken', refreshToken],
        ['User', JSON.stringify(User)]
    ])
        .then(response => response)
        .catch(err => err);
}

export async function clearTokenData() {
    return AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'User'])
        .then(response => response)
        .catch(err => err);
}

// Email Validation
export function validateEmail(inputvalue) {
    const pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9_.-]{2,}))+\.(([a-zA-Z]{1,}))$/;
    return !!pattern.test(inputvalue);
}

// Name Validation
export function validateName(inputvalue) {
    const pattern = /([^a-zA-Z0-9_ -])/g;
    return !pattern.test(inputvalue);
}
