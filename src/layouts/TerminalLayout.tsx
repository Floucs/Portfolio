import { motion } from "motion/react";
import { siteData } from "../data";
import { Language, Theme } from "../types";
import React, { useState, useEffect, useRef } from "react";

export default function TerminalLayout({ language, theme }: { language: Language, theme?: Theme }) {
  const isDe = language === 'de';
  const isLight = theme === 'light';
  const bottomRef = useRef<HTMLDivElement>(null);

  const getHelpOutput = () => (
    <div className={isLight ? 'text-slate-600' : 'text-slate-300'}>
      <p>{isDe ? 'Verfügbare Befehle:' : 'Available commands:'}</p>
      <ul className="list-none pl-4 space-y-1 mt-2 text-blue-650">
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>whoami</span> - {isDe ? 'Über mich' : 'About me'}</li>
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>cat education.json</span> - {isDe ? 'Akademischer Werdegang' : 'Academic background'}</li>
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>cat experience.json</span> - {isDe ? 'Beruflicher Werdegang' : 'Work experience'}</li>
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>cat focus.json</span> - {isDe ? 'Meine Schwerpunkte' : 'My focus areas'}</li>
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>cat skills.json</span> - {isDe ? 'Meine Kompetenzen' : 'My skills & interests'}</li>
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>cat projects.json</span> - {isDe ? 'Meine Projekte' : 'My projects'}</li>
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>cat certificates.json</span> - {isDe ? 'Meine Zertifikate & Erfolge' : 'My certificates'}</li>
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>contact</span> - {isDe ? 'Kontaktinformationen' : 'Contact information'}</li>
        <li><span className={`${isLight ? 'text-emerald-600' : 'text-emerald-400'} font-bold`}>clear</span> - {isDe ? 'Terminal leeren' : 'Clear terminal'}</li>
      </ul>
    </div>
  );

  const [history, setHistory] = useState<{ command: string, output: React.ReactNode }[]>([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = input.trim();
    const cmd = rawCmd.toLowerCase().replace(/\s+/g, ' ');
    
    let output: React.ReactNode = null;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'help' || cmd === '?' || cmd === 'h') {
      output = getHelpOutput();
    } else if (cmd === 'whoami' || cmd === 'about') {
      output = (
        <div className={`pl-4 border-l-2 space-y-4 ${isLight ? 'border-blue-200' : 'border-blue-900/30'}`}>
          <h1 className={`text-2xl font-bold tracking-widest uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>{siteData.hero.name}</h1>
          <p className={isLight ? 'text-blue-700' : 'text-blue-200'}>"{siteData.hero.tagline}"</p>
          <p className={isLight ? 'text-slate-600' : 'text-slate-300'}>{isDe ? siteData.hero.description : siteData.hero.enDescription}</p>
          <p className={`border-l-2 pl-4 py-2 font-sans text-sm ${
            isLight ? 'border-blue-500 bg-blue-50/50 text-slate-600' : 'border-blue-500/50 bg-slate-900/30 text-slate-300'
          }`}>
            {isDe ? siteData.hero.about : siteData.hero.enAbout}
          </p>
        </div>
      );
    } else if (cmd === 'ls' || cmd === 'dir') {
      output = (
        <div className={`pl-4 border-l-2 text-sm leading-8 ${isLight ? 'border-blue-200 text-blue-750' : 'border-blue-900/30 text-blue-300'}`}>
          <span className={`${isLight ? 'text-slate-800' : 'text-white'} mr-4`}>education.json</span>
          <span className={`${isLight ? 'text-slate-800' : 'text-white'} mr-4`}>experience.json</span>
          <span className={`${isLight ? 'text-slate-800' : 'text-white'} mr-4`}>focus.json</span>
          <span className={`${isLight ? 'text-slate-800' : 'text-white'} mr-4`}>skills.json</span>
          <span className={`${isLight ? 'text-slate-800' : 'text-white'} mr-4`}>projects.json</span>
          <span className={`${isLight ? 'text-slate-800' : 'text-white'} mr-4`}>certificates.json</span>
        </div>
      );
    } else if (cmd === 'cat education.json' || cmd === 'cat education' || cmd === 'education') {
      output = (
        <div className={`pl-4 border-l-2 space-y-4 font-mono text-sm max-w-full overflow-x-auto ${isLight ? 'border-blue-200 text-slate-650' : 'border-blue-900/30'}`}>
          <div className="text-blue-500/50">{"["}</div>
          {((siteData as any).education || []).map((edu: any, i: number) => (
            <div key={i} className="pl-4 whitespace-pre-wrap break-words">
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"{"}</div>
              <div className="pl-8 text-xs sm:text-sm">
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"degree":</span> <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>"{isDe ? edu.degree : edu.enDegree}"</span>,<br/>
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"field":</span> <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>"{isDe ? edu.field : edu.enField}"</span>,<br/>
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"institution":</span> <span className={isLight ? 'text-amber-700 font-medium' : 'text-amber-400'}>"{isDe ? edu.institution : edu.enInstitution}"</span>,<br/>
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"timeline":</span> <span className={isLight ? 'text-slate-800' : 'text-white'}>"{isDe ? edu.timeline : edu.enTimeline}"</span>,<br/>
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"description":</span> <span className={isLight ? 'text-slate-650' : 'text-slate-400'}>"{isDe ? edu.description : edu.enDescription}"</span><br/>
              </div>
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"}"}{i < ((siteData as any).education || []).length - 1 ? ',' : ''}</div>
            </div>
          ))}
          <div className="text-blue-500/50">{"]"}</div>
        </div>
      );
    } else if (cmd === 'cat experience.json' || cmd === 'cat experience' || cmd === 'experience') {
      output = (
        <div className={`pl-4 border-l-2 space-y-4 font-mono text-sm max-w-full overflow-x-auto ${isLight ? 'border-blue-200 text-slate-650' : 'border-blue-900/30'}`}>
          <div className="text-blue-500/50">{"["}</div>
          {siteData.experience.map((exp, i) => (
            <div key={i} className="pl-4 whitespace-pre-wrap break-words">
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"{"}</div>
              <div className="pl-8 text-xs sm:text-sm">
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"role":</span> <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>"{isDe ? exp.role : exp.enRole}"</span>,<br/>
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"company":</span> <span className={isLight ? 'text-amber-700 font-medium' : 'text-amber-400'}>"{isDe ? exp.company : exp.enCompany}"</span>,<br/>
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"timeline":</span> <span className={isLight ? 'text-slate-800' : 'text-white'}>"{isDe ? exp.date : exp.enDate}"</span>,<br/>
                <span className={isLight ? 'text-indigo-600' : 'text-blue-300'}>"description":</span> <span className={isLight ? 'text-slate-650' : 'text-slate-400'}>"{isDe ? exp.description : exp.enDescription}"</span><br/>
              </div>
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"}"}{i < siteData.experience.length -1 ? ',' : ''}</div>
            </div>
          ))}
          <div className="text-blue-500/50">{"]"}</div>
        </div>
      );
    } else if (cmd === 'cat focus.json' || cmd === 'cat focus' || cmd === 'focus') {
      output = (
        <div className={`pl-4 border-l-2 grid grid-cols-1 md:grid-cols-2 gap-4 ${isLight ? 'border-blue-200' : 'border-blue-900/30'}`}>
          {siteData.focus.map((f, i) => (
            <div key={i} className={`p-4 border ${isLight ? 'bg-blue-50/30 border-blue-100' : 'bg-blue-950/20 border-blue-900/30'}`}>
              <div className={`font-bold mb-2 flex items-center gap-2 ${isLight ? 'text-blue-700' : 'text-white'}`}>
                <span className={isLight ? 'text-blue-500' : 'text-blue-500'}>./</span>{isDe ? f.title : f.enTitle}
              </div>
              <div className={`text-xs ${isLight ? 'text-slate-650' : 'text-slate-400'}`}>{isDe ? f.description : f.enDescription}</div>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'cat skills.json' || cmd === 'cat skills' || cmd === 'skills') {
      output = (
        <div className={`pl-4 border-l-2 space-y-4 font-mono text-sm max-w-full overflow-x-auto ${isLight ? 'border-blue-200 text-slate-650' : 'border-blue-900/30'}`}>
          <div className="text-blue-500/50">{"["}</div>
          {siteData.skills.map((skill, i) => (
            <div key={i} className="pl-4 whitespace-pre-wrap break-words">
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"{"}</div>
              <div className="pl-8 text-xs sm:text-sm">
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"category":</span> <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>"{isDe ? skill.category : (skill.enCategory || skill.category)}"</span>,<br/>
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"items":</span> <span className={isLight ? 'text-slate-800' : 'text-white'}>[{ (isDe ? skill.items : (skill.enItems || skill.items)).map(t=>`"${t}"`).join(', ')}]</span><br/>
              </div>
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"}"}{i < siteData.skills.length - 1 ? ',' : ''}</div>
            </div>
          ))}
          <div className="text-blue-500/50">{"]"}</div>
        </div>
      );
    } else if (cmd === 'cat projects.json' || cmd === 'cat projects' || cmd === 'projects' || cmd === 'ls projects') {
      output = (
        <div className={`pl-4 border-l-2 space-y-6 font-mono text-sm max-w-full overflow-x-auto ${isLight ? 'border-blue-200 text-slate-650' : 'border-blue-900/30'}`}>
          <div className="text-blue-500/50">{"["}</div>
          {siteData.projects.map((p, i) => (
            <div key={i} className="pl-4 whitespace-pre-wrap break-words">
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"{"}</div>
              <div className="pl-8 text-xs sm:text-sm">
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"title":</span> <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>"{isDe ? p.title : p.enTitle}"</span>,<br/>
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"status":</span> <span className={isLight ? 'text-amber-700' : 'text-amber-400'}>"{isDe ? p.status : p.enStatus}"</span>,<br/>
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"description":</span> <span className={isLight ? 'text-slate-650' : 'text-slate-300'}>"{isDe ? p.description : p.enDescription}"</span>,<br/>
                {p.link && <><span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"link":</span> <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">"{p.link}"</a>,<br/></>}
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"tags":</span> <span className={isLight ? 'text-slate-800' : 'text-white'}>[{p.tags.map(t=>`"${t}"`).join(', ')}]</span><br/>
              </div>
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"}"}{i < siteData.projects.length -1 ? ',' : ''}</div>
            </div>
          ))}
          <div className="text-blue-500/50">{"]"}</div>
        </div>
      );
    } else if (cmd === 'cat certificates.json' || cmd === 'cat certificates' || cmd === 'certificates' || cmd === 'ls certificates') {
       output = (
        <div className={`pl-4 border-l-2 space-y-6 font-mono text-sm max-w-full overflow-x-auto ${isLight ? 'border-blue-200 text-slate-650' : 'border-blue-900/30'}`}>
          <div className="text-blue-500/50">{"["}</div>
          {siteData.certificates && siteData.certificates.map((cert, i) => (
            <div key={i} className="pl-4 whitespace-pre-wrap break-words">
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"{"}</div>
              <div className="pl-8 text-xs sm:text-sm">
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"name":</span> <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>"{isDe ? cert.name : cert.enName}"</span>,<br/>
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"issuer":</span> <span className={isLight ? 'text-amber-700 font-medium' : 'text-amber-400'}>"{cert.issuer}"</span>,<br/>
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"date":</span> <span className={isLight ? 'text-slate-800' : 'text-white'}>"{isDe ? cert.date : cert.enDate}"</span>,<br/>
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"description":</span> <span className={isLight ? 'text-slate-650' : 'text-slate-300'}>"{isDe ? cert.description : cert.enDescription}"</span>,<br/>
                <span className={isLight ? 'text-indigo-650' : 'text-blue-300'}>"link":</span> <a href={cert.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">"{cert.link}"</a><br/>
              </div>
              <div className={isLight ? 'text-blue-600' : 'text-blue-400'}>{"}"}{i < siteData.certificates.length -1 ? ',' : ''}</div>
            </div>
          ))}
          <div className="text-blue-500/50">{"]"}</div>
        </div>
       );
    } else if (cmd === 'contact' || cmd === 'mail' || cmd === 'email') {
       output = (
         <div className={`pl-4 border-l-2 ${isLight ? 'border-blue-200' : 'border-blue-900/30'}`}>
            <p className={`${isLight ? 'text-slate-700' : 'text-slate-300'} mb-2`}>{isDe ? "Mail" : "Email"}: <a href="mailto:schorbf@gmail.com" className="text-blue-600 hover:underline">schorbf@gmail.com</a></p>
            <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>LinkedIn: <a href="https://www.linkedin.com/in/florian-schorb/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/florian-schorb</a></p>
         </div>
       );
    } else if (cmd.startsWith('sudo ')) {
      output = <span className={`font-bold ${isLight ? 'text-red-650' : 'text-red-500'}`}>{isDe ? 'Nette Idee. Dieser Vorfall wird gemeldet.' : 'Nice try. This incident will be reported.'}</span>;
    } else if (cmd === 'ping') {
      output = <span className="text-emerald-500 dark:text-emerald-400 font-bold tracking-widest animate-pulse">PONG!</span>;
    } else if (cmd === 'matrix') {
      output = (
        <div className="text-emerald-600 dark:text-emerald-400 font-mono text-xs max-h-40 overflow-hidden leading-tight opacity-75">
          {Array.from({length: 10}).map((_, i) => (
             <div key={i}>{Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + " 01010011 " + Math.random().toString(36).substring(2, 8)}</div>
          ))}
          <div>Wake up, Neo...</div>
        </div>
      );
    } else if (cmd === 'date') {
      output = <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>{new Date().toString()}</span>;
    } else if (cmd.startsWith('echo ')) {
      output = <span className={isLight ? 'text-slate-950 font-bold' : 'text-white'}>{rawCmd.substring(5)}</span>;
    } else if (cmd !== '') {
      output = <span className="text-red-500">{isDe ? 'Befehl nicht gefunden' : 'Command not found'}: {rawCmd}. Try 'help'.</span>;
    }

    if (cmd !== '') {
      setHistory(prev => [...prev, { command: rawCmd, output }]);
    }
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-mono">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`border rounded-none overflow-hidden min-h-[60vh] flex flex-col transition-all duration-500 ${
          isLight 
            ? 'border-blue-200 bg-white shadow-[0_10px_45px_rgba(37,99,235,0.04)]' 
            : 'border-blue-900/50 bg-[#020815]/90 shadow-[0_0_30px_rgba(30,58,138,0.2)]'
        }`}
      >
        {/* Terminal Header */}
        <div className={`px-4 py-2 flex items-center gap-3 shrink-0 border-b transition-colors duration-500 ${
          isLight ? 'bg-slate-50 border-blue-100/70' : 'bg-blue-950/40 border-blue-900/50'
        }`}>
          <div className="flex gap-2">
            <div className={`w-3 h-3 rounded-full border ${isLight ? 'bg-red-500/10 border-red-500/30' : 'bg-red-500/20 border-red-500/50'}`}></div>
            <div className={`w-3 h-3 rounded-full border ${isLight ? 'bg-amber-500/10 border-amber-500/30' : 'bg-amber-500/20 border-amber-500/50'}`}></div>
            <div className={`w-3 h-3 rounded-full border ${isLight ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-emerald-500/20 border-emerald-500/50'}`}></div>
          </div>
          <span className={`text-xs ml-4 font-bold tracking-widest ${isLight ? 'text-blue-600/70' : 'text-blue-500/50'}`}>guest@portfolio:~</span>
        </div>

        {/* Terminal Body */}
        <div className={`p-6 text-sm leading-relaxed overflow-y-auto flex-1 h-[60vh] transition-colors duration-500 ${
          isLight ? 'text-slate-600' : 'text-blue-300/80'
        }`}>
          
          <div className="space-y-1 mb-8 opacity-60 text-xs">
            <div>{'> '}INIT: Kernel mounting...</div>
            <div>{'> '}LOAD: User profile 'Florian Schorb'</div>
            <div>{'> '}STATUS: Interactive shell ready.</div>
            <div className={`mt-4 font-bold ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>{'> '}{isDe ? "Geben Sie 'help' ein, um eine Liste der Befehle zu sehen." : "Type 'help' for a list of available commands."}</div>
          </div>

          {/* History */}
          <div className="space-y-6">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center font-bold">
                  <span className={`${isLight ? 'text-emerald-600' : 'text-emerald-500'} mr-2`}>➜</span>
                  <span className={`${isLight ? 'text-blue-700' : 'text-blue-300'} mr-2`}>~</span>
                  <span className={isLight ? 'text-slate-800' : 'text-white'}>{item.command}</span>
                </div>
                {item.output}
              </div>
            ))}
          </div>

          {/* Input Prompt */}
          <div className="mt-6 flex items-center">
            <span className={`${isLight ? 'text-emerald-600' : 'text-emerald-500'} font-bold mr-2`}>➜</span>
            <span className={`${isLight ? 'text-blue-700' : 'text-blue-300'} font-bold mr-2`}>~</span>
            <form onSubmit={handleCommand} className="flex-1 flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
                className={`bg-transparent border-none outline-none flex-1 caret-blue-550 w-full ${isLight ? 'text-slate-800' : 'text-white'}`}
                spellCheck="false"
                autoComplete="off"
              />
            </form>
          </div>
          
          <div ref={bottomRef} className="h-4" />
        </div>
      </motion.div>
    </div>
  );
}
