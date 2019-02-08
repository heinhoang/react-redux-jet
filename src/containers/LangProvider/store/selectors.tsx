import { get } from 'lodash';
import { createSelector } from 'reselect';
import { ILangState } from './reducers';

const selectLocale = () =>
  createSelector((state: ILangState) => get(state, 'locale'), locale => locale);

export { selectLocale };
