import { Location } from 'history';
import React, { Fragment, ReactNode, FunctionComponent } from 'react';
import { IAuthState } from '../../generalStore';
import { connect } from 'react-redux';
import { selectToken } from '../../generalStore/authenticate/selectors';

export interface IProps {
    children: ReactNode;
    rest: object;
    token: string;
}

const ProtectedC = (props: IProps) => {
  const {
    rest,
    children,
    token
  } = props;
  return token && <Fragment {...rest}>{children}</Fragment>;
};

const mapStateToProps = (state: IAuthState) => {
    return {
        token: selectToken()(state)
    };
};

export const Protected =  connect(mapStateToProps)(ProtectedC as FunctionComponent<never>);