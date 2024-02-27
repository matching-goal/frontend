import axios from 'axios';
import BASE_API_URL from '../constants/url';

const API = {
  get: async (url: string) => {
    const data = await axios.get(`${BASE_API_URL + url}`);
    return data.data;
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
};

export default API;
