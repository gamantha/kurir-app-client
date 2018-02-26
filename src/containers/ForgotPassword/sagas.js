import { put, call, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, STATUS_MESSAGE } from './constants';
import { showLoading } from './reducer';
import Api from '../../services/forgotpassword';

/**
 * Api call for forgot password
 * Email will be use to send the verification code
 *
 * @param  Object email - registered user email
 * @return Object
 */
function* watchForgotPassword({ payload: { email } }) {
    put(showLoading(true));
    try {
        const response = yield call(Api.post, { email });
        const { meta, data } = response.data;
        let payload;
        payload.message = data.msg;
        if (meta.success && data) {
            payload.status = true;
            yield put({ type: STATUS_MESSAGE, payload });
        } else {
            payload.status = false;
            yield put({ type: STATUS_MESSAGE, payload });
        }
    } catch (error) {
        let payload = {
            message: '',
            status: null
        };
        if (error.response && error.response.data) {
            yield put({
                type: STATUS_MESSAGE,
                payload: error.response.data.meta
            });
        } else {
            yield put({ type: STATUS_MESSAGE, payload: error.message });
        }
    } finally {
        yield put(showLoading(false));
    }
}

const forgotPasswordSagas = [takeLatest(FORGOT_PASSWORD, watchForgotPassword)];

export default forgotPasswordSagas;
