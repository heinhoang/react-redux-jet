import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { Reducer } from 'redux';
import { history } from './utils';

export interface IReducerOptions {}

/**
 * Wrap the root reducer and return a new root reducer with router state
 * @param injectedReducers inject dynamic reducers
 */
export default function createReducer(injectedReducers: IReducerOptions = {}): Reducer {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        ...injectedReducers,
    });
    return rootReducer;
}