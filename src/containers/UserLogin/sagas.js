import { put, call, take, takeLatest } from 'redux-saga/effects';
import Api from '../../services/userlogin';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN, LOGOUT } from './constants';
import { setIsLogin, loginFlow } from './reducer';

function* authorize(payload, callback) {
  try {
    yield put(setIsLogin(true));
    const response = yield call(Api.post(payload));
    const { meta, data } = response.data;
    if (meta.success && data) {
      yield put({ type: LOGIN_SUCCESS, payload: data });
      callback();
      yield put(setIsLogin(false));
    }
  } catch (error) {
    yield put(setIsLogin(false));
    const { response } = error;
    const { data } = response;
    if (data) {
      yield put({ type: LOGIN_ERROR, payload: data.meta.message });
    }
  }
}

/**
 * Send the payload to API
 *
 * @param  {Object} payload - email/username and password
 * @param  {Function} callback - Actions to profile if login succesfully
 * @return {Object}
 */
function* watchLoginFlow(payload, callback) {
  yield put(setIsLogin(true));
  try {
    const response = yield call(Api.post, payload);
    console.log('data', response);
    const { meta, data } = response.data;
    if (meta.success && data) {
      yield put({ type: LOGIN_SUCCESS, payload: data });
      callback();
    }
  } catch (error) {
    yield put(setIsLogin(false));
    const { response } = error;
    const { data } = response;
    if (data) {
      yield put({ type: LOGIN_ERROR, payload: data.meta.message });
    }
  } finally {
    yield put(setIsLogin(false));
  }
  // while (true) {
  //   const data = yield call(authorize, payload, callback);
  //   console.log('DATa', data);
  //   if (data) {
  //     // store the token to async storage
  //     // yield call();
  //     yield take(LOGOUT);
  //     // clear the token from asycn storage
  //     // yield call();
  //   }
  // }
}

export const userLoginSagas = [ takeLatest(LOGIN, watchLoginFlow) ];
