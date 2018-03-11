import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import Reactotron from 'reactotron-react-native';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const middleware = [
    // process.env.NODE_ENV === `development` && createLogger(),
    sagaMiddleWare
].filter(x => !!x);

export const store = Reactotron.createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
);

sagaMiddleWare.run(rootSaga);

// export const persistor = persistStore(store);
