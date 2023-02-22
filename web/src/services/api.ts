import axios from 'axios';

import { DEV_BASE_SERVER_URI } from './settings';

const api = axios.create({
  baseURL: DEV_BASE_SERVER_URI,
});

export default api;
