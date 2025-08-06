import Link from 'next/link';
import { getAllQuizzes, deleteQuiz } from '../../services/api';
import { useEffect, useState } from 'react';

export default function QuizListPage() {
  const [quizzes, setQuizzes] = useState<any[]>([]);

  const fetchData = async () => {
    const res = await getAllQuizzes();
    setQuizzes(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteQuiz(id.toString());
    fetchData();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Quizzes</h1>
      <Link href="/create" className="text-blue-500 underline mb-4 inline-block">+ Create Quiz</Link>
      <ul className="space-y-3">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="border p-4 rounded bg-white flex justify-between items-center">
            <Link href={`/quizzes/${quiz.id}`}>
              <div>
                <p className="font-semibold">{quiz.title}</p>
                <p className="text-sm text-gray-600">{quiz.questionCount} questions</p>
              </div>
            </Link>
            <button onClick={() => handleDelete(quiz.id)} className="text-red-500">🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
