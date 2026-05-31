import { siteData } from "../data";
import { StyleVariant, Language } from "../types";
import { SectionContainer, Card } from "./SharedLayout";
import { getThemeColors } from "../theme";
import { motion } from "motion/react";

export default function Focus({ styleVariant, language }: { styleVariant: StyleVariant, language: Language }) {
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
    <SectionContainer id="focus" variant={styleVariant}>
      <div className="mb-12">
        <h2 className={`text-sm font-mono ${theme.text} mb-3 tracking-widest uppercase`}>
          {language === 'de' ? 'Kompetenzbereiche' : 'Areas of Expertise'}
        </h2>
        <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {language === 'de' ? 'Mein Fokus.' : 'My Focus.'}
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        {siteData.focus.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="block h-full">
            <Card variant={styleVariant} className="flex flex-col group h-full">
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-8 border transition-all duration-500
                ${theme.bg} ${theme.text} ${theme.border} group-hover:${theme.shadow}
              `}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'de' ? item.title : item.enTitle}
              </h3>
              <p className="text-slate-400 leading-relaxed font-sans mt-auto text-lg">
                {language === 'de' ? item.description : item.enDescription}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
