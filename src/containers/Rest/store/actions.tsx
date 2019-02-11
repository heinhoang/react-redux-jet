import { IPostApiResourceOptions } from '../../../utils';
import {
  DELETE_RESOURCE,
  DELETE_RESOURCE_FAILURE,
  DELETE_RESOURCE_SUCCESS,
  DELETING_RESOURCE,

  GET_RESOURCES,
  GET_RESOURCES_FAILURE,
  GET_RESOURCES_SUCCESS,
  LOADING_RESOURCES,

  POST_RESOURCE,
  POST_RESOURCE_FAILURE,
  POST_RESOURCE_SUCCESS,
  POSTING_RESOURCE,

  SET_SEARCH_TERM
} from './constants';

// *** get resources ***//

export function loadingResources() {
  return {
    type: LOADING_RESOURCES
  };
}

export interface IGetResourcesPayload {
  api: string;
  name: string;
}

export interface IGetResourcesAction {
  payload: IGetResourcesPayload;
  type: string;
}

export function getResources(payload: IGetResourcesPayload): IGetResourcesAction {
  return {
    payload,
    type: GET_RESOURCES
  };
}

export interface IResource {
  resourceName: string;
  data: {},
  searchTerm?: string;
}

export function getResourcesSuccess({ resourceName, data }: IResource) {
  return {
    payload: { resourceName, data },
    type: GET_RESOURCES_SUCCESS
  };
}

export function getResourcesFailure() {
  return {
    type: GET_RESOURCES_FAILURE
  };
}

// *** Post resources ***

export function postingResource() {
  return {
    type: POSTING_RESOURCE
  };
}

export interface IPostResourcePayload extends IPostApiResourceOptions {
  redirect?: string;
}

export interface IPostResourceAction {
  payload: IPostResourcePayload;
  type: string;
}

/**
 * Action to post resource
 * @param payload will be passed to API
 */
export function postResource(payload: IPostResourcePayload): IPostResourceAction {
  return {
    payload,
    type: POST_RESOURCE
  };
}

export function postResourceSuccess() {
  return {
    type: POST_RESOURCE_SUCCESS
  };
}

export function postResourceFailure() {
  return {
    type: POST_RESOURCE_FAILURE
  };
}

// *** delete resources ***//

export interface IDeleteResourcesPayload {
  id: string;
  resourceName: string;
  apiUrl: string;
  reRenderParams?: string;
}

export interface IDeleteResourcesAction {
  type: string;
  payload: IDeleteResourcesPayload
}

export function deletingResource() {
  return {
    type: DELETING_RESOURCE
  };
}

export function deleteResource(payload: IDeleteResourcesPayload): IDeleteResourcesAction {
  return {
    payload,
    type: DELETE_RESOURCE
  };
}

export function deleteResourceSuccess({ resourceName, data }: IResource) {
  return {
    payload: { resourceName, data },
    type: DELETE_RESOURCE_SUCCESS
  };
}

export function deleteResourceFailure() {
  return {
    type: DELETE_RESOURCE_FAILURE
  };
}

export function setSearchTerm(keyword: string) {
  return {
    payload: { keyword },
    type: SET_SEARCH_TERM
  };
}
