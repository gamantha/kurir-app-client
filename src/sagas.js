import { all } from 'redux-saga/effects';

import userLoginSagas from './containers/UserLogin/sagas';
import registerUserSagas from './containers/UserRegister/sagas';
import forgotPasswordSagas from './containers/ForgotPassword/sagas';

export default function* rootSaga() {
  yield all([ userLoginSagas, registerUserSagas, forgotPasswordSagas ]);
}
