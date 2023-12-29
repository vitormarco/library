import { api } from '@/lib/axios';

export const getUsers = async () => {
  return api.get('/users');
};

export const getUserByEmail = async (email: string) => {
  return api
    .get('/users', {
      params: {
        email
      }
    })
    .then((res) => res.data);
};
