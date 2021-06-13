import {
  GET_MEETUPS_REQUEST,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE,
  SEARCH_MEETUPS_REQUEST,
  SEARCH_MEETUPS_SUCCESS
} from '../actionTypes/meetups';

import { fetchAllMeetups } from '../api/meetups';

export const getMeetupsRequest = () => ({
  type: GET_MEETUPS_REQUEST
});

export const getMeetupsSuccess = meetups => ({
  type: GET_MEETUPS_SUCCESS,
  payload: meetups
});

export const getMeetupsFailure = error => ({
  type: GET_MEETUPS_FAILURE,
  payload: error
});

export const getMeetups = () => async dispatch => {
  try {
    dispatch(getMeetupsRequest);
    const { data } = await fetchAllMeetups();
    dispatch(getMeetupsSuccess(data));
  } catch (ex) {
    dispatch(getMeetupsFailure(ex));
  }
};

export const searchMeetupsRequest = (filter: string) => ({
  type: SEARCH_MEETUPS_REQUEST,
  payload: filter
})

export const searchMeetupsSuccess = () => ({
  type: SEARCH_MEETUPS_SUCCESS,
})