import { combineReducers } from 'redux';
import meetups from './meetups';
import auth from './auth';

export default combineReducers({
  meetups,
  auth
});
