import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import CreateQuiz from './pages/CreateQuiz'
import QuizList from './pages/QuizList'
import QuizDetail from './pages/QuizDetail'

function App() {
  return (
    <Router>
      <div className="p-4 w-full h-screen flex flex-col items-center justify-center min-h-screen">
        <nav className="flex gap-4 mb-4">
          <Link to="/create" className="text-blue-500">Create Quiz</Link>
          <Link to="/quizzes" className="text-blue-500">View Quizzes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/quizzes" replace />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quizzes/:id" element={<QuizDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
