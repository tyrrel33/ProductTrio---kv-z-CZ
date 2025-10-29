
import React from 'react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultMessage = () => {
    if (percentage === 100) {
      return "Perfektní! Jste expert na Continuous Discovery.";
    } else if (percentage >= 75) {
      return "Skvělá práce! Máte velmi dobré znalosti.";
    } else if (percentage >= 50) {
      return "Dobrý výsledek! Ještě je pár věcí k prozkoumání.";
    } else {
      return "Je tu prostor pro zlepšení. Doporučujeme přečíst knihu!";
    }
  };

  return (
    <div className="text-center bg-slate-800 p-8 rounded-xl shadow-2xl animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">Výsledky kvízu</h1>
      <p className="text-slate-300 text-2xl mb-2">
        Vaše skóre:
      </p>
      <p className="text-6xl font-bold text-white my-4">
        {score} / {totalQuestions}
      </p>
      <p className="text-cyan-300 text-xl font-semibold mb-8">
        ({percentage}%)
      </p>
      <p className="text-slate-200 text-lg mb-8">{getResultMessage()}</p>
      <button
        onClick={onRestart}
        className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Zkusit znovu
      </button>
    </div>
  );
};

export default ResultsScreen;
