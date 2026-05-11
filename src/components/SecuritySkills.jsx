import React from 'react';

const SecuritySkills = () => {
  const groups = [
    { title: "Мережева безпека", skills: ["Wireshark", "Nmap", "TCP/IP", "Firewall", "VPN"] },
    { title: "Penetration Testing", skills: ["Metasploit", "Burp Suite", "OWASP ZAP", "SQLMap"] },
    { title: "OSINT & Розвідка", skills: ["Maltego", "theHarvester", "Shodan", "Google Dorks"] },
    { title: "Програмування", skills: ["Python", "Bash", "JavaScript", "PowerShell"] },
    { title: "Криптографія та Forensics", skills: ["AES", "RSA", "Digital Forensics", "Linux (Kali)"] },
  ];

  return (
    <section>
      <h2 className="text-5xl font-bold mb-4">Кібербезпека</h2>
      <p className="text-xl text-slate-400 mb-12">Практичні навички, які я активно розвиваю</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {groups.map((group, i) => (
          <div key={i} className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8 hover:border-blue-500 transition-all group">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, idx) => (
                <span key={idx} className="px-6 py-3 bg-slate-800 rounded-2xl text-sm hover:bg-blue-600 hover:scale-105 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySkills;