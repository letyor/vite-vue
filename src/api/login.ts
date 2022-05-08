import fetch from '../utils/fetch';

export const getUser = (params: any) => {
  return fetch.get('/user', params);
};

export const getRole = (params: any) => {
  return fetch.get('/role', params);
};

export const logout = (params: any) => {
  return fetch.get('/logout', params);
};
