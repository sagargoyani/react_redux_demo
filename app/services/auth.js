import axios from 'axios';
import { loadState } from './localStorage';
import { baseUrl } from '../utils/constants'
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'API-VERSION': 'v3',
    'API-KEY': 'pP645pMYvGlIfp0X',
    'Content-Type': 'application/json',
  },
});

const auth = {
  login: data => instance.post('/user/native/session', data),
};

const isAuthenticated = () => {
  const initalStats = loadState();
  if (initalStats && initalStats.loginResponse && initalStats.loginResponse.response.code === 1) {
    return true;
  } else {
    return false;
  }
};

export { auth, isAuthenticated };
