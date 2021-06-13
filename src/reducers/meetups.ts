import {
  GET_MEETUPS_REQUEST,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE,
  SEARCH_MEETUPS_REQUEST,
  SEARCH_MEETUPS_SUCCESS
} from '../actionTypes/meetups';

const initialState = {
  data: [],
  error: null,
  requesting: false,
  search: {
    requesting: true,
    filter: ''
  }
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
        data: payload,
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

    case SEARCH_MEETUPS_REQUEST: {
      return {
        ...state,
        search: {
          ...state.search,
          requesting: true,
          filter: payload
        }
      }
    }

    case SEARCH_MEETUPS_SUCCESS: {
      return {
        ...state,
        search: {
          ...state.search,
          requesting: false,
        }
      }
    }

    default:
      return state;
  }
};
