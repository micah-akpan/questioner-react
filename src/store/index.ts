import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger({ duration: true });
const middlewares = [logger, thunk];

const store = createStore<any, any, any, any>(rootReducer, applyMiddleware(...middlewares));

export default store;
