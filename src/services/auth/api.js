import axios from 'axios';

import { URL_AUTHENTICATION } from 'react-native-dotenv';

// import { getToken } from './authentication';

const apiAuthentication = axios.create({
  baseURL: URL_AUTHENTICATION || 'http://localhost:300',
});

// apiAuthentication.interceptors.request.use(async config => {
//   const token = getToken();
//   return token ? (config.headers.Authorization = token) : config;
// });

export default apiAuthentication;
