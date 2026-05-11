// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="pt-24 pb-16 text-center">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-white/10 dark:text-slate-200">
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium">Open to opportunities</span>
      </div>

      <h1 className="text-6xl md:text-7xl font-bold mb-4">
        Степан Ткачишин
      </h1>
      <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-6">
        Студент Кібербезпеки • Майбутній Security Engineer
      </p>

      <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
        Цікавлюсь захистом інформації, penetration testing, OSINT та цифровою форензикою. 
        Активно розвиваю практичні навички в сфері інформаційної безпеки.
      </p>
    </header>
  );
};

export default Header;


