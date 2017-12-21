import { combineReducers } from 'redux';

import userReducer from './userReducer';
// import nav from './navReducer';

const rootReducer = combineReducers({
  // nav,
  userReducer,
});

export default rootReducer;
