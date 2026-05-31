import { StyleVariant } from './types';

export const getThemeColors = (variant: StyleVariant) => {
  switch (variant) {
    case 'midnight':
      return {
        text: 'text-blue-400',
        textMuted: 'text-blue-400/70',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.3)]',
        hoverText: 'group-hover:text-blue-400',
        icon: 'text-blue-400',
        gradient: 'from-blue-500/20 to-indigo-500/10',
        button: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20'
      };
    case 'executive':
      return {
        text: 'text-amber-500',
        textMuted: 'text-amber-500/70',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
        shadow: 'shadow-[0_0_15px_rgba(245,158,11,0.2)]',
        hoverText: 'group-hover:text-amber-500',
        icon: 'text-amber-500',
        gradient: 'from-amber-500/20 to-yellow-600/10',
        button: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/20'
      };
    case 'cyber':
      return {
        text: 'text-emerald-400',
        textMuted: 'text-emerald-400/70',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
        hoverText: 'group-hover:text-emerald-400',
        icon: 'text-emerald-400',
        gradient: 'from-emerald-500/20 to-cyan-500/10',
        button: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20'
      };
  }
};
