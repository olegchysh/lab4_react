import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [systemData, setSystemData] = useState({ os: '', browser: '' });

  useEffect(() => {
    const info = { os: navigator.platform, browser: navigator.userAgent };
    localStorage.setItem('systemInfo', JSON.stringify(info));
    setSystemData(info);
  }, []);

  return (
    <footer className="mt-20 border-t border-slate-200 py-10 text-center dark:border-slate-800">
      <p className="text-slate-600 mb-4 font-medium dark:text-slate-500"> 2026 Stepan — Cybersecurity Student</p>
      <div className="inline-flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-200 bg-white/70 text-[10px] text-slate-600 font-mono backdrop-blur dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-500">
        <p><strong>OS:</strong> {systemData.os}</p>
        <p className="max-w-xs truncate"><strong>Agent:</strong> {systemData.browser}</p>
      </div>
    </footer>
  );
};
export default Footer;