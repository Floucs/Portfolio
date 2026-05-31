import { motion } from "motion/react";
import { siteData } from "../data";
import { StyleVariant, Language } from "../types";
import { getThemeColors } from "../theme";

export default function Hero({ styleVariant, language }: { styleVariant: StyleVariant, language: Language }) {
  const theme = getThemeColors(styleVariant);

  const getGradientText = () => {
    switch (styleVariant) {
      case 'midnight': return 'from-white via-blue-100 to-slate-400';
      case 'executive': return 'from-white via-amber-100 to-zinc-400';
      case 'cyber': return 'from-white via-emerald-100 to-emerald-600';
    }
  };

  return (
    <section id="about" className="pt-48 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left min-h-[80vh] justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)", y: 40 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase mb-10 backdrop-blur-md border ${theme.border} ${theme.bg} ${theme.text}`}
        >
          <span className="w-2 h-2 rounded-full animate-pulse bg-current shadow-[0_0_8px_currentColor]"></span>
          {siteData.hero.name}
        </motion.div>
        
        <h1 className={`text-6xl sm:text-8xl font-sans font-extrabold tracking-tighter leading-[1.05] mb-8 bg-clip-text text-transparent bg-gradient-to-br ${getGradientText()}`}>
          {siteData.hero.tagline.split(' ').map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.12 + 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-3xl mb-10 space-y-6"
        >
          <p className="text-xl sm:text-2xl text-slate-300 font-sans leading-relaxed">
            <span className={language === 'de' ? 'block' : 'hidden'}>
              {siteData.hero.description}
            </span>
            <span className={language === 'en' ? 'block' : 'hidden'}>
              {siteData.hero.enDescription}
            </span>
          </p>
          <p className="text-lg text-slate-400 font-sans leading-relaxed border-l-2 border-blue-500/50 pl-6 py-2 bg-slate-900/30 rounded-r-xl">
            <span className={language === 'de' ? 'block' : 'hidden'}>
              {siteData.hero.about}
            </span>
            <span className={language === 'en' ? 'block' : 'hidden'}>
              {siteData.hero.enAbout}
            </span>
          </p>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
        >
           <a href="#contact" className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
             {language === 'de' ? 'Kontakt aufnehmen' : 'Get in Touch'}
           </a>
           <a href="https://www.linkedin.com/in/florian-schorb/" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 font-medium border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2">
             <span>LinkedIn Profil</span>
             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
             </svg>
           </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
