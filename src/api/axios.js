import axios from 'axios';
const BASE_URL = 'https://api.coingecko.com/api/v3';

export const axiosCoins = axios.create({
  baseURL: BASE_URL,
});
