import axios from 'axios'
import type { Quiz } from '../../types'

const API_URL = 'http://localhost:4000'

export const getQuizzes = () => axios.get(`${API_URL}/quizzes`)
export const getQuizById = (id: string) => axios.get(`${API_URL}/quizzes/${id}`)
export const createQuiz = (quiz: Quiz) => axios.post(`${API_URL}/quizzes`, quiz)
export const deleteQuiz = (id: number) => axios.delete(`${API_URL}/quizzes/${id}`)
