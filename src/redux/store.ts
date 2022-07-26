import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'

import logger from 'redux-logger';
import rootReducer from './rootReducer';
const saga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(, logger));

export default store;
