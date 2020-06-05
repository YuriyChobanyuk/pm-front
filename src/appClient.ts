import { history } from './history';
import { API_ENDPOINT, API_TIMEOUT } from './utils/constants';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const appClient = axios.create({
  baseURL: API_ENDPOINT,
  timeout: API_TIMEOUT,
});

interface ExtendedAxiosConfig extends AxiosRequestConfig {
  _retry: boolean;
}

interface ExtendedAxiosError extends AxiosError {
  config: ExtendedAxiosConfig;
}

appClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

appClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: ExtendedAxiosError) => {
    const originalRequest = error.config;

    // In case refresh try failed throw an error
    if (
      error?.response?.status === 401 &&
      originalRequest.url === `${API_ENDPOINT}/auth/refresh`
    ) {
      history.replace('/auth/login');
      return Promise.reject(error);
    }

    // In case auth error try to refresh access token and repeat original request
    if (error?.response?.status === 401 && !originalRequest?._retry) {
      // mark original request to prevent cycling requests
      originalRequest._retry = true;

      return appClient.get(`${API_ENDPOINT}/auth/refresh`).then((res) => {
        if (res.status === 200) {
          localStorage.setItem('accessToken', res.data.token);
          appClient.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${localStorage.getItem('accessToken')}`;
          return appClient(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

export default appClient;
