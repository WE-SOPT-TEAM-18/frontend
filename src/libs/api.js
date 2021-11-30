import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://asia-northeast3-cs-netflix.cloudfunctions.net/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
