import axiosInstance from '.';

export const registerUser = async userData => {
  try {
    const { data: { data: [user] } } = await axiosInstance.post('/auth/signup', userData);
    return user;
  } catch (ex) {
    throw ex;
  }
};

export const signIn = async userData => {
  try {
    const { data: { data: [user] } } = await axiosInstance.post('/auth/login', userData);
    return user;
  } catch (ex) {
    throw ex;
  }
};
