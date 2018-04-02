import { delay } from 'redux-saga';
import { put, call, fork, take, takeLatest, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import Api from '../../services/sendpackage';

import {
    SEND_PACKAGE,
    SEARCH,
    SEND_PACKAGE_ERROR,
    SEND_PACKAGE_SUCCESS
} from './constants';
import { fulfilled } from './reducer';
import { getTokenData } from '../../helpers/utils';

function* watchInputText() {
    const { sendPackage } = yield select();
    const { query } = sendPackage;

    try {
        if (query) {
            yield delay(300);
            const { data } = yield call(Api.getAirPort, query);

            if (data && data.meta && data.meta.success) {
                yield put(fulfilled(data.data));
            }
        }
    } catch (error) {
        if (error.response && error.response.data) {
            yield put({
                type: SEND_PACKAGE_ERROR,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: SEND_PACKAGE_ERROR, payload: error.message });
        }
    } finally {
    }
}

function* watchSendPackage() {
    const { sendPackage } = yield select();
    const {
        origin,
        originCoord,
        destination,
        destinationCoord,
        itemName,
        approximateWeight,
        cost,
        country,
        city,
        address,
        name,
        email,
        phone,
        description
    } = sendPackage;

    try {
        const payload = {
            from: origin,
            to: destination,
            originCoord,
            destinationCoord,
            weight: approximateWeight,
            itemName,
            cost,
            country,
            city,
            address,
            receiverName: name,
            email,
            phone,
            note: description,
            type: 'asuransi',
            category: 'none',
            reward: 0.8 * Number(Math.floor(cost))
        };
        const { data } = yield call(Api.createItem, payload);

        if (data && data.meta && data.meta.success) {
            yield put({ type: SEND_PACKAGE_SUCCESS, payload: data.data[0] });
        }
    } catch (error) {
        if (error.response && error.response.data) {
            yield put({
                type: SEND_PACKAGE_ERROR,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: SEND_PACKAGE_ERROR, payload: error.message });
        }
    } finally {
        //
    }
}

const sendpackageSagas = [
    takeLatest(SEARCH, watchInputText),
    takeLatest(SEND_PACKAGE, watchSendPackage)
];

export default sendpackageSagas;
