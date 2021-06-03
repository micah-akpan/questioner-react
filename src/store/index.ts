import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const logger = createLogger({ duration: true });
const middlewares = process.env.NODE_ENV == 'development' ? [logger, thunk] : [thunk];

const store = createStore<any, any, any, any>(rootReducer, applyMiddleware(...middlewares));

export default store;
