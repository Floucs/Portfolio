import React, { useState } from "react";
import { StyleVariant, Language } from "../types";
import { SectionContainer } from "./SharedLayout";
import { Mail, Linkedin, Github, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getThemeColors } from "../theme";

export default function Contact({ styleVariant, language }: { styleVariant: StyleVariant, language: Language }) {
  const theme = getThemeColors(styleVariant);
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("schorbf@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const links = [
    {
      label: "schorbf@gmail.com",
      href: "mailto:schorbf@gmail.com",
      icon: Mail,
      onClick: handleCopyEmail
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/florian-schorb",
      icon: Linkedin
    },
    {
      label: "GitHub",
      href: "https://github.com/Floucs",
      icon: Github
    }
  ];

  return (
    <SectionContainer id="contact" variant={styleVariant}>
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className={`text-sm font-mono ${theme.text} mb-3 tracking-widest uppercase`}>
          {language === 'de' ? 'Kontakt' : 'Contact'}
        </h2>
        <p className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6">
          {language === 'de' ? 'Lass uns reden.' : 'Let\'s talk.'}
        </p>
        <p className="text-xl text-slate-400 mb-12">
          {language === 'de' 
            ? 'Du arbeitest an spannenden AI-Themen, hast Fragen zu meinen Projekten oder einfach Lust auf einen Austausch? Schreib mir gerne.' 
            : 'You\'re working on exciting AI topics, have questions about my projects, or simply want to connect? Feel free to reach out.'
          }
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: -50, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                className="absolute text-sm font-bold bg-white text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2 pointer-events-none"
              >
                <Check className="w-4 h-4" />
                {language === 'de' ? 'In Zwischenablage kopiert!' : 'Copied to clipboard!'}
              </motion.div>
            )}
          </AnimatePresence>

          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.onClick ? undefined : "_blank"}
              rel={link.onClick ? undefined : "noopener noreferrer"}
              onClick={link.onClick}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`
                flex items-center gap-3 px-8 py-5 rounded-2xl font-bold transition-all duration-300 w-full sm:w-auto justify-center text-white cursor-pointer
                ${theme.button}
              `}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
