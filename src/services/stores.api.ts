import axios from 'axios';

export function StoresController() {
  const BASE_URL = '/';
  const getStores = () => axios.get(BASE_URL);

  return {
    getStores,
  };
}
