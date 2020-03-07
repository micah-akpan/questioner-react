import {
  SET_ACTIVE_PAGE,
} from '../actionTypes/nav';
import { NavInitialState } from '../shared/models/nav.model'
import { pageToNavItems } from '../shared/mocks/nav.mock'

const initialState: NavInitialState = {
  data: {
    links: [],
    hasLeftNav: false,
    isAuthPage: false,
    activePage: ''
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        data: {
          ...state.data,
          links: pageToNavItems[payload.pageName],
          hasLeftNav: payload.hasLeftNav,
          isAuthPage: payload.isAuthPage,
          activePage: payload.pageName
        }
      };

    default:
      return state;
  }
};
