import { put, call, takeLatest, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import Api from '../../services/upload-image';

import {
    UPLOAD_IMAGE,
    UPLOAD_FULFILLED,
    UPLOAD_REJECTED,
    REQUEST
} from './reducer';

function* wathRequest() {
    const { registerKurir } = yield select();
    const { phone, bankAccount, address } = registerKurir;
    try {
        const { data } = yield call(Api.kurirRequest, {
            phone,
            bankAccount,
            address
        });

        if (data && data.meta && data.meta.success) {
            yield put({
                type: UPLOAD_FULFILLED,
                payload: data.meta.message
            });
            yield put(
                NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Main' })]
                })
            );
        }
    } catch (error) {
        if (error.response && error.response.data) {
            yield put({
                type: UPLOAD_REJECTED,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: UPLOAD_REJECTED, payload: error.message });
        }
    } finally {
        //
    }
}

function* watchUploadImage({ payload }) {
    try {
        const { data } = yield call(Api.post, payload);
        if (data && data.meta && data.meta.success) {
            yield put({
                type: UPLOAD_FULFILLED,
                payload: data.meta.message
            });
        }
    } catch (error) {
        if (error.response && error.response.data) {
            yield put({
                type: UPLOAD_REJECTED,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: UPLOAD_REJECTED, payload: error.message });
        }
    } finally {
        //
    }
}

export default [
    takeLatest(UPLOAD_IMAGE, watchUploadImage),
    takeLatest(REQUEST, wathRequest)
];
