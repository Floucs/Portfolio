import React, { useState } from 'react';
import { motion } from 'motion/react';
import { siteData } from '../data';
import { Language, Theme } from '../types';
import ProjectImage from '../components/ProjectImage';
import { 
  GraduationCap, Award, Briefcase, Calendar, Zap, Terminal, Globe, 
  ChevronRight, ArrowUpRight, Mail, Linkedin, 
  Sparkles, User, BookOpen, Laptop, Send, Heart, Code
} from 'lucide-react';

export default function PortfolioLayout({ language, theme }: { language: Language, theme: Theme }) {
  const isDe = language === 'de';
  const data = siteData;
  const isLight = theme === 'light';

  // Contact States
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSent(true);
    setTimeout(() => {
      setEmail('');
      setMessage('');
      setSent(false);
    }, 3000);
  };

  // SVG Avatars for pixel-perfect display without broken placeholders
  const renderHeroAvatar = () => {
    const c = isLight ? '#2563eb' : '#08b6d4';
    const dim = isLight ? '#93c5fd' : '#164e63';
    const bg = isLight ? '#eff6ff' : '#0b1527';
    const nodes = [
      { cx: 100, cy: 100, r: 8, delay: '0s' },
      { cx: 40,  cy: 60,  r: 5, delay: '0.4s' },
      { cx: 160, cy: 55,  r: 5, delay: '0.8s' },
      { cx: 165, cy: 145, r: 5, delay: '0.2s' },
      { cx: 35,  cy: 150, r: 5, delay: '1.0s' },
      { cx: 100, cy: 20,  r: 4, delay: '0.6s' },
      { cx: 180, cy: 100, r: 4, delay: '1.2s' },
      { cx: 20,  cy: 100, r: 4, delay: '0.9s' },
      { cx: 100, cy: 180, r: 4, delay: '0.3s' },
      { cx: 68,  cy: 38,  r: 3, delay: '1.4s' },
      { cx: 132, cy: 38,  r: 3, delay: '0.7s' },
      { cx: 148, cy: 170, r: 3, delay: '1.1s' },
      { cx: 52,  cy: 170, r: 3, delay: '0.5s' },
    ];
    const edges = [
      [0,1],[0,2],[0,3],[0,4],
      [1,5],[2,5],[2,6],[3,6],[3,8],[4,8],[4,7],
      [1,9],[2,10],[3,11],[4,12],[1,7],[2,7],
    ];
    return (
      <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
        <div className={`absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse`}
          style={{ background: isLight ? 'radial-gradient(circle, #93c5fd, #e0f2fe)' : 'radial-gradient(circle, #0e7490, #0b1527)' }} />
        <div className="absolute inset-2 rounded-full overflow-hidden flex items-center justify-center"
          style={{ background: bg, border: `1.5px solid ${dim}` }}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {edges.map(([a, b], i) => (
              <line key={i}
                x1={nodes[a].cx} y1={nodes[a].cy}
                x2={nodes[b].cx} y2={nodes[b].cy}
                stroke={dim} strokeWidth="1.2" strokeDasharray="4 3"
                opacity="0.7"
              />
            ))}
            {nodes.map((n, i) => (
              <g key={i}>
                <circle cx={n.cx} cy={n.cy} r={n.r * 3} fill={c} opacity="0.08">
                  <animate attributeName="r" values={`${n.r*2};${n.r*4};${n.r*2}`} dur="2.5s" begin={n.delay} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.08;0.18;0.08" dur="2.5s" begin={n.delay} repeatCount="indefinite" />
                </circle>
                <circle cx={n.cx} cy={n.cy} r={n.r} fill={c} opacity="0.9" />
              </g>
            ))}
            <circle cx="100" cy="100" r="8" fill={c}>
              <animate attributeName="r" values="8;11;8" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="100" y="104" textAnchor="middle" fontSize="7" fill={bg} fontFamily="monospace" fontWeight="bold">AI</text>
          </svg>
        </div>
      </div>
    );
  };

  const renderGradAvatar = () => (
    <div className="relative w-64 h-64 mx-auto">
      <div className={`absolute inset-0 rounded-[30px] opacity-40 blur-lg animate-pulse ${
        isLight ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-cyan-500 to-emerald-500'
      }`} />
      <div className={`absolute inset-1 border-2 rounded-3xl overflow-hidden flex items-center justify-center ${
        isLight ? 'bg-white border-blue-500 shadow-sm' : 'bg-[#0f172a] border-cyan-400'
      }`}>
        <svg viewBox="0 0 200 200" className={`w-[85%] h-[85%] animate-bounce-slow ${isLight ? 'text-blue-600' : 'text-cyan-400'}`} fill="currentColor">
          {/* Body */}
          <path d="M60,180 L140,180 L130,135 L70,135 Z" fill={isLight ? "#2563eb" : "#08b6d4"} />
          <path d="M85,135 L115,135 L100,160 Z" fill={isLight ? "#1e293b" : "#ffffff"} />
          {/* Head & Glasses */}
          <circle cx="100" cy="100" r="34" fill={isLight ? "#f8fafc" : "#1e293b"} stroke={isLight ? "#2563eb" : "#08b6d4"} strokeWidth="3" />
          <circle cx="86" cy="100" r="11" fill="none" stroke={isLight ? "#1e293b" : "#ffffff"} strokeWidth="3" />
          <circle cx="114" cy="100" r="11" fill="none" stroke={isLight ? "#1e293b" : "#ffffff"} strokeWidth="3" />
          <line x1="97" y1="100" x2="103" y2="100" stroke={isLight ? "#1e293b" : "#ffffff"} strokeWidth="3" />
          <circle cx="86" cy="100" r="3" fill={isLight ? "#2563eb" : "#08b6d4"} />
          <circle cx="114" cy="100" r="3" fill={isLight ? "#2563eb" : "#08b6d4"} />
          {/* Graduation Hat */}
          <polygon points="100,45 155,62 100,79 45,62" fill={isLight ? "#f8fafc" : "#1e293b"} stroke={isLight ? "#2563eb" : "#08b6d4"} strokeWidth="3" />
          <rect x="88" y="65" width="24" height="12" fill={isLight ? "#f8fafc" : "#1e293b"} />
          {/* Cap Ribbon/Tassel */}
          <path d="M130,65 L145,80 L145,95" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
          {/* Waving Smile */}
          <path d="M92,112 Q100,120 108,112" fill="none" stroke={isLight ? "#1e293b" : "#ffffff"} strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className={`w-full font-sans transition-colors duration-700 ${
      isLight 
        ? 'text-slate-800 selection:bg-blue-200 selection:text-blue-900' 
        : 'text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200'
    }`}>
      
      {/* SECTION 1: HERO / ABOUT ME */}
      <section id="about" className="pt-24 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center relative">
        <div className="grid grid-cols-1 gap-12 items-center">

          {/* Hero text */}
          <div className="space-y-8 text-center lg:text-left max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs ${
              isLight 
                ? 'bg-blue-50 border border-blue-200 text-blue-600' 
                : 'bg-cyan-950/40 border border-cyan-800/50 text-cyan-400'
            }`}>
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>{isDe ? 'Generative KI & Organisation' : 'Generative AI & Change'}</span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              {isDe ? 'Hi, ich bin ' : "Hi, I'm "}<span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isLight 
                  ? 'from-blue-700 via-indigo-650 to-blue-600' 
                  : 'from-cyan-400 via-blue-400 to-indigo-400'
              }`}>{data.hero.name}</span> <span className="animate-wiggle inline-block">👋</span>
            </h1>
            
            <div className={`space-y-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>
              <p className={`font-semibold text-lg sm:text-xl ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                {isDe ? data.hero.description : data.hero.enDescription}
              </p>
              <p className={`text-sm sm:text-base border-l-4 pl-4 py-1.5 rounded-r-lg ${
                isLight 
                  ? 'border-blue-500 bg-blue-50/50 text-slate-700' 
                  : 'border-cyan-500/50 bg-cyan-950/10 text-slate-400'
              }`}>
                {isDe ? data.hero.about : data.hero.enAbout}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#contact" 
                className={`px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 transform hover:-translate-y-0.5 ${
                  isLight 
                    ? 'bg-blue-600 hover:bg-blue-550 text-white shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.4)]' 
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(8,182,212,0.4)] hover:shadow-[0_0_35px_rgba(8,182,212,0.6)]'
                }`}
              >
                <span>{isDe ? 'Kontakt aufnehmen' : 'Hire Me'}</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/florian-schorb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 transform hover:-translate-y-0.5 border-2 ${
                  isLight 
                    ? 'bg-white hover:bg-slate-50 text-blue-600 border-blue-200 hover:border-blue-400' 
                    : 'bg-[#0B1527]/80 hover:bg-slate-800/80 text-cyan-400 border-2 border-cyan-500/30 hover:border-cyan-400'
                }`}
              >
                <Linkedin className="w-4 h-4" />
                <span>{isDe ? 'LinkedIn Profil' : 'LinkedIn Profile'}</span>
              </a>
            </div>
          </div>


        </div>
      </section>

      {/* SECTION 2: EDUCATION (LEARNING PATH) */}
      <section id="education" className={`py-24 border-t transition-colors duration-700 ${
        isLight ? 'border-slate-200/80' : 'border-slate-900/40'
      } bg-transparent`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className={`font-mono text-xs uppercase tracking-widest ${
              isLight ? 'text-blue-600 font-bold' : 'text-cyan-400'
            }`}>{isDe ? 'Lernpfad' : 'Learning Path'}</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {isDe ? 'Ausbildung.' : 'Education.'}<span className={isLight ? 'text-blue-600' : 'text-cyan-500'}>.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Grad Boy Illustration */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              {renderGradAvatar()}
            </div>

            {/* Right details cards */}
            <div className="lg:col-span-7 space-y-6">
              {data.education && data.education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden group transition-all duration-300 ${
                    isLight 
                      ? 'bg-white border border-blue-100 shadow-[0_4px_24px_rgba(37,99,235,0.04)] hover:border-blue-400/50 hover:shadow-[0_4px_28px_rgba(37,99,235,0.08)]' 
                      : 'bg-[#091122] border border-cyan-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-cyan-500/30'
                  }`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl ${
                    isLight ? 'bg-blue-500/5' : 'bg-cyan-500/5'
                  }`} />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${
                        isLight 
                          ? 'bg-blue-50 border border-blue-200 text-blue-600' 
                          : 'bg-cyan-950/60 border border-cyan-500/20 text-cyan-400'
                      }`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                          {isDe ? edu.institution : edu.enInstitution}
                        </h3>
                        <p className={`text-xs sm:text-sm font-mono mt-0.5 ${isLight ? 'text-blue-600' : 'text-cyan-400'}`}>
                          {isDe ? `${edu.field} (${edu.degree})` : `${edu.enField} (${edu.enDegree})`}
                        </p>
                      </div>
                    </div>
                    <span className={`shrink-0 px-3 py-1 rounded-full font-mono text-xs self-start sm:self-center ${
                      isLight 
                        ? 'bg-blue-50 border border-blue-150 text-blue-600' 
                        : 'bg-cyan-950/80 border border-cyan-800/40 text-cyan-400'
                    }`}>
                      {isDe ? edu.timeline : edu.enTimeline}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed pl-2 border-l ${
                    isLight 
                      ? 'text-slate-600 border-blue-200' 
                      : 'text-slate-400 border-cyan-500/30'
                  }`}>
                    {isDe ? edu.description : edu.enDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CERTIFICATIONS */}
      <section id="certificates" className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center sm:text-left">
            <span className={`font-mono text-xs uppercase tracking-widest ${
              isLight ? 'text-blue-600 font-bold' : 'text-cyan-400'
            }`}>{isDe ? 'Erfolge' : 'Achievements'}</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {isDe ? 'Zertifikate.' : 'Certifications.'}<span className={isLight ? 'text-blue-600' : 'text-cyan-500'}>.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8">
            {data.certificates.map((cert, idx) => {
              return (
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  key={idx} 
                  className={`p-6 rounded-3xl relative shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer border ${
                    isLight 
                      ? 'bg-white border-blue-100 hover:border-blue-400/50 hover:shadow-[0_10px_35px_rgba(37,99,235,0.06)]' 
                      : 'bg-[#091122] border-cyan-900/30 hover:border-cyan-400/50'
                  }`}
                >
                  {/* Ribbon badge */}
                  <div className={`absolute top-0 right-6 transform -translate-y-1/2 w-10 h-10 rounded-2xl flex items-center justify-center font-bold shadow-lg ${
                    isLight 
                      ? 'bg-blue-600 text-white shadow-blue-500/25' 
                      : 'bg-cyan-500 text-slate-950 shadow-cyan-500/20'
                  }`}>
                    <cert.icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono border ${
                      isLight 
                        ? 'bg-blue-50 text-blue-650 border-blue-200' 
                        : 'bg-cyan-950/50 text-cyan-400 border-cyan-800/30'
                    }`}>
                      {cert.issuer}
                    </div>
                    
                    <h3 className={`text-lg font-bold transition-colors leading-snug ${
                      isLight 
                        ? 'text-slate-900 group-hover:text-blue-650' 
                        : 'text-white group-hover:text-cyan-300'
                    }`}>
                      {isDe ? cert.name : cert.enName}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed font-sans ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isDe ? cert.description : cert.enDescription}
                    </p>
                  </div>

                  <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold transition-colors ${
                    isLight 
                      ? 'border-slate-100 text-blue-600 hover:text-blue-700' 
                      : 'border-slate-800/50 text-cyan-400 group-hover:text-cyan-300'
                  }`}>
                    <span>{isDe ? 'Zertifikat ansehen' : 'View Certificate'}</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: TECHNICAL SKILLS & EXPERIENCE SIDE-BY-SIDE */}
      <section id="skills" className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Technical Skills Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className={`font-mono text-xs uppercase tracking-widest ${
                  isLight ? 'text-blue-600 font-bold' : 'text-cyan-400'
                }`}>{isDe ? 'Fähigkeiten & Interessen' : 'Skills & Interests'}</span>
                <h3 className={`text-3xl font-extrabold mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {isDe ? 'Kompetenzen.' : 'Competences.'}
                </h3>
              </div>

              {/* Categorized Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.skills.map((cat, idx) => (
                  <div 
                    key={idx} 
                    className={`p-5 rounded-3xl space-y-3 transition-all duration-300 border ${
                      isLight 
                        ? 'bg-white border-blue-100 hover:border-blue-350 shadow-[0_4px_20px_rgba(37,99,235,0.02)]' 
                        : 'bg-[#091122] border-cyan-900/30 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className={`font-bold flex items-center gap-2.5 text-[15px] pb-2 border-b ${
                      isLight ? 'text-slate-900 border-slate-100' : 'text-white border-cyan-950'
                    }`}>
                      <cat.icon className={`w-5 h-5 ${isLight ? 'text-blue-600' : 'text-cyan-400'}`} />
                      <span>{isDe ? cat.category : (cat.enCategory || cat.category)}</span>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                      {(isDe ? cat.items : (cat.enItems || cat.items)).map((item, idy) => (
                        <div key={idy} className={`flex items-start gap-2 text-xs font-sans ${isLight ? 'text-slate-650' : 'text-slate-300'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isLight ? 'bg-blue-500' : 'bg-cyan-400'}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Work Experience Column */}
            <div className="lg:col-span-6 space-y-10">
              <div>
                <span className={`font-mono text-xs uppercase tracking-widest ${
                  isLight ? 'text-blue-600 font-bold' : 'text-cyan-400'
                }`}>{isDe ? 'Stationen' : 'Experience'}</span>
                <h3 className={`text-3xl font-extrabold mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {isDe ? 'Berufserfahrung.' : 'Work Experience.'}
                </h3>
              </div>

              <div className="space-y-6">
                {data.experience.map((exp, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-3xl relative overflow-hidden group transition-all duration-300 border ${
                      isLight 
                        ? 'bg-white border-blue-100 hover:border-blue-300 shadow-[0_4px_24px_rgba(37,99,235,0.02)]' 
                        : 'bg-[#091122] border-cyan-900/30 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${
                          isLight 
                            ? 'bg-blue-50 border-blue-150 text-blue-600' 
                            : 'bg-cyan-950 text-cyan-400 border-cyan-800/20'
                        }`}>
                          <exp.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className={`text-base sm:text-lg font-bold transition-colors ${
                            isLight 
                              ? 'text-slate-900 group-hover:text-blue-650' 
                              : 'text-white group-hover:text-cyan-300'
                          }`}>
                            {isDe ? exp.role : exp.enRole}
                          </h4>
                          <p className={`text-xs font-mono font-bold ${isLight ? 'text-blue-600' : 'text-cyan-400'}`}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <span className={`inline-block px-3 py-1 mb-3 rounded-full text-xs font-mono border ${
                      isLight 
                        ? 'bg-blue-50 border-blue-200 text-blue-600' 
                        : 'bg-cyan-950 text-cyan-300 border border-cyan-800/30'
                    }`}>
                      {isDe ? exp.date : exp.enDate}
                    </span>

                    <p className={`text-sm leading-relaxed mt-1 pl-1 ${isLight ? 'text-slate-650' : 'text-slate-400'}`}>
                      {isDe ? exp.description : exp.enDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: PROJECTS */}
      <section id="projects" className={`py-24 border-t transition-colors duration-700 ${
        isLight ? 'border-slate-200/80' : 'border-slate-900/40'
      } bg-transparent`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center sm:text-left">
            <span className={`font-mono text-xs uppercase tracking-widest ${
              isLight ? 'text-blue-600 font-bold' : 'text-cyan-400'
            }`}>{isDe ? 'Kreativbörse' : 'Showroom'}</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {isDe ? 'Projekte.' : 'Projects.'}<span className={isLight ? 'text-blue-600' : 'text-cyan-500'}>.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map((proj, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-300 border ${
                  isLight 
                    ? 'bg-white border-blue-100 hover:border-blue-400/50 shadow-[0_15px_45px_rgba(37,99,235,0.025)]' 
                    : 'bg-[#091122] border-cyan-900/30 hover:border-cyan-500/30'
                }`}
              >
                {/* Project Showcase Core Image & Handlers */}
                <ProjectImage 
                  imagePath={proj.image} 
                  projectIdx={idx} 
                  fallbackIcon={proj.icon} 
                  tags={proj.tags} 
                  isDe={isDe}
                  status={isDe ? proj.status : proj.enStatus}
                  theme={theme}
                />

                {/* Content */}
                <div className={`p-6 sm:p-8 flex-grow flex flex-col justify-between ${isLight ? 'bg-white' : ''}`}>
                  <div className="space-y-3">
                    <h3 className={`text-xl font-bold transition-colors ${
                      isLight 
                        ? 'text-slate-900 group-hover:text-blue-650' 
                        : 'text-white group-hover:text-cyan-300'
                    }`}>
                      {isDe ? proj.title : proj.enTitle}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-650' : 'text-slate-400'}`}>
                      {isDe ? proj.description : proj.enDescription}
                    </p>
                  </div>

                  {proj.link ? (
                    <a 
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold cursor-pointer z-10 ${
                        isLight 
                          ? 'border-slate-100 text-blue-600 hover:text-blue-750' 
                          : 'border-slate-800/40 text-cyan-400 hover:text-cyan-300'
                      }`}
                    >
                      <span>{isDe ? 'GitHub Repository' : 'GitHub Repository'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-medium select-none ${
                      isLight 
                        ? 'border-slate-100 text-slate-500' 
                        : 'border-slate-800/40 text-slate-400'
                    }`}>
                      <span>{isDe ? proj.status : proj.enStatus}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT / LET'S CONNECT */}
      <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Contact column info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className={`font-mono text-xs uppercase tracking-widest ${
                  isLight ? 'text-blue-600 font-bold' : 'text-cyan-400'
                }`}>{isDe ? 'Direkter Kontakt' : 'Direct Line'}</span>
                <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {isDe ? 'Kontakt aufnehmen.' : "Let's Connect."}
                </h2>
              </div>

              <p className={`leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isDe 
                  ? 'Etwas hat Ihr Interesse geweckt? Lassen Sie uns in Kontakt treten — ich freue mich über Ihre Nachricht.'
                  : 'Did something catch your interest? Let’s get in touch — I look forward to hearing from you.'}
              </p>

              {/* Icon layout */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                    isLight 
                      ? 'bg-blue-50 border-blue-200 text-blue-600 shadow-sm' 
                      : 'bg-[#091122] border-cyan-900/30 text-cyan-400'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs uppercase font-mono tracking-wider ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>Email</span>
                    <a href="mailto:schorbf@gmail.com" className={`font-semibold transition-colors ${
                      isLight ? 'text-slate-800 hover:text-blue-650' : 'text-white hover:text-cyan-300'
                    }`}>
                      schorbf@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                    isLight 
                      ? 'bg-blue-50 border-blue-200 text-blue-600 shadow-sm' 
                      : 'bg-[#091122] border-cyan-900/30 text-cyan-400'
                  }`}>
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs uppercase font-mono tracking-wider ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>LinkedIn</span>
                    <a href="https://www.linkedin.com/in/florian-schorb/" target="_blank" rel="noopener noreferrer" className={`font-semibold transition-colors ${
                      isLight ? 'text-slate-800 hover:text-blue-650' : 'text-white hover:text-cyan-300'
                    }`}>
                      linkedin.com/in/florian-schorb
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form column */}
            <div className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl shadow-2xl transition-all border ${
              isLight 
                ? 'bg-white border-blue-100 shadow-[0_15px_50px_rgba(37,99,235,0.035)]' 
                : 'bg-[#091122] border-cyan-900/30'
            }`}>
              <form onSubmit={handleSend} className="space-y-6">
                <div>
                  <label className={`block text-xs uppercase font-mono tracking-wider mb-2 ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`} htmlFor="form-email">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="form-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full rounded-2xl px-5 py-4 text-sm focus:outline-none transition-colors border ${
                      isLight 
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white' 
                        : 'bg-slate-950 border-cyan-900/40 text-white focus:border-cyan-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs uppercase font-mono tracking-wider mb-2 ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`} htmlFor="form-message">
                    Message
                  </label>
                  <textarea 
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isDe ? 'Ihre Nachricht hier...' : 'Your Message here...'}
                    className={`w-full rounded-2xl px-5 py-4 text-sm focus:outline-none transition-colors resize-none border ${
                      isLight 
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white' 
                        : 'bg-slate-950 border-cyan-900/40 text-white focus:border-cyan-400'
                    }`}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={sent}
                  className={`w-full font-bold py-4 rounded-full transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 transform active:scale-95 duration-100 disabled:opacity-75 disabled:pointer-events-none ${
                    isLight 
                      ? 'bg-blue-600 hover:bg-blue-550 text-white shadow-[0_4px_15px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.45)]' 
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(8,182,212,0.3)] hover:shadow-[0_0_30px_rgba(8,182,212,0.5)]'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{sent ? (isDe ? 'Gesendet!' : 'Sent!') : (isDe ? 'Nachricht senden' : 'Send Message')}</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
