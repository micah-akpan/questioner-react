import {
  GET_MEETUPS_REQUEST,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE
} from '../actionTypes/meetups';

const initialState = {
  meetups: [],
  error: null,
  requesting: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MEETUPS_REQUEST: {
      return {
        ...state,
        requesting: true
      };
    }

    case GET_MEETUPS_SUCCESS: {
      return {
        ...state,
        requesting: false,
        meetups: payload,
        error: null
      };
    }

    case GET_MEETUPS_FAILURE: {
      return {
        ...state,
        requesting: false,
        error: payload
      };
    }

    default:
      return state;
  }
};
