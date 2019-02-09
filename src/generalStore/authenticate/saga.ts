import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';

import { showNotification } from '../notification/actions';
import {
  loginUserFailure,
  loginUserLoading,
  loginUserSuccess,
  signupUserFailure,
  signupUserLoading,
  signupUserSuccess
} from './actions';
import { LOGIN_USER, SIGNUP_USER } from './constants';

export interface ICredencialsForm {
  username: string;
  password: string;
}

/**
 * Send credentials to API to request token
 * @param {*} route API
 * @param {*} credentials username & password
 */
const requestToken = (route: string, credentials: ICredencialsForm) => {
  // try {
  //   return await axios.post(url, options);
  // }
  // catch(err) {
  //   throw new Error(err);
  // }
  return {
    token: 'abcdef1244455'
  };
};

export interface ILoginPayload {
  redirection: string,
    loginForm: ICredencialsForm
}

function* loginUser(payload: ILoginPayload) {
  const {
    redirection,
    loginForm
  } = payload;
  try {
    yield put(loginUserLoading());
    const { token } = yield call(requestToken, '/login', loginForm);
    localStorage.setItem('token', token);
    yield put(loginUserSuccess(token));
    yield put(push(redirection));
  } catch (e) {
    let message;
    switch (e.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }
    yield put(loginUserFailure());
    yield put(showNotification('warning', message));
  }
}

export interface ISignupPayload {
  redirection ? : string,
    signupForm: ICredencialsForm
}

function* signupUser(payload: ISignupPayload) {
  const {
    redirection = '/',
      signupForm
  } = payload;
  try {
    yield put(signupUserLoading());
    const { token } = yield call(requestToken, '/signup', signupForm);
    localStorage.setItem('token', token);
    yield put(signupUserSuccess(token));
    yield put(push(redirection));
  } catch (e) {
    let message;
    switch (e.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }
    yield put(signupUserFailure());
    yield put(showNotification('warning', message));
  }
}

export function* watchLoginUser() {
  yield takeLatest(LOGIN_USER as any, loginUser);
}

export function* watchSignupUser() {
  yield takeLatest(SIGNUP_USER as any, signupUser);
}
