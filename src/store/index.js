import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();
const storeWithMiddlewares = applyMiddleware(sagaMiddleWare, logger)(createStore);

const store = storeWithMiddlewares(rootReducer);
sagaMiddleWare.run(rootSaga);

export default store;
