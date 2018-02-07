import { all } from 'redux-saga/effects';

import {
  updateLoginInputField,
  setIsLogin,
  authorize,
  loginFlow
} from './containers/UserLogin/actions';

export default function* rootSaga() {
  yield all([ updateLoginInputField, setIsLogin, authorize, loginFlow ]);
}
