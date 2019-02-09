import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Reducer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { IdynamicReducers, IinjectedReducers } from './reducer';
import rootSaga from './saga';

export interface IStoreConfig {
  initialState: {};
  history: History;
  createReducer: (f?: IinjectedReducers) => Reducer;
}

export interface IExtendedStore extends Store {
  asyncReducers?: IdynamicReducers;
}

export function configureStore({
  initialState,
  history,
  createReducer
}: IStoreConfig): IExtendedStore {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [composeWithDevTools(applyMiddleware(...middlewares))];
  const store = createStore(createReducer(), initialState, compose(...enhancers));
  sagaMiddleware.run(rootSaga);
  // to inject dynamic reducer later
  (store as IExtendedStore).asyncReducers = {};
  return store;
}
