import { delay } from 'redux-saga';
import {
    select,
    put,
    call,
    takeLatest,
    takeEvery,
    take
} from 'redux-saga/effects';
import Api from '../../services/userregister';
import { setIsLoading, setErrorMessage, setValidationValue } from './reducer';
import { validateEmail, validateName } from '../../helpers/utils';
import { USER_REGISTRATION_SUCCESS, REGISTER, INPUT_FIELD } from './constants';

/**
 * Get the user data and send to API
 * @param  {[type]}   payload
 * @param  {Function} callback This is callback action to userlogin if register succesfully
 * @return {[type]}
 */
function* watchRegisterUser(values) {
    const { payload } = values;

    yield put(setIsLoading(true));
    try {
        const response = yield call(Api.post, payload);
        const { meta, data } = response.data;
        if (meta.success && data) {
            yield put({ type: USER_REGISTRATION_SUCCESS, payload: data });
        }
    } catch (error) {
        if (error.response && error.response.data) {
            yield put(setErrorMessage(error.response.data.meta.message));
        } else {
            yield put(setErrorMessage(error.message));
        }
    } finally {
        yield put(setIsLoading(false));
    }
}

function* watchInputFields(payload) {
    const { field } = payload;
    let isValid;
    const store = yield select();
    const inputFields = store.getIn(['userRegister', 'inputFields']).toJS();
    const { email, password, repassword } = inputFields;
    if (field === 'email') {
        yield delay(50);
        isValid = yield validateEmail(email);
        yield put(setValidationValue(field, isValid));
    }

    if (field === 'password') {
        isValid = password.length > 4 && password !== '';
        yield put(setValidationValue(field, isValid));
    }

    if (field === 'repassword') {
        isValid = repassword !== '' && repassword === password;
        yield put(setValidationValue(field, isValid));
    }
}

const registerUserSagas = [
    takeLatest(REGISTER, watchRegisterUser),
    takeEvery(INPUT_FIELD, watchInputFields)
];

export default registerUserSagas;
