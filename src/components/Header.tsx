import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Language, LayoutVariant, Theme } from "../types";
import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  language: Language;
  setLanguage: (l: Language) => void;
  layoutVariant: LayoutVariant;
  setLayoutVariant: (v: LayoutVariant) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export default function Header({ language, setLanguage, layoutVariant, setLayoutVariant, theme, setTheme }: HeaderProps) {
  const isLight = theme === 'light';
  const isDe = language === 'de';
  const bgClass = isLight ? 'bg-white/80' : 'bg-slate-950/80';
  const borderClass = isLight ? 'border-slate-200/85' : 'border-slate-800/80';
  
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (layoutVariant !== 'portfolio') return;
    
    const handleScroll = () => {
      const ids = ['about', 'education', 'certificates', 'skills', 'projects', 'contact'];
        
      let currentId = 'about';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            currentId = id;
          }
        }
      }
      setActiveSection(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [layoutVariant]);

  // Dynamic branding or highlighting classes depending on layout variant and theme
  const activeTextClass = isLight 
    ? 'text-blue-600' 
    : (layoutVariant === 'portfolio' ? 'text-cyan-400' : 'text-blue-400');
  
  const activeDotClass = isLight 
    ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]' 
    : (layoutVariant === 'portfolio' ? 'bg-cyan-500 shadow-[0_0_8px_rgba(8,182,212,0.8)]' : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]');

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-b transition-colors duration-700 ${bgClass} backdrop-blur-xl ${borderClass}`}
    >
      <div className={`font-mono text-sm tracking-tight mb-4 sm:mb-0 flex items-center justify-between w-full sm:w-auto gap-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
        <div className="flex items-center gap-3">
          <span className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${isLight ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}>FS</span>
          <span><span className="font-bold">FLORIAN</span> SCHORB</span>
        </div>
      </div>

      {layoutVariant === 'portfolio' && (
        <nav className="hidden md:flex flex-wrap items-center gap-6 text-sm font-medium">
          {[
            { id: 'about', de: 'Über mich', en: 'About Me' },
            { id: 'education', de: 'Ausbildung', en: 'Education' },
            { id: 'certificates', de: 'Zertifikate', en: 'Certificates' },
            { id: 'skills', de: 'Skills & Bio', en: 'Skills & Bio' },
            { id: 'projects', de: 'Projekte', en: 'Projects' },
            { id: 'contact', de: 'Kontakt', en: 'Contact' }
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`transition-colors relative ${activeSection === item.id ? activeTextClass : (isLight ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white')}`}
            >
              {language === 'de' ? item.de : item.en}
              {activeSection === item.id && (
                <div className={`absolute -bottom-2 left-0 right-0 h-0.5 ${activeDotClass}`} />
              )}
            </a>
          ))}
        </nav>
      )}

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
        {/* Layout Variant Toggle */}
        <div className={`flex rounded-full p-1 border backdrop-blur-md transition-colors duration-700 ${isLight ? 'bg-slate-200/50 border-slate-300/60' : 'bg-slate-800/50 border-slate-700/50'}`}>
          {(['portfolio', 'terminal'] as LayoutVariant[]).map((v) => (
            <button
              key={v}
              onClick={() => setLayoutVariant(v)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                layoutVariant === v 
                  ? (isLight ? 'bg-blue-600 text-white shadow-[0_2px_10px_rgba(37,99,235,0.2)]' : 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]')
                  : (isLight ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-300/30' : 'text-slate-400 hover:text-white hover:bg-white/5')
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Language Toggle */}
        <div className={`flex rounded-full p-1 border backdrop-blur-md transition-colors duration-700 ${isLight ? 'bg-slate-200/50 border-slate-300/60' : 'bg-slate-800/50 border-slate-700/50'}`}>
          {(['de', 'en'] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLanguage(l)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                language === l 
                  ? (isLight ? 'bg-white text-slate-900 shadow-sm border border-slate-300/40' : 'bg-white/10 text-white shadow-sm') 
                  : (isLight ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-300/30' : 'text-slate-400 hover:text-white hover:bg-white/5')
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(isLight ? 'dark' : 'light')}
          className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
            isLight 
              ? 'bg-slate-200/50 border-slate-300/60 text-blue-600 hover:text-blue-700 hover:bg-slate-200 shadow-sm'
              : 'bg-slate-800/50 border-slate-700/50 text-amber-400 hover:text-amber-300 hover:bg-white/5'
          }`}
          title={isDe ? 'Theme wechseln' : 'Toggle Theme'}
        >
          {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>
    </motion.header>
  );
}
