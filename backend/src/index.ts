import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import quizRoutes from './routes/quiz.routes';
import { sequelize } from './models';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', quizRoutes);

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Backend running on http://localhost:${PORT}`);
  });
});
