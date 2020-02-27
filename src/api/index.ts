import axios from 'axios';

const hostedAPIURL = 'https://questionerv1.herokuapp.com/api/v1';
const localHostURL = 'http://localhost:9999/api/v1';
const url = process.env.NODE_ENV === 'development' ? localHostURL : hostedAPIURL;

const axiosInstance = axios.create({
  baseURL: hostedAPIURL
});

export default axiosInstance;
