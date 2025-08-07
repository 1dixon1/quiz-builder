import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuizById } from '../services/api'
import type { Quiz, Question } from '../../types'

const QuizDetail = () => {
  const { id } = useParams()
  const [quiz, setQuiz] = useState<Quiz | null>(null)

  useEffect(() => {
    getQuizById(id!).then(res => setQuiz(res.data))
  }, [id])

  if (!quiz) return <p>Loading...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
      {quiz.questions.map((q: Question, i: number) => (
        <div key={i} className="mb-4 border p-2">
          <p><strong>{q.text}</strong> ({q.type})</p>
          <p className="text-sm text-gray-600">Answer: {JSON.stringify(q.correctAnswer)}</p>
        </div>
      ))}
    </div>
  )
}

export default QuizDetail
