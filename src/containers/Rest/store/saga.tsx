import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import { logoutUser, showNotification } from '../../../generalStore';
import { deleteApiResource, getApiResources, postApiResource } from '../../../utils';
import {
  deleteResourceFailure,
  deleteResourceSuccess,
  getResourcesFailure,
  getResourcesSuccess,
  IDeleteResourcesAction,
  IGetResourcesAction,
  IPostResourceAction,
  postResourceFailure,
  postResourceSuccess
} from './actions';
import {
  DELETE_RESOURCE,
  GET_RESOURCES,
  POST_RESOURCE
} from './constants';

/**
 * request resorce from API
 * @param action getResourcesAction
 */
function* getResources({ payload }: IGetResourcesAction) {
  const { api, name } = payload;
  try {
    // yield put(showLoading());
    const data = yield call(getApiResources, api);
    yield put(getResourcesSuccess({
      data,
      resourceName: name
    }));
  } catch (e) {
    const message = e.message ? e.message : e;
    yield put(getResourcesFailure());
    showNotification('warning', message);
  } finally {
    // yield put(hideLoading());
  }
}

/**
 * send delete info to API
 * @param action deleteResourcesAction
 */
function* deleteResource({ payload }: IDeleteResourcesAction) {
  const { id, apiUrl, reRenderParams = '', resourceName } = payload;
  try {
    const result = yield call(deleteApiResource, `${apiUrl}/${id}`);
    if (result) {
      const newData = yield call(getApiResources, `${apiUrl}/${reRenderParams}`);
      yield put(deleteResourceSuccess({
        data: newData,
        resourceName
      }));
    }
  } catch (e) {
    let message = '';
    if (e.status === 403) {
      yield put(logoutUser());
      message = 'Invalid token. You are being logged off';
    } else {
      yield put(deleteResourceFailure());
      message = 'Sorry, an error occured!';
    }
    localStorage.removeItem('token');
    showNotification(message, 'warning');
  }
}

/**
 * send resource (data) to post API (for post & edit)
 * @param action postResourceAction
 */
function* postResource({ payload }: IPostResourceAction) {
  const { data, url, type, redirect } = payload;
  try {
    const result = yield call(postApiResource, { url, data, config: {}, type });

    if (result.success) {
      yield put(postResourceSuccess());
      if (type === 'post') {
        yield put(push(redirect ? redirect : '/'));
      }
    }

  } catch (e) {
    let message;
    if (e.status === 403) {
      yield put(logoutUser());
      message = 'Invalid token. You are being logged off';
    } else {
      yield put(postResourceFailure());
      message = 'Sorry, an error occured!';
    }
    localStorage.removeItem('token');
    showNotification(message, 'warning');
  }

}

function* watchGetResources() {
  yield takeLatest(GET_RESOURCES as any, getResources);
}

function* watchPostResource() {
  yield takeLatest(POST_RESOURCE as any, postResource);
}

function* watchDeleteResource() {
  yield takeLatest(DELETE_RESOURCE as any, deleteResource);
}

export {
  watchGetResources,
  watchPostResource,
  watchDeleteResource
};
