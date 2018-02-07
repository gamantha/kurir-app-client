import { put, call, take } from 'redux-saga/effects';
import {
  UPDATE_LOGIN_INPUT_FIELD,
  IS_LOADING_USER_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from './constants';
// import { setErrorMessage } from '../UserRegister/actions';
import Api from '../../services/userlogin';

export function* updateLoginInputField(field, value) {
  yield put({
    type: UPDATE_LOGIN_INPUT_FIELD,
    field,
    value
  });
}

export function* setIsLogin(status) {
  yield put({
    type: IS_LOADING_USER_LOGIN,
    status
  });
}

export function* authorize(payload, callback) {
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
export function* loginFlow(payload, callback) {
  while (true) {
    const data = yield call(authorize, payload, callback);
    if (data) {
      // store the token to async storage
      // yield call();
      yield take(LOGOUT);
      // clear the token from asycn storage
      // yield call();
    }
  }
}
