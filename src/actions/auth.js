import {
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE
} from '../actionTypes/auth';

import { registerUser } from '../api/auth';

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

export const signUpUser = userData => async dispatch => {
  try {
    dispatch(signUpUserRequest());
    const authenticatedUser = await registerUser(userData);
    dispatch(signUpUserSuccess(authenticatedUser));
  } catch (ex) {
    dispatch(signUpUserFailure(ex));
  }
};
