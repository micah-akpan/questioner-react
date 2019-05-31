import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9999/api/v1'
});

export default axiosInstance;
