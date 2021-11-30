import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://asia-northeast3-cs-netflix.cloudfunctions.net/api',
  timeout: 1000,
});

export const rank10Category = async () => {
  try {
    const data = await instance.get('/content/rank');
    return data.data.data;
  } catch (e) {
    console.log('[Fail] Get data');
    return null;
  }
};

const listCategory = async () => {
  try {
    const data = await instance.get('/content/3');
    console.log('data', data.data.data);
    return data;
  } catch (e) {
    console.log('[FAIL] Get data');
    return null;
  }
};

listCategory();
