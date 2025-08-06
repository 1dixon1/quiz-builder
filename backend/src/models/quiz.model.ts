import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface QuizAttributes {
  id?: number;
  title: string;
}

export const QuizFactory = (sequelize: Sequelize) => {
  return sequelize.define<Model<QuizAttributes>>('Quiz', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
