import { select, put, call, takeLatest, takeEvery } from 'redux-saga/effects';
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
        console.log('RESPONSE', response);
        const { meta, data } = response.data;
        if (meta.success && data) {
            yield put({ type: USER_REGISTRATION_SUCCESS, payload: data });
        }
    } catch (error) {
        console.log('ERR', error.message);
        yield put(setErrorMessage(error.message));
    } finally {
        yield put(setIsLoading(false));
    }
}

function* watchInputFields(payload) {
    const { field, value } = payload;
    let isValid;
    if (field === 'isValidEmail') {
        isValid = yield validateEmail(value);
        yield put(setValidationValue(field, isValid));
    }

    if (field === 'isValidPassword') {
        isValid = value.length > 4 && value !== '';
        yield put(setValidationValue(field, isValid));
    }

    if (field === 'isValidRepassword') {
        const store = yield select();
        const password = store.getIn([
            'userRegister',
            'inputFields',
            'password'
        ]);
        isValid = value === password && value !== '';
        yield put(setValidationValue(field, isValid));
    }
}

const registerUserSagas = [
    takeLatest(REGISTER, watchRegisterUser),
    takeEvery(INPUT_FIELD, watchInputFields)
];

export default registerUserSagas;
