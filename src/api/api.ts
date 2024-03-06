import axios from 'axios';
import BASE_API_URL from '../constants/url';

import { getSession } from 'next-auth/react';

const API = {
  get: async (url: string) => {
    const session = await getSession();
    const token = session?.accessToken;
    const res = await axios.get(`${BASE_API_URL + url}`, {
      headers: {
        Authorization: `Bearer ${token?.email}`,
      },
    });
    return res;
  },
  post: async <T>(url: string, body: T) => {
    const session = await getSession();
    const token = session?.accessToken;
    const res = await axios.post(`${BASE_API_URL + url}`, body, {
      headers: {
        Authorization: `Bearer ${token?.email}`,
      },
    });
    return res;
  },
  delete: async (url: string) => {
    const session = await getSession();
    const token = session?.accessToken;
    const res = await axios.delete(`${BASE_API_URL + url}`, {
      headers: {
        Authorization: `Bearer ${token?.email}`,
      },
    });
    return res;
  },
  put: async <T>(url: string, body: T) => {
    const session = await getSession();
    const token = session?.accessToken;
    const res = await axios.put(`${BASE_API_URL + url}`, body, {
      headers: {
        Authorization: `Bearer ${token?.email}`,
      },
    });
    return res;
  },
  patch: async <T>(url: string, body: T) => {
    const session = await getSession();
    const token = session?.accessToken;
    const res = await axios.patch(`${BASE_API_URL + url}`, body, {
      headers: {
        Authorization: `Bearer ${token?.email}`,
      },
    });
    return res;
  },
};

export default API;
