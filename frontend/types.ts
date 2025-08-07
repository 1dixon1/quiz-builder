export type QuestionType = 'boolean' | 'input' | 'checkbox'

export interface Question {
  text: string
  type: QuestionType
  options?: string[]
  correctAnswer: string | boolean | string[]
}

export interface Quiz {
  id?: number
  title: string
  questions: Question[]
}
