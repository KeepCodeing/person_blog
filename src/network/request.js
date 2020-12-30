import axios from 'axios'

export default function (config) {
  const instance = axios.create({
    baseURL: './',
    timeout: 5000,
  });

  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    return  err;
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    return err;
  });

  return instance(config);
}