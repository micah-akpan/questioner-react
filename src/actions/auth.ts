import {
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,

  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE
} from '../actionTypes/auth';

import { registerUser, signIn } from '../api/auth';

export const signUpUserRequest = () => ({
  type: SIGN_UP_USER_REQUEST
});

export const signUpUserSuccess = authenticatedUser => ({
  type: SIGN_UP_USER_SUCCESS,
  payload: authenticatedUser
});

export const signUpUserFailure = error => ({
  type: SIGN_UP_USER_FAILURE,
  payload: error
});

export const signInUserRequest = () => ({
  type: SIGN_IN_USER_REQUEST
});

export const signInUserSuccess = authenticatedUser => ({
  type: SIGN_IN_USER_SUCCESS,
  payload: authenticatedUser
});

export const signInUserFailure = error => ({
  type: SIGN_IN_USER_FAILURE,
  payload: error
});

export const signInUser = userData => async dispatch => {
  try {
    dispatch(signInUserRequest());
    const authenticatedUser = await signIn(userData);
    dispatch(signInUserSuccess(authenticatedUser));
    window.location.assign('/meetups');
  } catch (ex) {
    dispatch(signInUserFailure(ex));
  }
};

export const signUpUser = userData => async dispatch => {
  try {
    dispatch(signUpUserRequest());
    const authenticatedUser = await registerUser(userData);
    dispatch(signUpUserSuccess(authenticatedUser));
    window.location.assign('/meetups');
  } catch (ex) {
    dispatch(signUpUserFailure(ex.response.data));
  }
};
