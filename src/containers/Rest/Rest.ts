import React, { cloneElement, Dispatch, PureComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { ActionCreator, AnyAction, bindActionCreators } from 'redux';
import { API_URL } from '../../configs';
import {
  deleteResource,
  getResources,
  IDeleteResourcesPayload,
  IGetResourcesAction,
  IGetResourcesPayload,
  IPostResourcePayload
} from './store/actions';

export interface IPagination {
  limit: number;
  page: number;
  total: number;
}

export interface IProps {
  children: ReactNode;
  crudGet: {
    [key: string]: IGetResourcesPayload; // key is the name of the resource
  };
  crudDel: {
    [key: string]: IDeleteResourcesPayload;
  };
  crudPost: {
    [key: string]: IPostResourcePayload;
  };
  pagination: IPagination;
  getResources: (payload: IGetResourcesPayload) => IGetResourcesAction;
  restApi: string;
}

class Rest extends PureComponent < IProps, {} > {
  private pagination: IPagination;

  constructor(props: IProps) {
    super(props);
      const {
        pagination,
        crudDel,
        crudGet
    } = this.props;

    this.pagination = pagination || {
      limit: 9,
      page: 1,
      total: 50
    };
  }

  public render() {
    const { children } = this.props;
    return cloneElement(children, );
  }

  private getR(page = this.pagination.page, limit = this.pagination.limit) {
    const restApi = this.props.restApi ?
      `/${this.props.restApi}` :
      `/?_page=${page}&_limit=${limit}`;
    const apiUrl = `${API_URL}/${this.props.name}${restApi}`;
    this
      .props
      .getResources({ api: apiUrl, name: this.props.storeName });
  }

  private deleteR(rId, page = this.pagination.page, limit = this.pagination.limit) {
    this.props
      .deleteResource({
        apiUrl: `${API_URL}/${this.props.name}`,
        id: rId,
        reRenderParams: `?_page=${page}&_limit=${limit}`,
        resourceName: this.props.name 
      });
  }

}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  deleteResource: bindActionCreators<any, ActionCreator<any>>(deleteResource, dispatch),
  getResources: bindActionCreators<any, ActionCreator<any>>(getResources, dispatch)
});

export default connect(null, mapDispatchToProps)(Rest);
