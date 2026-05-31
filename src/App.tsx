import { useState, useEffect } from 'react';
import Header from './components/Header';
import PortfolioLayout from './layouts/PortfolioLayout';
import TerminalLayout from './layouts/TerminalLayout';
import { Language, LayoutVariant, Theme } from './types';

const getInitialLanguage = (): Language => {
  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.startsWith('de') ? 'de' : 'en';
  }
  return 'de';
};

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
    return (localStorage.getItem('theme') as Theme) || 'dark';
  }
  return 'dark';
};

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [layout, setLayout] = useState<LayoutVariant>('portfolio');
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const progress = docHeight > winHeight ? (scrollY / (docHeight - winHeight)) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen ${isLight ? 'bg-slate-50 text-slate-800' : 'bg-slate-950 text-slate-200'} font-sans selection:bg-blue-500/30 selection:text-blue-200 transition-colors duration-700 relative`}>
      {/* Subtle Tech Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: isLight 
               ? `radial-gradient(circle at center, rgba(37, 99, 235, 0.05) 0%, transparent 60%), 
                  linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px), 
                  linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px)`
               : `radial-gradient(circle at center, rgba(30, 58, 138, 0.1) 0%, transparent 60%), 
                  linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), 
                  linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
             backgroundSize: '100% 100%, 30px 30px, 30px 30px'
           }}
      />
      <div 
        className={`fixed top-0 left-0 h-1.5 z-[100] transition-colors duration-500 ${
          isLight 
            ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 shadow-[0_0_15px_rgba(37,99,235,0.2)]'
            : 'bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.6)]'
        }`}
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Interactive Mouse Follow Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: isLight
            ? `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.06), transparent 45%)`
            : `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 40%)`
        }}
      />

      {/* Structural ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[150px] ${isLight ? 'bg-blue-300/10' : 'bg-blue-900/10'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[150px] ${isLight ? 'bg-indigo-200/10' : 'bg-indigo-900/10'}`}></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          layoutVariant={layout} 
          setLayoutVariant={setLayout} 
          theme={theme}
          setTheme={setTheme}
        />
        
        <main className="flex-grow pt-24 pb-8 overflow-hidden">
          {layout === 'portfolio' && <PortfolioLayout language={language} theme={theme} />}
          {layout === 'terminal' && <TerminalLayout language={language} theme={theme} />}
        </main>

        <footer className={`py-8 text-center text-sm font-mono border-t mt-auto relative z-10 ${
          isLight ? 'text-slate-400 border-slate-200/60' : 'text-slate-500 border-slate-800'
        }`}>
          <p>
            {language === 'de' 
              ? '© 2026 Florian Schorb' 
              : '© 2026 Florian Schorb'}
          </p>
        </footer>
      </div>
    </div>
  );
}
