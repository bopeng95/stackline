import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from 'containers/App/redux/reducer';

import appSaga from 'containers/App/redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSaga);

export default store;
