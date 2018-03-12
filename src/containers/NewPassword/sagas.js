import { put, call, takeEvery, takeLatest, take } from 'redux-saga/effects';
import { navigationActions } from 'react-navigation';
import { Api } from '../../services/newpassword';
import { NEW_PASSWORD,
         NEW_PASSWORD_ERROR,
         NEW_PASSWORD_SUCCESS,
         } from './constants';
import { setIsNewPassword, updateNewPasswordField } from './reducer';
import { getTokenData } from '../../helpers/utils';

function * watchNewPasswordFlow(){
    const store = yield select();
    const payload = store.getIn(['newPassword', 'newPasswordField']).toJS();
    // const accessToken = await AsyncStorage.getItem('accessToken');

    console.log("log fck "+payload);

    // yield put(setIsNewPassword(true));

    // try{
    //     const response = yield call(Api.post, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type' : 'application/json',
    //             'Authorization' : accessToken,

    //         },
    //         params: 'forgotpassword=true',
    //         body: payload
    //     });
        
    //     const { meta, data } = response.data;
    //     if(meta.success){
    //         yield put({type: NEW_PASSWORD_SUCCESS, payload:meta.success});
    //     }

    // } catch(error){
    //     if(error.response && error.response.data){
    //         yield put({
    //             type: NEW_PASSWORD_ERROR,
    //             payload: error.response.data.meta.message
    //         });
    //     } else {
    //         yield put({
    //             type: NEW_PASSWORD_ERROR,
    //             payload: error.message
    //         });
    //     }
    // }finally{
    //     yield put(setIsNewPassword(false));
    // }
}

const userNewPasswordSagas = [
    takeLatest(NEW_PASSWORD, watchNewPasswordFlow)
];

export default userNewPasswordSagas;