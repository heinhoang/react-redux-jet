import { createSelector } from 'reselect';
import { IAuthState } from './reducers';

export const selectToken = () => createSelector(
  (state: IAuthState) => state.token,
  token => token
);