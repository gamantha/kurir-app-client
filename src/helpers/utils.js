/**
 * This is special reducer for access token only
 */
import { AsyncStorage } from 'react-native';

/**
 * TODO Change this to redux-persist reducer later
 */
export async function saveTokenData(accessToken, refreshToken, User) {
    try {
        return await AsyncStorage.multiSet([
            ['accessToken', accessToken],
            ['refreshToken', refreshToken],
            ['User', JSON.stringify(User)]
        ]);
    } catch (error) {
        throw new Error(error.message);
    }
}

export function clearTokenData() {
    try {
        return AsyncStorage.multiRemove([
            'accessToken',
            'refreshToken',
            'User'
        ]);
    } catch (error) {
        throw new Error(error.message);
    }
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

// Get Token
export const getTokenData = async () => {
    let token = await AsyncStorage.getItem('accessToken');

    if (!token) {
        return token;
    }
    return null;
};
export function toObject(arr) {
    let obj = {};
    if (Array.isArray(arr)) {
        arr.forEach((item, index) => (obj[index] = item));
        return obj;
    }
    return arr;
}
