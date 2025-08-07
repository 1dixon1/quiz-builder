import { useEffect, useState } from 'react'
import { getQuizzes, deleteQuiz } from '../services/api'
import { Link } from 'react-router-dom'
import type { Quiz } from '../../types'

const QuizList = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])

  const load = async () => {
    const res = await getQuizzes()
    setQuizzes(res.data)
  }

  const remove = async (id: number) => {
    await deleteQuiz(id)
    load()
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Quizzes</h1>
      {quizzes.map(q => (
        <div key={q.id} className="border p-4 mb-2 flex justify-between items-center">
          <Link to={`/quizzes/${q.id}`} className="text-lg text-blue-600">
            {q.title} ({q.questions?.length ?? 0} questions)
          </Link>
          <button onClick={() => q.id !== undefined && remove(q.id)} className="text-red-500">🗑️</button>
        </div>
      ))}
    </div>
  )
}

export default QuizList
