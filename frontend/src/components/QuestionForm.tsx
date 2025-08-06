import { useForm, useFieldArray } from 'react-hook-form';

export const defaultQuestion = {
  text: '',
  type: 'boolean',
  options: [],
  correctAnswer: '',
};

export const QuestionForm = ({ register, control, index, remove, watch }: any) => {
  const type = watch(`questions.${index}.type`);

  return (
    <div className="border p-4 my-2 bg-white rounded shadow">
      <input
        {...register(`questions.${index}.text`, { required: true })}
        placeholder="Question text"
        className="w-full border px-2 py-1 mb-2"
      />
      <select {...register(`questions.${index}.type`)} className="w-full mb-2">
        <option value="boolean">Boolean</option>
        <option value="input">Input</option>
        <option value="checkbox">Checkbox</option>
      </select>

      {type === 'checkbox' && (
        <>
          {[0, 1, 2].map((i) => (
            <input
              key={i}
              {...register(`questions.${index}.options.${i}`)}
              placeholder={`Option ${i + 1}`}
              className="w-full mb-1 border px-2 py-1"
            />
          ))}
          <input
            {...register(`questions.${index}.correctAnswer`)}
            placeholder="Correct options (comma-separated)"
            className="w-full border px-2 py-1"
          />
        </>
      )}

      {type === 'boolean' && (
        <select {...register(`questions.${index}.correctAnswer`)} className="w-full">
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      )}

      {type === 'input' && (
        <input
          {...register(`questions.${index}.correctAnswer`)}
          placeholder="Correct answer"
          className="w-full border px-2 py-1"
        />
      )}

      <button type="button" onClick={() => remove(index)} className="text-red-600 mt-2">
        ❌ Remove Question
      </button>
    </div>
  );
};
