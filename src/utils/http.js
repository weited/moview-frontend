import axios from 'axios';

const baseURLGenerator = () => {
  const url = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api/v1';
  // const env = process.env.NODE_ENV;
  // let url = process.env.REACT_APP_BASE_URL;
  // switch (env) {
  //   case 'development':
  //     url = url || 'http://localhost:8080/api/v1';
  //     break;
  //   case 'uat':
  //     url = 'http://uat.moviewforum.com:8080/api/v1';
  //     break;
  //   case 'production':
  //     url = 'http://service.moviewforum.com:8080/api/v1';
  //     break;
  //   default:
  //     url = 'http://localhost:8080/api/v1';
  //     break;
  // }
  return url;
};
const baseURL = baseURLGenerator();
const http = axios.create({
  baseURL,
  timeout: 5 * 1000,
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = token;
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response) {
      const { status } = error.response;
      let message = '';
      switch (status) {
        case 400:
          message = 'Bad Request, please check again!';
          break;
        case 401:
          message = 'Unauthorized, please login!';
          // logout app if token unauthorized
          // store.dispatch(logout());
          // store.dispatch(cleanUser());
          break;
        case 404:
          message = 'No resource found!';
          break;
        case 500:
          message = 'Server error!';
          break;
        default:
          // eslint-disable-next-line no-unused-vars
          message = 'Something wrong!';
          break;
      }
      // handle error message to global notification
    }
    return Promise.reject(error);
  }
);

export default http;
