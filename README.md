# Quiz Builder – Getting Started

## 1. Start the Backend

```bash
cd backend
npm install
npm run dev
```
- The backend will start on [http://localhost:4000](http://localhost:4000) by default.

## 2. Set Up the Database

- The backend uses SQLite and will automatically create a `database.sqlite` file in the `backend` folder on first run.
- No manual setup is required. Models and tables are created automatically via Sequelize.

## 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```
- The frontend will start on [http://localhost:5173](http://localhost:5173) by default.

## 4. Create a Sample Quiz

1. Open [http://localhost:5173](http://localhost:5173) in your browser.
2. Click "Create Quiz".
3. Enter a quiz title.
4. Add questions:
   - For **Boolean**: select type "Boolean", enter question text, and choose the correct answer (True/False).
   - For **Input**: select type "Input", enter question text, and specify the correct answer as text.
   - For **Checkbox**: select type "Checkbox", enter question text, provide options (comma-separated), and specify correct answers (comma-separated).
5. Click "Submit Quiz".
6. Your quiz will appear in the "View Quizzes" section.


