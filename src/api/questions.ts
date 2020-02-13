import axiosInstance from '.';

export const getMeetupQuestions = async meetupId => {
  try {
    const { data: { data } } = await axiosInstance.get(`/meetups/${meetupId}/questions`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    });
    return data;
  } catch (ex) {
    throw ex;
  }
};
