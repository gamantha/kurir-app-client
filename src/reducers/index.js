import { combineReducers } from 'redux-immutable';

// import userReducer from './userReducer';
// import msgReducer from './msgReducer';
import forgotPasswordReducer from '../containers/forgotPassword/reducer';

const rootReducer = combineReducers({
  forgotPassword: forgotPasswordReducer,
});

export default rootReducer;
