import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../../services/userlogin';
import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN,
    LOGOUT,
    REFRESH_TOKEN
} from './constants';
import { setIsLogin, updateLoginInputField, reqRefreshToken } from './reducer';
import { saveTokenData } from '../../reducers/tokenReducer';

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
        if (meta.success && data) {
            yield put({ type: LOGIN_SUCCESS, payload: meta.success });
            const { accessToken, refreshToken } = data;
            saveTokenData({ accessToken, refreshToken });
            yield put(updateLoginInputField('password', ''));
        }
    } catch (error) {
        yield put({ type: LOGIN_ERROR, payload: error.message });
    } finally {
        yield put(setIsLogin(false));
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
        yield put({ type: LOGIN_ERROR, payload: error.message });
    } finally {
        // do something here later
    }
}

const userLoginSagas = [
    takeLatest(LOGIN, watchLoginFlow),
    takeEvery(REFRESH_TOKEN, reqRefreshToken)
];

export default userLoginSagas;
