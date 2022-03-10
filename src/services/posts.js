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

export const getFeed = async ({ pageParam = 1 }) =>
  await client.get(`/posts?page=${pageParam}&page_size=10`);

export const getUserPosts = ({ user_id, page = 1 }) =>
  client.get(`/posts?user_id=${user_id}&page=${page}&page_size=10`);
