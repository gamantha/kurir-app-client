import { all, call } from 'redux-saga/effects';

import userLoginSagas from './containers/UserLogin/sagas';
import registerUserSagas from './containers/UserRegister/sagas';
import forgotPasswordSagas from './containers/ForgotPassword/sagas';
import verifycationCodeSagas from './containers/VerificationCode/sagas';

export default function* rootSaga() {
    yield all([
        userLoginSagas,
        registerUserSagas,
        forgotPasswordSagas,
        verifycationCodeSagas
    ]);
}
