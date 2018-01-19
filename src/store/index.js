import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

const storeWithMiddlewares = applyMiddleware(thunk, logger)(createStore);

const store = storeWithMiddlewares(rootReducer);

export default store;
