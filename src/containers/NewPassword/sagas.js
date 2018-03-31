import { put, call, takeLatest, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import Api from '../../services/newpassword';
import {
    NEW_PASSWORD,
    NEW_PASSWORD_ERROR,
    NEW_PASSWORD_SUCCESS
} from './constants';
import { setIsNewPassword, updateNewPasswordField } from './reducer';
import { getTokenData } from '../../helpers/utils';

function* wathNewPassword() {
    const { newPassword: reducer } = yield select();
    const { oldPassword, newPassword } = reducer;

    try {
        const { data } = yield call(Api.post, {
            old_password: oldPassword,
            new_password: newPassword
        });

        if (data && data.meta && data.meta.success) {
            yield put({
                type: NEW_PASSWORD_ERROR,
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
                type: NEW_PASSWORD_ERROR,
                payload: error.response.data.meta.message
            });
        } else {
            yield put({ type: NEW_PASSWORD_ERROR, payload: error.message });
        }
    } finally {
        //
    }
}

const newPasswordSagas = [takeLatest(NEW_PASSWORD, wathNewPassword)];

export default newPasswordSagas;
