import produce from 'immer';
import { get, merge, toString } from 'lodash';
import { Action } from 'redux';
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_LOADING,
  SIGNUP_USER_SUCCESS
} from './constants';

export interface IAuthState {
  isAuthenticated?: boolean,
  token?: string,
  name?: string,
  checking?: boolean
}

const initialState = {
  checking: false,
  isAuthenticated: false,
  name: '',
  token: toString(localStorage.getItem('token')),
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
          checking: false,
          isAuthenticated: true,
          name: get(action, 'token'),
          token: get(action, 'token'),
        });
      }
      case SIGNUP_USER_FAILURE:
      case LOGIN_USER_FAILURE:
      case LOGOUT_USER:
        return initialState;
      default: return state;
    }
  });
