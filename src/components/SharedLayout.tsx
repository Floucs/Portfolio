import { motion } from "motion/react";
import React, { ReactNode } from "react";
import { StyleVariant } from "../types";

export const SectionContainer: React.FC<{ 
  children: ReactNode; 
  id: string; 
  variant: StyleVariant;
}> = ({ children, id, variant }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 max-w-5xl mx-auto px-6 relative z-10"
    >
      {children}
    </motion.section>
  );
}

export const Card: React.FC<{
  children: ReactNode;
  variant: StyleVariant;
  className?: string;
}> = ({ children, variant, className = "" }) => {
  const getCardClasses = () => {
    switch (variant) {
      case 'midnight':
        return 'bg-slate-900/40 border-slate-700/50 backdrop-blur-md hover:bg-slate-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] rounded-2xl';
      case 'executive':
        return 'bg-zinc-900/30 border-zinc-700/50 backdrop-blur-md hover:bg-zinc-800/50 hover:border-amber-500/30 hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] rounded-2xl';
      case 'cyber':
        return 'bg-black/60 border-emerald-900/40 backdrop-blur-xl hover:bg-emerald-950/20 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.1)] rounded-none';
      default:
        return 'bg-slate-900/40 border-slate-700/50 backdrop-blur-md rounded-2xl';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`p-6 sm:p-8 border transition-all duration-500 ${getCardClasses()} ${className}`}
    >
      {children}
    </motion.div>
  );
}
