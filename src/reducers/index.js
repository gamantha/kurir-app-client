import { combineReducers } from 'redux';

import userReducer from './userReducer';
import msgReducer from './msgReducer';

const rootReducer = combineReducers({
  msgReducer,
  userReducer,
});

export default rootReducer;
