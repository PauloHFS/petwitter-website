import client from '../providers/client';

export const login = data => client.post('/login', data);

export const signup = ({ name, email, username, password }) =>
  client.post('/signup', { name, email, username, password });

export const getFromStorage = key => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
