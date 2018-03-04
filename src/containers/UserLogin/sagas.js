import { put, call, takeEvery, takeLatest, take } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import Api from '../../services/userlogin';
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
            yield put({ type: LOGIN_SUCCESS, payload: meta.success });
            const { accessToken, refreshToken, User } = data;
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

// send the payload to backend then
function* watchRefreshToken({ payload: { refreshToken } }) {
    try {
        const response = yield call(Api.post, refreshToken);
        const { meta, data } = response.data;
        if (meta.success && data) {
            const { accessToken, refreshToken } = data;
            saveTokenData({ accessToken, refreshToken });
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
        // do something here later
    }
}

const userLoginSagas = [
    takeLatest(LOGIN, watchLoginFlow),
    takeLatest(REFRESH_TOKEN, watchRefreshToken),
    take(LOGOUT, watchLogoutFlow)
];

export default userLoginSagas;
