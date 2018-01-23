import { combineReducers } from 'redux-immutable';

// import userReducer from './userReducer';
// import msgReducer from './msgReducer';
import forgotPasswordReducer from '../containers/ForgotPassword/reducer';
import userRegisterReducer from '../containers/UserRegister/reducer';
import userLoginReducer from '../containers/UserLogin/reducer';

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  forgotPassword: forgotPasswordReducer
});

export default rootReducer;
