import axios from 'axios';

import { URL_CRUD_CUSTOMERS } from 'react-native-dotenv';

const apiCustomers = axios.create({
  baseURL: URL_CRUD_CUSTOMERS || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default apiCustomers;
