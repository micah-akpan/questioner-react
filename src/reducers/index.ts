import { combineReducers } from 'redux';
import meetups from './meetups';
import auth from './auth';
import questions from './questions';

export default combineReducers({
  meetups,
  auth,
  questions
});
