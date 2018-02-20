/**
 * This is special reducer for access token only
 */
import SInfo from 'react-native-sensitive-info';
import { fromJS } from 'immutable';

/**
 * TODO Change this to redux-persist reducer later
 */
export function saveTokenData({ accessToken, refreshToken, User }) {
    SInfo.setItem('accessToken', accessToken, {});
    SInfo.setItem('refreshToken', refreshToken, {});
    SInfo.setItem('User', JSON.stringify(User), {});
}

export function clearTokenData() {
    SInfo.deleteItem('accessToken', {});
    SInfo.deleteItem('refreshToken', {});
    SInfo.deleteItem('User', {});
}
