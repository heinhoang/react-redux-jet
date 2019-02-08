import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Store, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { IReducerOptions } from './reducer';

export interface IStoreConfig {
    initialState: {};
    history: History;
    createReducer: (f?: IReducerOptions) => Reducer;
}

export default function configureStore({
    initialState,
    history,
    createReducer
}: IStoreConfig) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    const enhancers = [composeWithDevTools(applyMiddleware(...middlewares))];
    const store = createStore(createReducer(), initialState, compose(...enhancers));
    return store;
}