import produce from 'immer';
import { set } from 'lodash';
import { IResource } from './actions';
import {
  DELETE_RESOURCE_FAILURE,
  DELETE_RESOURCE_SUCCESS,

  GET_RESOURCES_FAILURE,
  GET_RESOURCES_SUCCESS,

  SET_SEARCH_TERM
} from './constants';

/**
 * Example resources
 * {
 *      posts: {
 *                  pagination: {}
 *                  data: [{
 *                      title: 'my title',
 *                      content: 'my content
 *                  }]
 *              }
 * }
 */

export interface IRestState {
  resources: {};
  searchTerm?: string;
}

const initialState: IRestState = {
  resources: {},
  searchTerm: ''
};

export interface IResourceAction {
  payload: IResource;
  type: string;
}

export default (state: IRestState = initialState, { type, payload }: IResourceAction) => {
  const { resourceName, data, searchTerm } = payload;
  return produce(state, draft => {
    switch (type) {
      case GET_RESOURCES_SUCCESS:
      case DELETE_RESOURCE_SUCCESS:
        set(draft, resourceName, data);
        break;
      case DELETE_RESOURCE_FAILURE:
      case GET_RESOURCES_FAILURE:
        set(draft, resourceName, data);
      case SET_SEARCH_TERM:
        set(draft, 'searchTerm', searchTerm);
      default:
        break;
    }
  });
};
