import client from '../providers/client';
import { getFromStorage } from './auth';

export const getUserInfo = ({ userId }) =>
  client.get(`/users/${userId}`, {
    header: {
      Authorization: 'Bearer:' + getFromStorage('user').accessToken,
    },
  });
