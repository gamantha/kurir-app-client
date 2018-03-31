import { put, call, takeLatest, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Api } from '../../services/sendpackage';

import {
    SEND_PACKAGE,
    SEND_PACKAGE_ERROR,
    CLEAR_ERROR_MESSAGE,
    UPDATE_SEND_PACKAGE
} from './constants';
import { getTokenData } from '../../helpers/utils';

function* watchSendPackage() {
    const { from: reducer } = yield select();

    try{
        const { data } = yield call(Api.post, {
            
        });

        
    } catch (error) {

    } finally {

    }
}

const sendpackageSagas = [takeLatest(SEND_PACKAGE, watchSendPackage)];

export default sendpackageSagas;
