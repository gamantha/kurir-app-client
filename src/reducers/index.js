import { combineReducers } from 'redux-immutable';

// import userReducer from './userReducer';
// import msgReducer from './msgReducer';
import forgotPasswordReducer from '../containers/ForgotPassword/reducer';
import userRegisterReducer from '../containers/UserRegister/reducer';
import userLoginReducer from '../containers/UserLogin/reducer';
import verificationCodeReducer from '../containers/VerificationCode/reducer';

/**
 * Combine all reducers each containers
 * Into one Javascript Object
 * @type {Maps}
 */
const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  forgotPassword: forgotPasswordReducer,
  verificationCode: verificationCodeReducer
});

export default rootReducer;
