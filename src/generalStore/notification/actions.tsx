import {
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION
} from './constants';

export const showNotification = (type: string, text: string) => ({
  payload: { text, type },
  type: SHOW_NOTIFICATION,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
