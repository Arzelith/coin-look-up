import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.coingecko.com/api/v3';

export const axiosCoins = axios.create({
  baseURL: BASE_URL,
  headers: { accept: 'application/json', 'x-cg-demo-api-key': API_KEY },
});
