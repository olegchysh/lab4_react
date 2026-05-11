import React, { useState, useEffect } from 'react';

const Reviews = () => {
  // Використовуємо useState для збереження списку коментарів [cite: 136]
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Використовуємо useEffect для отримання даних при монтуванні компонента [cite: 134]
    fetch('https://jsonplaceholder.typicode.com/posts/19/comments') // Твій 19-й варіант [cite: 135]
      .then(response => response.json())
      .then(data => {
        setComments(data); // Зберігаємо отримані дані у стан [cite: 136]
      })
      .catch(error => console.error('Помилка завантаження:', error));
  }, []); // Порожній масив означає "запустити один раз" [cite: 114]

  return (
    <section className="max-w-4xl mx-auto my-8">
      <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40">
        <h2 className="text-2xl font-bold text-slate-900 mb-5 dark:text-slate-100">Відгуки попередніх роботодавців (Варіант 19)</h2>

        <div className="grid gap-4">
          {/* Використовуємо метод map() для створення списку карток [cite: 137] */}
          {comments.map(comment => (
            <article
              key={comment.id}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-950/40"
            >
              <h4 className="font-semibold text-slate-900 capitalize mb-2 dark:text-slate-100">{comment.name}</h4>
              <p className="text-slate-700 italic leading-relaxed dark:text-slate-300">"{comment.body}"</p>
              <p className="mt-3 text-xs text-slate-500">Email: {comment.email}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;