import { axiosInstance } from 'apis';
export const getUserProfile = async () => {
  const { data } = await axiosInstance.get('/user');
  return data.data;
};
export const refreshAccessToken = async (token: string) => {
  const { data } = await axiosInstance.post('/auth/refresh-token', {
    refreshToken: token,
  });
  return data.data;
};
export const ExecLogin = async (
  email: string,
  password: string,
): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  const { data } = await axiosInstance.post('/auth/login', {
    email,
    password,
  });
  return data.data;
};
