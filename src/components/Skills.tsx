import { siteData } from "../data";
import { StyleVariant, Language } from "../types";
import { SectionContainer, Card } from "./SharedLayout";
import { getThemeColors } from "../theme";
import { motion } from "motion/react";

export default function Skills({ styleVariant, language }: { styleVariant: StyleVariant, language: Language }) {
  const theme = getThemeColors(styleVariant);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <SectionContainer id="skills" variant={styleVariant}>
      <div className="mb-12">
        <h2 className={`text-sm font-mono ${theme.text} mb-3 tracking-widest uppercase`}>
          {language === 'de' ? 'Skills & Stack' : 'Skills & Stack'}
        </h2>
        <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          {language === 'de' ? 'Werkzeugkasten.' : 'Toolbox.'}
        </p>
        <p className="text-slate-400 text-lg">
          {language === 'de' ? 'Was ich täglich nutze und worin ich mich aktiv vertiefe.' : 'What I use daily and actively explore in depth.'}
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
      >
        {siteData.skills.map((group, index) => {
          const items = language === 'de' || !group.enItems ? group.items : group.enItems;
          const category = language === 'en' && group.enCategory ? group.enCategory : group.category;
          
          return (
            <motion.div key={index} variants={itemVariants} className="block h-full">
              <Card variant={styleVariant} className="flex flex-col group h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
                  <div className={`p-2 rounded-lg border ${theme.bg} ${theme.border} ${theme.text}`}>
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category}
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`${theme.textMuted} mr-3 font-mono transform group-hover:translate-x-1 transition-transform`}>▹</span>
                      <span className="text-slate-300 text-[15px] pt-[1px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
