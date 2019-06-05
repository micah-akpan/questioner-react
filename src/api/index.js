import axios from 'axios';

const hostedAPIURL = 'https://questionerv1.herokuapp.com/api/v1';
const localHostURL = 'http://localhost:9999/api/v1';

const axiosInstance = axios.create({
  baseURL: localHostURL
});

export default axiosInstance;
