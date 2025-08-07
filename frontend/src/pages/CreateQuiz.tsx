import { useState } from 'react'
import { createQuiz } from '../services/api'
import type { Question } from '../../types'
import QuestionForm from '../components/QuestionForm'

const CreateQuiz = () => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState<Question[]>([])

  const addQuestion = () => {
    setQuestions([...questions, { text: '', type: 'input', correctAnswer: '' }])
  }

  const updateQuestion = (i: number, updated: Question) => {
    const copy = [...questions]
    copy[i] = updated
    setQuestions(copy)
  }

  const removeQuestion = (i: number) => {
    setQuestions(questions.filter((_, index) => index !== i))
  }

  const handleSubmit = async () => {
    if (!title || questions.length === 0) return alert('Add title and questions')
    await createQuiz({ title, questions })
    alert('Quiz created!')
    setTitle('')
    setQuestions([])
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Create Quiz</h1>
      <input
        className="w-full p-3 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Quiz title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <div className="space-y-6 mb-6">
        {questions.map((q, i) => (
          <QuestionForm
            key={i}
            question={q}
            index={i}
            onChange={updateQuestion}
            onRemove={removeQuestion}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow transition"
          onClick={addQuestion}
        >
          + Add Question
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md shadow transition"
          onClick={handleSubmit}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  )
}

export default CreateQuiz
