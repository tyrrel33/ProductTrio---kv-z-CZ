
export interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}

export interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
  explanation: string;
}
