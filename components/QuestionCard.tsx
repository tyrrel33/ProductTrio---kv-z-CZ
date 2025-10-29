
import React, { useState, useEffect, useCallback } from 'react';
import { Question, AnswerOption } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

interface QuestionCardProps {
  question: Question;
  onAnswerSelected: (isCorrect: boolean) => void;
  onNextQuestion: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswerSelected, onNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerOption | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  useEffect(() => {
    // This callback is memoized, so it's safe to call onAnswerSelected here.
    if (isAnswered && selectedAnswer) {
      onAnswerSelected(selectedAnswer.isCorrect);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered, selectedAnswer]);

  const handleAnswerClick = useCallback((answer: AnswerOption) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
  }, [isAnswered]);
  
  const getButtonClass = (answer: AnswerOption) => {
    if (!isAnswered) {
      return 'bg-slate-700 hover:bg-slate-600';
    }
    if (answer.isCorrect) {
      return 'bg-green-700 border-green-500';
    }
    if (answer === selectedAnswer && !answer.isCorrect) {
      return 'bg-red-700 border-red-500';
    }
    return 'bg-slate-700 opacity-60';
  };

  return (
    <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-2xl mt-4 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-6">{question.questionText}</h2>
      <div className="space-y-4">
        {question.answerOptions.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border-2 border-transparent transition-all duration-300 flex items-center justify-between ${getButtonClass(answer)} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <span className="flex-grow">{answer.answerText}</span>
            {isAnswered && answer.isCorrect && <CheckIcon />}
            {isAnswered && answer === selectedAnswer && !answer.isCorrect && <XIcon />}
          </button>
        ))}
      </div>
      {isAnswered && (
        <div className="mt-6 p-4 bg-slate-900/50 rounded-lg animate-fade-in">
          <h3 className="font-bold text-cyan-400 mb-2">Vysvětlení:</h3>
          <p className="text-slate-300">{question.explanation}</p>
          <button
            onClick={onNextQuestion}
            className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Další otázka
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
