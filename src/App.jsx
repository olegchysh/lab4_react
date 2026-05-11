import React, { useEffect, useState } from 'react';

import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Skills from './components/Skills';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      return;
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_45%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.12),transparent_45%)]" />

      <div className="relative">
        <button
          type="button"
          onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
          className="fixed top-5 right-5 z-[1001] rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg backdrop-blur hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
        >
          Тема: {theme}
        </button>

        <Header />

        <main className="mx-auto w-full max-w-6xl px-4 pb-16">
          <Education />
          <Skills />
          <Reviews />
          <Contacts />
        </main>

        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
