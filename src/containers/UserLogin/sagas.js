import {
    all,
    put,
    call,
    takeEvery,
    takeLatest,
    take
} from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import Api from '../../services/userlogin';
import rootApi from '../../services/api';
import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN,
    LOGOUT,
    REFRESH_TOKEN
} from './constants';
import {
    setIsLogin,
    updateLoginInputField,
    reqRefreshToken,
    logoutFlow
} from './reducer';
import { saveTokenData, clearTokenData } from '../../helpers/utils';

/**
 * Send the payload to API
 *
 * @param  {Object} payload - email/username and password
 * @return {Object}
 */
function* watchLoginFlow(payload) {
    yield put(setIsLogin(true));
    try {
        const response = yield call(Api.post, payload);
        const { meta, data } = response.data;
        if (meta.success && data && data.User.isEmailValidated) {
            yield put({ type: LOGIN_SUCCESS, payload: data.User });
            const { accessToken, refreshToken, User } = data;
            rootApi.setAuthorizationToken(accessToken);
            saveTokenData(accessToken, refreshToken, User);
            yield put(updateLoginInputField('password', ''));
        }
        if (data.User.isEmailValidated === false) {
            yield put({
                type: LOGIN_ERROR,
                payload: 'Verify your email first!'
            });
        }
    } catch (error) {
        if (error.response && error.response.data) {
            yield put({
                type: LOGIN_ERROR,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: LOGIN_ERROR, payload: error.message });
        }
    } finally {
        yield put(setIsLogin(false));
    }
}

function* watchLogoutFlow() {
    try {
        yield put(logoutFlow());
    } catch (error) {
        yield put({ type: LOGIN_ERROR, payload: error.message });
    }
}

function* watchRefreshToken(data) {
    yield put(setIsLogin(true));
    const { payload: refreshToken } = data;
    try {
        const response = yield call(Api.refresh, { refreshToken });
        const { meta, data } = response.data;
        if (meta.success && data) {
            yield put(NavigationActions.navigate({ routeName: 'Main' }));
            const { accessToken, refreshToken } = data;
            rootApi.setAuthorizationToken(accessToken);
            saveTokenData({ accessToken, refreshToken });
        }
    } catch (error) {
        yield put(NavigationActions.navigate({ routeName: 'Login' }));
        if (error.response && error.response.data) {
            yield put({
                type: LOGIN_ERROR,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: LOGIN_ERROR, payload: error.message });
        }
    } finally {
        yield put(setIsLogin(false));
    }
}

export default [
    takeLatest(LOGIN, watchLoginFlow),
    takeLatest(REFRESH_TOKEN, watchRefreshToken),
    take(LOGOUT, watchLogoutFlow)
];
