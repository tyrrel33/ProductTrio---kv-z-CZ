
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center bg-slate-800 p-8 rounded-xl shadow-2xl animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">Kvíz: Continuous Discovery Habits</h1>
      <p className="text-slate-300 text-lg mb-8">
        Otestujte své znalosti o Stromu příležitostí a produktovém triu.
      </p>
      <button
        onClick={onStart}
        className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Spustit kvíz
      </button>
    </div>
  );
};

export default StartScreen;
