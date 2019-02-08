import {
  LOGIN_USER,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SIGNUP_USER_LOADING,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from './constants';

export function loginUser(redirection: string) {
  return {
      type: LOGIN_USER,
      redirection
  };
}

export function loginUserLoading() {
  return {
      type: LOGIN_USER_LOADING
  };
}

export function loginUserSuccess(token: string) {
  return {
      type: LOGIN_USER_SUCCESS,
      token
  };
}

export function loginUserFailure() {
  return {
      type: LOGIN_USER_FAILURE
  };
}

export function logoutUser() {
  return {
      type: LOGOUT_USER
  };
}

export function signupUserLoading() {
  return {
      type: SIGNUP_USER_LOADING
  };
}

export function signupUser() {
  return {
      type: SIGNUP_USER
  };
}

export function signupUserSuccess(token: string) {
  return {
      type: SIGNUP_USER_SUCCESS,
      token
  };
}

export function signupUserFailure() {
  return {
      type: SIGNUP_USER_FAILURE
  };
}