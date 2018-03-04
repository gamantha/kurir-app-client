import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(logger, sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

// export const persistor = persistStore(store);
