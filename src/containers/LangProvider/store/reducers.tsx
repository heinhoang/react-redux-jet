import produce from 'immer';
import { getLocale } from '../../../utils/lang';
import { IChangeLocale } from './actions';
import { CHANGE_LOCALE } from './constants';

export interface ILangState {
  locale: string;
}

export const initialState: ILangState = {
  locale: getLocale('en'),
};

export const changeLang = (state: ILangState = initialState, action: IChangeLocale) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
      default:
        break;
    }
  });
