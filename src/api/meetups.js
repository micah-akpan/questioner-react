import axiosInstance from '.';

export const fetchAllMeetups = async () => {
  try {
    const { data } = await axiosInstance.get('/meetups');
    return data;
  } catch (ex) {
    return ex;
  }
};

export default {
  fetchAllMeetups
};
