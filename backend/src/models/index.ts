import { Sequelize } from 'sequelize';
import { QuizFactory } from './quiz.model';
import { QuestionFactory } from './question.model';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const Quiz = QuizFactory(sequelize);
const Question = QuestionFactory(sequelize);

// Associations
Quiz.hasMany(Question, { as: 'questions', foreignKey: 'quizId', onDelete: 'CASCADE' });
Question.belongsTo(Quiz, { foreignKey: 'quizId' });

export { sequelize, Quiz, Question };
