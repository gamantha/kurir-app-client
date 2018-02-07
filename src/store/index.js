import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();
// const storeWithMiddlewares = compose(applyMiddleware(sagaMiddleWare, logger))(createStore);

export const store = createStore(rootReducer, compose(applyMiddleware(logger, sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

// Later install persistStore on this
export const persistStore = () => ({});
