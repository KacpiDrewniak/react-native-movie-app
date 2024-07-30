import axios from 'axios';
import {API_URL, TOKEN} from '../config/config.ts';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
