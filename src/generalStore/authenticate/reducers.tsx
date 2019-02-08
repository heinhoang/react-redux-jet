import {
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SIGNUP_USER_LOADING,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from './constants';
import { Action } from 'redux';
import produce from 'immer';
import { merge, get, toString } from 'lodash';

export interface IAuthState {
  isAuthenticated?: boolean,
  token?: string,
  name?: string,
  checking?: boolean
}

const initialState = {
  isAuthenticated: false,
  token: toString(localStorage.getItem('token')),
  name: '',
  checking: false
};

export const authenticated = (state: IAuthState = initialState, action: Action) => 
  produce(state, draft => {
    switch (action.type) {
      case SIGNUP_USER_LOADING:
      case LOGIN_USER_LOADING:
        draft.checking = true;
      case SIGNUP_USER_SUCCESS:
      case LOGIN_USER_SUCCESS: {
        return merge(draft, {
          isAuthenticated: true,
          token: get(action, 'token'),
          name: get(action, 'token'),
          checking: false
        });
      }
      case SIGNUP_USER_FAILURE:
      case LOGIN_USER_FAILURE:
      case LOGOUT_USER:
        return initialState;
      default: return state;
    }
  });