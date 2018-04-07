import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import splashScreenReducer from './containers/SplashScreen/reducer';
import forgotPasswordReducer from './containers/ForgotPassword/reducer';
import userRegisterReducer from './containers/UserRegister/reducer';
import userLoginReducer from './containers/UserLogin/reducer';
import verificationCodeReducer from './containers/VerificationCode/reducer';
import newPasswordReducer from './containers/NewPassword/reducer';
import navReducer from './navigations/reducer';
import sendPackageReducer from './containers/SendPackage/reducer';
import registerKurirReducer from './containers/RegisterKurir/reducer';
/**
 * Combine all reducers each containers
 * Into one Javascript Object
 * @type {Maps}
 */
const rootReducer = combineReducers({
    splash: splashScreenReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    forgotPassword: forgotPasswordReducer,
    verificationCode: verificationCodeReducer,
    newPassword: newPasswordReducer,
    navigation: navReducer,
    sendPackage: sendPackageReducer,
    registerKurir: registerKurirReducer
});

export default rootReducer;
