import createSensitiveStorage from 'redux-persist-sensitive-storage';
import { combineReducers } from 'redux-immutable';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
// import userReducer from './userReducer';
// import msgReducer from './msgReducer';
import forgotPasswordReducer from '../containers/ForgotPassword/reducer';
import userRegisterReducer from '../containers/UserRegister/reducer';
import userLoginReducer from '../containers/UserLogin/reducer';
import verificationCodeReducer from '../containers/VerificationCode/reducer';
// import tokenReducer from './tokenReducer';
import newPasswordReducer from '../containers/NewPassword/reducer';

// Use this for encrypt token later
const sensitiveStorage = createSensitiveStorage({
    keychainService: 'myKeychain',
    sharedPreferencesName: 'mySharedPrefs'
});

const mainPersistConfig = {
    key: 'main',
    storage: AsyncStorage
};

const tokenPersistConfig = {
    key: 'token',
    storage: sensitiveStorage
};

/**
 * Combine all reducers each containers
 * Into one Javascript Object
 * @type {Maps}
 */
const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    forgotPassword: forgotPasswordReducer,
    verificationCode: verificationCodeReducer,
    newPassword: newPasswordReducer
});

export default rootReducer;
