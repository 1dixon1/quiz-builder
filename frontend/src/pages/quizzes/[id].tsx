import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getQuizById } from '../../services/api';

export default function QuizDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [quiz, setQuiz] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getQuizById(id as string).then((res) => setQuiz(res.data));
    }
  }, [id]);

  if (!quiz) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
      <ul className="space-y-4">
        {quiz.questions.map((q: any, idx: number) => (
          <li key={q.id} className="border p-4 rounded bg-white">
            <p className="font-semibold mb-2">
              {idx + 1}. {q.text} <span className="text-sm text-gray-500">[{q.type}]</span>
            </p>
            {q.type === 'checkbox' && (
              <ul className="ml-4 list-disc">
                {q.options.map((opt: string, i: number) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
            )}
            {q.type === 'input' && (
              <p className="italic text-sm text-gray-700">Answer: {q.correctAnswer}</p>
            )}
            {q.type === 'boolean' && (
              <p className="italic text-sm text-gray-700">Answer: {q.correctAnswer ? 'True' : 'False'}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
