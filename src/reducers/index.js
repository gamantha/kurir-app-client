import { combineReducers } from 'redux';

import userReducer from './userReducer';
import msgReducer from './msgReducer';
// import nav from './navReducer';

const rootReducer = combineReducers({
  // nav,
  msgReducer,
  userReducer,
});

export default rootReducer;
