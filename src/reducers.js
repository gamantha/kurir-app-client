import { combineReducers } from 'redux-immutable';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import forgotPasswordReducer from './containers/ForgotPassword/reducer';
import userRegisterReducer from './containers/UserRegister/reducer';
import userLoginReducer from './containers/UserLogin/reducer';
import verificationCodeReducer from './containers/VerificationCode/reducer';
import newPasswordReducer from './containers/NewPassword/reducer';
import navReducer from './navigations/reducer';
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
    newPassword: newPasswordReducer,
    navigation: navReducer
});

export default rootReducer;
