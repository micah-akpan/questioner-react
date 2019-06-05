import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} from '../actionTypes/questions';

import { getMeetupQuestions } from '../api/questions';

const getQuestionsRequest = () => ({
  type: GET_QUESTIONS_REQUEST
});

const getQuestionsSuccess = questions => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: questions
});

const getQuestionsFailure = error => ({
  type: GET_QUESTIONS_FAILURE,
  payload: error
});

export const getQuestions = meetupId => async dispatch => {
  try {
    dispatch(getQuestionsRequest());
    const questions = await getMeetupQuestions(meetupId);
    dispatch(getQuestionsSuccess(questions));
  } catch (ex) {
    dispatch(getQuestionsFailure(ex));
  }
};
