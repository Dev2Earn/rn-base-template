import axios, { AxiosRequestHeaders } from 'axios';
import { API_ROOT, TIME_OUT } from '@src/configs/constants/api';

const network = axios.create({
  baseURL: API_ROOT,
  timeout: TIME_OUT,
});

export function setDefaultHeaders(headers: AxiosRequestHeaders) {
  Object.keys(headers).forEach(key => {
    network.defaults.headers.common[key] = headers[key];
  });
}

network.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response?.status === 401) {
      setDefaultHeaders({ Authorization: '' });
    }
    return error;
  },
);

export default network;
