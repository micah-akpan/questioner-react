import {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS
} from '../actionTypes/questions';

const initialState = {
  data: [],
  requesting: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_REQUEST: {
      return {
        ...state,
        requesting: true
      };
    }

    case GET_QUESTIONS_SUCCESS: {
      return {
        ...state,
        requesting: false,
        data: [
          ...state.data,
          ...action.payload
        ]
      };
    }

    case GET_QUESTIONS_FAILURE: {
      return {
        ...state,
        requesting: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
