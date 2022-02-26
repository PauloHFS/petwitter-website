import client from '../providers/client';
import { getFromStorage } from './auth';

export const createPost = text =>
  client.post(
    '/posts',
    { text },
    {
      header: {
        Authorization: 'Bearer:' + getFromStorage('user').accessToken,
      },
    }
  );

export const getFeed = ({ page = 1, page_size = 10 }) =>
  client.get(`/posts?page=${page}&page_size=${page_size}`);

export const getUserPosts = ({ user_id, page = 1, page_size = 10 }) =>
  client.get(`/posts?user_id=${user_id}&page=${page}&page_size=${page_size}`);
