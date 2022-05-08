/**
 * https://axios-http.com/docs/intro
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = '';

// Add a request interceptor
axios.interceptors.request.use(reqInterceptor, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(resInterceptor, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export function reqInterceptor(config: AxiosRequestConfig) {
  return config;
}

export function resInterceptor(response: AxiosResponse) {
  return response;
}

export default axios;
