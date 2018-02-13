import { takeLatest, put, call } from 'redux-saga/effects';
import Api from '../../services/verificationcode';
import { VERIFY, STATUS_MESSAGE } from './constants';
import { isLoading } from './reducer';

function* watchVerify({ payload: { code } }) {
    yield put(isLoading(true));
    try {
        const response = yield call(Api.post, code);
        const { meta, data } = response.data;
        if (meta.success && data) {
            yield put({
                type: STATUS_MESSAGE,
                payload: data.msg
            });
        } else {
            yield put({
                type: STATUS_MESSAGE,
                payload: data.msg
            });
        }
    } catch (error) {
        yield put({
            type: STATUS_MESSAGE,
            payload: { status: false, message: error.message }
        });
    } finally {
        yield put(isLoading(false));
    }
}

const verifycationCodeSagas = [takeLatest(VERIFY, watchVerify)];

export default verifycationCodeSagas;
