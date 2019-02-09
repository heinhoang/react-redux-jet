import { keys } from 'lodash';
import { ComponentClass, ComponentFactory } from 'react';

// const HelloWorld = lazy(() => import('./HelloWorld'));

export interface ILazyComponents {
  [key: string]: ComponentClass | ComponentFactory < any, any > ;
}

export const lazyComponents: ILazyComponents = {
  // HelloWorld
};

/**
 * Register more components
 * @param moreComponents registered components
 */
export const registerLazyComponents = (moreComponents: ILazyComponents) => {
    for(const key of keys(moreComponents)) {
        lazyComponents[key] = moreComponents[key];
    }
};

