function Education() {
  return (
    <section className="max-w-4xl mx-auto my-8">
      <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 dark:text-slate-100">
          🎓 Освіта
        </h2>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-950/40">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">Національний університет “Львівська політехніка”</p>
              <p className="text-slate-600 dark:text-slate-400">Кібербезпека та захист інформації</p>
            </div>
            <p className="text-sm text-slate-500 sm:text-right">2023 — дотепер</p>
          </div>

          <div className="mt-4 grid gap-2 text-slate-700 dark:text-slate-300">
            <p>
              <span className="text-slate-500 dark:text-slate-400">Фокус:</span> Web security, OSINT, мережі, базова криптографія, форензика.
            </p>
            <p>
              <span className="text-slate-500 dark:text-slate-400">Практика:</span> лабораторні роботи на React, робота з API, Git/GitHub.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
export default Education;