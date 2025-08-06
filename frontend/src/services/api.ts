import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/',
});

export const createQuiz = (data: any) => API.post('/quizzes', data);
export const getAllQuizzes = () => API.get('/quizzes');
export const getQuizById = (id: string) => API.get(`/quizzes/${id}`);
export const deleteQuiz = (id: string) => API.delete(`/quizzes/${id}`);
