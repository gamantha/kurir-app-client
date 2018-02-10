import { put, call, take, takeLatest } from 'redux-saga/effects';
import Api from '../../services/userlogin';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN, LOGOUT } from './constants';
import { setIsLogin, updateLoginInputField } from './reducer';
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

const userLoginSagas = [takeLatest(LOGIN, watchLoginFlow)];

export default userLoginSagas;
