function Skills() {
  const skillGroups = [
    {
      title: 'Security',
      items: ['OSINT', 'Web security basics (OWASP)', 'Threat modeling basics', 'Network basics'],
    },
    {
      title: 'Tools',
      items: ['Git / GitHub', 'Linux CLI', 'Burp Suite (basic)', 'Wireshark (basic)'],
    },
    {
      title: 'Programming',
      items: ['Python basics', 'JavaScript / React', 'REST API / fetch', 'HTML / CSS'],
    },
  ];

  const badgeClassName =
    'inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-white transition-colors dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200 dark:hover:bg-slate-950/50';

  return (
    <section className="max-w-4xl mx-auto my-8">
      <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40">
        <h2 className="text-2xl font-bold text-slate-900 mb-5 dark:text-slate-100">🛠 Навички</h2>

        <div className="grid gap-4">
          {skillGroups.map(group => (
            <div key={group.title} className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-950/40">
              <p className="text-sm font-semibold text-slate-600 mb-3 dark:text-slate-300">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className={badgeClassName}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills