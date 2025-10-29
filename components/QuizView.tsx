
import React from 'react';
import { Question } from '../types';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

interface QuizViewProps {
  questions: Question[];
  currentQuestionIndex: number;
  onAnswerSelected: (isCorrect: boolean) => void;
  onNextQuestion: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ questions, currentQuestionIndex, onAnswerSelected, onNextQuestion }) => {
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  return (
    <div className="w-full animate-fade-in">
      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
      <div className="mt-4 text-center text-slate-400">
        Otázka {currentQuestionIndex + 1} z {totalQuestions}
      </div>
      <QuestionCard
        key={currentQuestionIndex}
        question={currentQuestion}
        onAnswerSelected={onAnswerSelected}
        onNextQuestion={onNextQuestion}
      />
    </div>
  );
};

export default QuizView;
