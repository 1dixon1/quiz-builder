import type { Question, QuestionType } from '../../types'

interface Props {
  question: Question
  index: number
  onChange: (index: number, updated: Question) => void
  onRemove: (index: number) => void
}

const QuestionForm = ({ question, index, onChange, onRemove }: Props) => {
  const handleField = (field: keyof Question, value: string | boolean | string[]) => {
    onChange(index, { ...question, [field]: value })
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as QuestionType;
    let newCorrectAnswer: string | boolean | string[] = '';
    if (newType === 'boolean') newCorrectAnswer = false;
    else if (newType === 'checkbox') newCorrectAnswer = [];
    onChange(index, { ...question, type: newType, correctAnswer: newCorrectAnswer });
  }

  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full p-2 border mb-2"
        placeholder="Question text"
        value={question.text}
        onChange={e => handleField('text', e.target.value)}
      />
      <select
        className="w-full p-2 border mb-2"
        value={question.type}
        onChange={handleTypeChange}
      >
        <option value="boolean">Boolean</option>
        <option value="input">Input</option>
        <option value="checkbox">Checkbox</option>
      </select>

      {question.type === 'checkbox' && (
        <>
          <input
            type="text"
            className="w-full p-2 border mb-2"
            placeholder="Comma-separated options"
            onChange={e => handleField('options', e.target.value.split(','))}
          />
          <input
            type="text"
            className="w-full p-2 border mb-2"
            placeholder="Comma-separated correct answers"
            onChange={e => handleField('correctAnswer', e.target.value.split(','))}
          />
        </>
      )}

      {question.type === 'boolean' && (
        <select
          className="w-full p-2 border"
          value={String(question.correctAnswer)}
          onChange={e => handleField('correctAnswer', e.target.value === 'true')}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      )}

      {question.type === 'input' && (
        <input
          type="text"
          className="w-full p-2 border"
          placeholder="Correct answer"
          value={question.correctAnswer as string}
          onChange={e => handleField('correctAnswer', e.target.value)}
        />
      )}

      <button className="text-red-500 mt-2" onClick={() => onRemove(index)}>
        Remove
      </button>
    </div>
  )
}

export default QuestionForm
