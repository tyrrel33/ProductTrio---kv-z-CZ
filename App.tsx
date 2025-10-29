import React, { useState, useCallback } from 'react';
import { ALL_QUIZ_QUESTIONS } from './data/quizData';
import { Question } from './types';
import StartScreen from './components/StartScreen';
import QuizView from './components/QuizView';
import ResultsScreen from './components/ResultsScreen';

const QUIZ_LENGTH = 8;

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleStartQuiz = useCallback(() => {
    const shuffled = [...ALL_QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
    setSessionQuestions(shuffled.slice(0, QUIZ_LENGTH));
    setQuizStarted(true);
  }, []);

  const handleAnswerSelected = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  }, []);

  const handleNextQuestion = useCallback(() => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < QUIZ_LENGTH) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResults(true);
    }
  }, [currentQuestionIndex]);

  const handleRestartQuiz = useCallback(() => {
    setQuizStarted(false);
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSessionQuestions([]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-900 font-sans">
      <main className="w-full max-w-2xl mx-auto">
        {!quizStarted ? (
          <StartScreen onStart={handleStartQuiz} />
        ) : !showResults ? (
          <QuizView
            questions={sessionQuestions}
            currentQuestionIndex={currentQuestionIndex}
            onAnswerSelected={handleAnswerSelected}
            onNextQuestion={handleNextQuestion}
          />
        ) : (
          <ResultsScreen 
            score={score} 
            totalQuestions={QUIZ_LENGTH} 
            onRestart={handleRestartQuiz} 
          />
        )}
      </main>
      <footer className="text-center mt-8 text-slate-500 text-sm">
        <p>Inspirováno knihou "Continuous Discovery Habits" od Teresy Torres.</p>
      </footer>
    </div>
  );
};

export default App;
