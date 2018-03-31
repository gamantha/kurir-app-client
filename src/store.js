import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { navigationMiddleware } from '.';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const middleware = [
    // process.env.NODE_ENV === `development` && createLogger(),
    navigationMiddleware,
    sagaMiddleWare
].filter(x => !!x);

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
);

sagaMiddleWare.run(rootSaga);

// export const persistor = persistStore(store);
