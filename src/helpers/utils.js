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

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
};
