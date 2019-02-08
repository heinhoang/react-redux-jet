import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { Reducer } from 'redux';
import { history } from './utils';
import { authenticated } from './generalStore';

export interface IReducerOptions {}

const reducerSlices = {
    authenticated
};

/**
 * Wrap the root reducer and return a new root reducer with router state
 * @param injectedReducers inject dynamic reducers
 */
export default function createReducer(injectedReducers: IReducerOptions = reducerSlices): Reducer {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        ...injectedReducers,
    });
    return rootReducer;
}