import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { navigationMiddleware } from '.';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['navigation', 'sendPackage'],
    whilelist: ['userRegister', 'userLogin'],
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
    // process.env.NODE_ENV === `development` && createLogger(),
    navigationMiddleware,
    sagaMiddleWare
].filter(x => !!x);

export const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);
