import axios from 'axios';

// https://www.tvmaze.com/api
const baseUrl = 'https://api.tvmaze.com';

// create an axios instance
const fetchClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});
