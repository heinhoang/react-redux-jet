import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { history } from './utils';
import createReducer from './reducer';
import { AppLayout } from './pages';

const initialState = {};
const store = configureStore({
  initialState,
  history,
  createReducer
});

ReactDOM.render(<App store={store} appLayout={AppLayout} history={history} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
