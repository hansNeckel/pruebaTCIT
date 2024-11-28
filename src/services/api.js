import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const createPost = async (post) => {
  const response = await api.post('/posts', post);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};

export const updatePost = async (id, updatedPost) => {
  const response = await api.put(`/posts/${id}`, updatedPost);
  return response.data;
};