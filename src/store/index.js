import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, compose(middlewares));

export default store;
