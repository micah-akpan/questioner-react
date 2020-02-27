import {
  SIGN_UP_USER_FAILURE,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,

  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS
} from '../actionTypes/auth';

const initialState = {
  data: null,
  error: null,
  requesting: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_USER_REQUEST:
    case SIGN_IN_USER_REQUEST: {
      return {
        ...state,
        requesting: true
      };
    }

    case SIGN_UP_USER_SUCCESS:
    case SIGN_IN_USER_SUCCESS: {
      return {
        ...state,
        requesting: false,
        data: payload,
        error: null
      };
    }

    case SIGN_UP_USER_FAILURE:
    case SIGN_IN_USER_FAILURE: {
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
