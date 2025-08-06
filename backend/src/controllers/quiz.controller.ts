import { Request, Response } from 'express';
import { Quiz, Question } from '../models';

export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { title, questions } = req.body;

    const quiz = await Quiz.create({ title });

    const createdQuestions = await Promise.all(
      questions.map((q: any) =>
        Question.create({ ...q, quizId: quiz.getDataValue('id') })
      )
    );

    res.status(201).json({ quiz, questions: createdQuestions });
  } catch (err: any) {
    console.error('❌ Error creating quiz:', err); // 🔥 важливо
    res.status(500).json({ error: 'Error creating quiz' });
  }
};


export const getAllQuizzes = async (_: Request, res: Response) => {
  const quizzes = await Quiz.findAll({ include: [{ model: Question, as: 'questions' }] });
  res.json(
    quizzes.map((q: any) => ({
      id: q.id,
      title: q.title,
      questionCount: q.questions?.length ?? 0,
    }))
  );
};

export const getQuizById = async (req: Request, res: Response) => {
  const quiz = await Quiz.findByPk(req.params.id, { include: [{ model: Question, as: 'questions' }] });
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
  res.json(quiz);
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const deleted = await Quiz.destroy({ where: { id: req.params.id } });
  if (!deleted) return res.status(404).json({ error: 'Quiz not found' });
  res.json({ success: true });
};
