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
import userlogin from '../../services/userlogin';
import {
    setIsLoading,
    setErrorMessage,
    setValidationValue,
    updateSingleInputField
} from './reducer';
import { updateLoginInputField as setEmailLogin } from '../UserLogin/reducer';
import { validateEmail, validateName } from '../../helpers/utils';
import {
    USER_REGISTRATION_SUCCESS,
    REGISTER,
    INPUT_FIELD,
    FACEBOOK_OAUTH
} from './constants';

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

function* watchFacebook({ tokenId, action }) {
    const url = action === 'register' ? Api.fbRegister : userlogin.fbLogin;
    try {
        const response = yield call(url, { tokenId });
        const { meta, data } = response.data;
        if (meta.success && data) {
            if (action === 'register') {
                yield put(updateSingleInputField('email', data.email));
            }
            if (action === 'login') {
                yield put(setEmailLogin('username', data.email));
            }
        }
    } catch (error) {
        if (error.response && error.response.data) {
            yield put(setErrorMessage(error.response.data.meta.message));
        } else {
            yield put(setErrorMessage(error.message));
        }
    } finally {
        //
    }
}

function* watchInputFields(payload) {
    const { field } = payload;

    let isValid;
    const store = yield select();
    const inputFields = store.getIn(['userRegister', 'inputFields']).toJS();
    const { email, username, password, repassword } = inputFields;
    if (field === 'email') {
        yield delay(50);
        isValid = yield validateEmail(email);
        yield put(setValidationValue(field, isValid));
    }

    if (field === 'username') {
        isValid = yield validateName(username);

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
    takeEvery(INPUT_FIELD, watchInputFields),
    takeLatest(FACEBOOK_OAUTH, watchFacebook)
];

export default registerUserSagas;
