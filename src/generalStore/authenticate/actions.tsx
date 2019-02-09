import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_LOADING,
  SIGNUP_USER_SUCCESS
} from './constants';

export function loginUser(redirection: string) {
  return {
    redirection,
    type: LOGIN_USER
  };
}

export function loginUserLoading() {
  return {
    type: LOGIN_USER_LOADING
  };
}

export function loginUserSuccess(token: string) {
  return {
    token,
    type: LOGIN_USER_SUCCESS
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
    token,
    type: SIGNUP_USER_SUCCESS
  };
}

export function signupUserFailure() {
  return {
    type: SIGNUP_USER_FAILURE
  };
}
