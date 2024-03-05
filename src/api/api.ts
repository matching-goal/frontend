import axios from 'axios';
import { BASE_API_URL } from '../constants/url';

const API = {
  get: async (url: string) => {
    const res = await axios.get(`${BASE_API_URL + url}`);
    return res;
  },
  post: async <T>(url: string, body: T) => {
    const res = await axios.post(`${BASE_API_URL + url}`, body);
    return res;
  },
  delete: async (url: string) => {
    const res = await axios.delete(`${BASE_API_URL + url}`);
    return res;
  },
  put: async <T>(url: string, body: T) => {
    const res = await axios.put(`${BASE_API_URL + url}`, body);
    return res;
  },
  patch: async <T>(url: string, body: T) => {
    const res = await axios.patch(`${BASE_API_URL + url}`, body);
    return res;
  },
};

export default API;
