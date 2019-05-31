import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import meetupReducer from '../reducers/meetups';

const logger = createLogger({ duration: true });
const middlewares = [logger, thunk];

const store = createStore(meetupReducer, applyMiddleware(...middlewares));

export default store;
