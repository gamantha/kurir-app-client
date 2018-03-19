import { put, call, takeEvery, takeLatest, take, select } from 'redux-saga/effects';
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
    var array = [];
    for (let prop in payload) {
        array.push(payload[prop]);
    }
    const password = array[0];
    

    getTokenData().then((token) => {
        const header = {   method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token,

        },
        params: 'forgotpassword=true',
        body: {
            'new_password': password
        }
    };
   
    
    const response = call(Api.post, header);
    });

     // yield put(setIsNewPassword(true));

    //  try{
        

    // } catch(error){
    //     if(error.response && error.response.data){
    //         yield put({
    //             // type: NEW_PASSWORD_ERROR,
    //             payload: error.response.data.meta.message
    //         });
    //     } else {
    //         yield put({
    //             // type: NEW_PASSWORD_ERROR,
    //             payload: error.message
    //         });
    //     }
    // }finally{
    //     // yield put(setIsNewPassword(false));
    // }

}

const userNewPasswordSagas = [
    takeLatest(NEW_PASSWORD, watchNewPasswordFlow)
];

export default userNewPasswordSagas;