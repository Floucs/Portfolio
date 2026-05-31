import { StyleVariant, Language } from "../types";
import { SectionContainer } from "./SharedLayout";
import { getThemeColors } from "../theme";
import { motion } from "motion/react";
import { siteData } from "../data";
import { GraduationCap } from "lucide-react";

export default function Experience({ styleVariant, language }: { styleVariant: StyleVariant, language: Language }) {
  const theme = getThemeColors(styleVariant);
  const isDe = language === 'de';

  return (
    <SectionContainer id="experience" variant={styleVariant}>
      <div className="mb-16">
        <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">
          \ {isDe ? 'Stationen' : 'Experience'}
        </h2>
        <p className="text-3xl md:text-5xl font-black text-white tracking-tight w-full max-w-3xl">
          {isDe ? 'Mein beruflicher Werdegang.' : 'My professional journey.'}
        </p>
      </div>

      <div className="flex flex-col w-full relative">
        {siteData.experience.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-t border-slate-800/80 hover:bg-white/[0.02] transition-colors -mx-6 px-6 rounded-2xl"
          >
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                {isDe ? exp.date : exp.enDate}
              </span>
            </div>
            
            <div className="md:w-3/4 flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className={`text-2xl font-bold text-white transition-colors duration-300 ${theme.hoverText}`}>
                  {isDe ? exp.role : exp.enRole}
                </h3>
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-md bg-white/5 border border-white/10 text-slate-400`}>
                    <exp.icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <p className="text-blue-400 font-medium mb-4 text-sm md:text-base">{exp.company}</p>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {isDe ? exp.description : exp.enDescription}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      {siteData.education && siteData.education.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-800/80"
        >
          <h3 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-8">
            \ {isDe ? 'Duale & Akademische Ausbildung' : 'Cooperative & Academic Education'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#091122] to-slate-900/50 p-6 md:p-8 rounded-3xl border border-slate-800/80 hover:border-blue-500/20 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-blue-950/40 border border-blue-500/20 text-blue-400 rounded-xl">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white leading-tight">
                          {isDe ? edu.institution : edu.enInstitution}
                        </h4>
                        <span className="text-xs text-blue-400 font-mono">
                          {isDe ? `${edu.field} (${edu.degree})` : `${edu.enField} (${edu.enDegree})`}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 shrink-0">
                      {isDe ? edu.timeline : edu.enTimeline}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-3">
                    {isDe ? edu.description : edu.enDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Certificates */}
      {siteData.certificates && siteData.certificates.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-800/80"
        >
          <h3 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-8">
            \ {isDe ? 'Zertifikate & Auszeichnungen' : 'Certificates & Awards'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.certificates.map((cert, index) => (
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                key={index} 
                className="flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white rounded-xl transition-colors shrink-0">
                      <cert.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white font-bold text-[15px] leading-tight block group-hover:text-blue-400 transition-colors">
                        {isDe ? cert.name : cert.enName}
                      </span>
                      <span className="text-slate-500 text-xs font-mono">{cert.issuer}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                    {isDe ? cert.description : cert.enDescription}
                  </p>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-blue-500 pt-3 border-t border-slate-800/60 uppercase">
                  <span>{isDe ? cert.date : cert.enDate}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform shrink-0">
                    {isDe ? 'Nachweis →' : 'Credentials →'}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </SectionContainer>
  );
}
