import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://questionerv1.herokuapp.com/api/v1'
});

export default axiosInstance;
