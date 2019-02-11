import axios from 'axios';

export const getApiResources = (url: string) => axios.get(url, {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.data);

export interface IData {
    [key: string]: any;
}

export interface IPostApiResourceOptions {
  url: string;
  data: IData;
  config: {
    [key: string]: string;
  };
  type: string;
}

export const postApiResource = async ({ url, data, config = {}, type = 'post'}: IPostApiResourceOptions) => {
  const postType = type === 'post' ? 'post' : 'put';
  try {
        const response = await axios[postType](url, data, config);
        return {
            response,
            success: true
        };
    }
    catch (error) {
        return ({ success: false });
    }
}

export const deleteApiResource = (url: string) => axios.delete(url, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    }
  })
  .then(response => {
    if (response.status === 200) {
      return response;
    }
    throw response;
  });;
