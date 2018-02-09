import { all } from 'redux-saga/effects';

import userLoginSagas from './containers/UserLogin/sagas';
import registerUserSagas from './containers/UserRegister/sagas';

export default function* rootSaga() {
  yield all([ userLoginSagas, registerUserSagas ]);
}
