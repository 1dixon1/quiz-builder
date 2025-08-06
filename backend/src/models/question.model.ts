import { Sequelize, DataTypes, Model } from 'sequelize';

interface QuestionAttributes {
  id?: number;
  text: string;
  type: 'boolean' | 'input' | 'checkbox';
  options?: string[]; // only for checkbox
  correctAnswer: string | string[];
  quizId: number;
}

export const QuestionFactory = (sequelize: Sequelize) => {
  return sequelize.define<Model<QuestionAttributes>>('Question', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('boolean', 'input', 'checkbox'),
      allowNull: false,
    },
    options: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    correctAnswer: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
