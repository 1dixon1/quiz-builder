import { useForm, useFieldArray } from 'react-hook-form';
import { createQuiz } from '../services/api';
import { QuestionForm } from '../components/QuestionForm';
type QuestionType = 'boolean' | 'input' | 'checkbox';

interface Question {
  text: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: string | string[] | boolean;
}

interface QuizFormValues {
  title: string;
  questions: Question[];
}

export default function CreatePage() {


  const { register, handleSubmit, control, watch, reset } = useForm<QuizFormValues>({
    defaultValues: {
      title: '',
      questions: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',    
  });

  const onSubmit = async (data: any) => {
    const formatted = {
      title: data.title,
      questions: data.questions.map((q: any) => ({
        text: q.text,
        type: q.type,
        options: q.type === 'checkbox' ? q.options : undefined,
        correctAnswer:
          q.type === 'checkbox'
            ? q.correctAnswer.split(',').map((s: string) => s.trim())
            : q.type === 'boolean'
            ? q.correctAnswer === 'true'
            : q.correctAnswer,
      })),
    };

    await createQuiz(formatted);
    alert('Quiz created!');
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create a Quiz</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('title', { required: true })}
          placeholder="Quiz Title"
          className="w-full border mb-4 px-3 py-2"
        />

        {fields.map((field, index) => (
          <QuestionForm
            key={field.id}
            register={register}
            control={control}
            index={index}
            remove={remove}
            watch={watch}
          />
        ))}

        <button
          type="button"
          onClick={() => append({ text: '', type: 'boolean', options: [], correctAnswer: '' })}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          ➕ Add Question
        </button>

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          ✅ Create Quiz
        </button>
      </form>
    </div>
  );
}
