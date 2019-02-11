import { IDeleteResourcesPayload, IDeleteResourcesAction } from "./store/actions";
import { API_URL } from "../../configs";

export interface IDeleteROptions extends IDeleteResourcesPayload {
  page: number;
  limit: number;
}

export const deleteR = (
  deleteFunc: (payload: IDeleteResourcesPayload) => IDeleteResourcesAction,
  options: IDeleteROptions
  ) => {
    const { name, page, limit, id } = options;
    deleteFunc({
      apiUrl: `${API_URL}/${name}`,
      id,
      reRenderParams: `?_page=${page}&_limit=${limit}`,
      resourceName: name
    });
}
