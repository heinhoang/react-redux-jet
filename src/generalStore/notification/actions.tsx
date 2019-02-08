import {
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION
} from './constants';

export const showNotification = (type: string, text: string) => ({
    type: SHOW_NOTIFICATION,
    payload: { text, type },
});

export const hideNotification = () => ({
    type: HIDE_NOTIFICATION,
});