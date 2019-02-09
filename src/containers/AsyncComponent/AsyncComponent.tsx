import React, { ComponentClass, ComponentFactory } from 'react';
import { lazyComponents } from '../../configs/lazyComponents';
import { store } from '../../index';
import { injectReducer } from '../../reducer';

export interface IProps {
  componentName: string;
}

const AsyncComponent = (props: IProps) => {
  const { componentName } = props;

  import(`./${componentName}/controller/reducer`).then(({ default: reducer }) => {
    injectReducer(store, { key: reducer });
  });

  const Component = lazyComponents[componentName];

  return <Component { ...props } />;
};

export default AsyncComponent;
