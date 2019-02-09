import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { messages } from './configs';
import './index.css';
import { AppLayout } from './pages';
import createReducer from './reducer';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store';
import { history } from './utils';

export const initialState = {};
export const store = configureStore({
  createReducer,
  history,
  initialState
});


ReactDOM.render(<App
  store={store}
  appLayout={AppLayout}
  history={history}
  messages={messages}
  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
