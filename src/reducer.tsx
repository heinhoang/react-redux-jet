import { connectRouter } from 'connected-react-router';
import { get, has, keys, set } from 'lodash';
import { combineReducers, Reducer } from 'redux';
import { authenticated } from './generalStore';
import { IExtendedStore } from './store';
import { history } from './utils';

export interface IinjectedReducers extends IdynamicReducers {
  [key: string]: Reducer;
}

const reducerSlices = {
  authenticated
};

/**
 * Wrap the root reducer and return a new root reducer with router state
 * @param injectedReducers inject dynamic reducers
 */
export default function createReducer(injectedReducers: IinjectedReducers = reducerSlices): Reducer {
  const rootReducer = combineReducers({
      router: connectRouter(history),
      ...injectedReducers,
  });
  return rootReducer;
}

export interface IdynamicReducers {
  [key: string]: Reducer;
}

/**
 * Inject dynamic reducers into existed store
 * @param store existed store
 * @param injectedReducers: injected reducers
 */
export const injectReducer = (store: IExtendedStore, dynamicReducers: IdynamicReducers) => {
  for(const key of keys(dynamicReducers)) {
    if (has(store.asyncReducers, key)) { return; }
    set(store, 'asyncReducers.key', get(dynamicReducers, key));
  }

  store.replaceReducer(createReducer(store.asyncReducers));
};
