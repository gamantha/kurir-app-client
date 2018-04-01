import { all } from 'redux-saga/effects';

import loginSaga from './containers/UserLogin/sagas';
import registerUserSagas from './containers/UserRegister/sagas';
import forgotPasswordSagas from './containers/ForgotPassword/sagas';
import verifycationCodeSagas from './containers/VerificationCode/sagas';
import newPasswordSagas from './containers/NewPassword/sagas';
import uploadImageSagas from './containers/RegisterKurir/sagas';

export default function* rootSaga() {
    yield all([
        all(loginSaga),
        all(registerUserSagas),
        all(uploadImageSagas),
        all(forgotPasswordSagas),
        all(verifycationCodeSagas),
        all(newPasswordSagas)
    ]);
}
