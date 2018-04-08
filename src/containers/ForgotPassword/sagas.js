import { put, call, select, takeLatest } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import {
    FORGOT_PASSWORD,
    VERIFY,
    NEW_PASSWORD,
    STATUS_MESSAGE
} from './reducer';
import Api from '../../services/forgotpassword';

function* watchForgotPassword() {
    try {
        const { forgotPassword } = yield select();
        const { email } = forgotPassword;
        const { data: response } = yield call(Api.getCode, { email });
        const { meta, data } = response;
        if (meta.success && data) {
            yield put({ type: STATUS_MESSAGE, payload: meta.message });
            yield put(
                NavigationActions.navigate({ routeName: 'VerificationCode' })
            );
        } else {
            yield put({ type: STATUS_MESSAGE, payload: meta.message });
        }
    } catch (error) {
        if (error.response && error.response.data) {
            yield put({
                type: STATUS_MESSAGE,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: STATUS_MESSAGE, payload: error.message });
        }
    } finally {
        //
    }
}

function* watchVerify() {
    try {
        const { forgotPassword } = yield select();
        const { email, veriCode } = forgotPassword;
        const response = yield call(Api.checkCode, { email, veriCode });
        const { meta, data } = response.data;
        if (meta.success && data) {
            yield put(
                NavigationActions.navigate({ routeName: 'NewForgotPassword' })
            );
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
        if (error.response && error.response.data) {
            yield put({
                type: STATUS_MESSAGE,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: STATUS_MESSAGE, payload: error.message });
        }
    } finally {
        //
    }
}

function* watchNewPassword() {
    try {
        const { forgotPassword } = yield select();
        const { newPassword } = forgotPassword;
        const response = yield call(Api.newPassword, {
            new_password: newPassword
        });
        const { meta, data } = response.data;
        if (meta.success && data) {
            yield put(NavigationActions.navigate({ routeName: 'Login' }));
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
        if (error.response && error.response.data) {
            yield put({
                type: STATUS_MESSAGE,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: STATUS_MESSAGE, payload: error.message });
        }
    } finally {
        //
    }
}

export default [
    takeLatest(FORGOT_PASSWORD, watchForgotPassword),
    takeLatest(VERIFY, watchVerify),
    takeLatest(NEW_PASSWORD, watchNewPassword)
];
