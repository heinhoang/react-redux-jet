import {
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION
} from './constants';

export const showNotification = (type: string, message: string) => ({
  payload: { message, type },
  type: SHOW_NOTIFICATION,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
