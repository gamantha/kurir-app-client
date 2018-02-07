import { all, fork } from 'redux-saga/effects';

import { userLoginSagas } from './containers/UserLogin/sagas';

export default function* rootSaga() {
  yield all([ userLoginSagas ]);
}
