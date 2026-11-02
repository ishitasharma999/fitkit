import axios from 'axios';

// Base URL comes from client/.env (REACT_APP_API_URL); falls back to the local server.
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

// Turn an axios error into the list of messages the server sent, or a generic one.
export function errorMessages(err) {
  const errors = err?.response?.data?.errors;
  if (Array.isArray(errors) && errors.length) return errors;
  if (err?.message === 'Network Error') return ['Cannot reach the API. Is the server running?'];
  return ['Something went wrong. Please try again.'];
}

export const getUsers = () => api.get('/api/users').then((r) => r.data);
export const createUser = (data) => api.post('/api/users', data).then((r) => r.data);
export const getExercises = () => api.get('/api/exercises').then((r) => r.data);
export const createExercise = (data) => api.post('/api/exercises', data).then((r) => r.data);
export const deleteExercise = (id) => api.delete(`/api/exercises/${id}`).then((r) => r.data);

export default api;
