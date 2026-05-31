import { siteData } from "../data";
import { StyleVariant, Language } from "../types";
import { SectionContainer, Card } from "./SharedLayout";
import { getThemeColors } from "../theme";
import { motion } from "motion/react";

export default function Projects({ styleVariant, language }: { styleVariant: StyleVariant, language: Language }) {
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
    <SectionContainer id="projects" variant={styleVariant}>
      <div className="mb-12">
        <h2 className={`text-sm font-mono ${theme.text} mb-3 tracking-widest uppercase`}>
          {language === 'de' ? 'Case Studies' : 'Case Studies'}
        </h2>
        <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {language === 'de' ? 'Ausgewählte Arbeiten.' : 'Selected Work.'}
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
      >
        {siteData.projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <Card variant={styleVariant} className="flex flex-col gap-4 items-start group h-full !p-5">
              <div className="flex items-center gap-4 w-full justify-between">
                <div className="flex items-center gap-4">
                  <div className={`
                    shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500
                    bg-gradient-to-br ${theme.gradient} ${theme.text} ${theme.border} group-hover:${theme.shadow}
                  `}>
                    <project.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-xl font-bold text-white transition-colors duration-300 ${theme.hoverText}`}>
                    {language === 'de' ? project.title : project.enTitle}
                  </h3>
                </div>
              </div>
              
              <div className="flex-1 w-full flex flex-col pt-2">
                <span className={`
                  text-[10px] font-mono px-2.5 py-1 rounded-md whitespace-nowrap self-start mb-3
                  ${project.status.includes('Live') 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }
                `}>
                  {language === 'de' ? project.status : project.enStatus}
                </span>
                
                <p className="text-slate-400 leading-snug mb-4 text-sm flex-1">
                  {language === 'de' ? project.description : project.enDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
