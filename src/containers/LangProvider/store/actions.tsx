import { CHANGE_LOCALE } from './constants';

export interface IChangeLocale {
  locale: string,
  type: string
}

export function changeLocale(locale: string): IChangeLocale {
  return {
    locale,
    type: CHANGE_LOCALE
  };
}
