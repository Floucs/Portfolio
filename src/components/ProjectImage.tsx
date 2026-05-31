import { useState, useEffect } from 'react';
import { LucideIcon, CloudOff, Shield, Disc, ArrowDown, Activity } from 'lucide-react';

interface ProjectImageProps {
  imagePath?: string;
  projectIdx: number;
  fallbackIcon: LucideIcon;
  tags: string[];
  isDe: boolean;
  status: string;
  theme?: 'light' | 'dark';
}

export default function ProjectImage({ 
  imagePath, 
  projectIdx, 
  fallbackIcon: IconComponent, 
  tags, 
  isDe,
  status,
  theme = 'dark'
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const isLight = theme === 'light';

  // If image changes, reset state
  useEffect(() => {
    setHasError(false);
  }, [imagePath]);

  // Render high-fidelity SVG falls matching the uploaded visuals
  const renderInteractiveFallback = () => {
    switch (projectIdx) {
      case 0: // Vault Linker (Network of semantic notes + local box)
        return (
          <div className={`absolute inset-0 overflow-hidden flex items-center justify-center ${isLight ? 'bg-white' : 'bg-[#040914]'}`}>
            {/* Grid background */}
            <div className={`absolute inset-0 bg-[size:1.5rem_1.5rem] opacity-30 ${
              isLight 
                ? 'bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]' 
                : 'bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]'
            }`} />
            <div className={`absolute inset-0 ${isLight ? 'bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]' : 'bg-[radial-gradient(circle_at_center,rgba(8,182,212,0.12)_0%,transparent_70%)]'}`} />

            {/* Network nodes */}
            <svg className={`w-full h-full absolute inset-0 ${isLight ? 'text-blue-500/20' : 'text-cyan-500/20'}`} xmlns="http://www.w3.org/2000/svg">
              <line x1="25%" y1="35%" x2="45%" y2="20%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="45%" y1="20%" x2="70%" y2="30%" stroke="currentColor" strokeWidth="1.5" />
              <line x1="70%" y1="30%" x2="55%" y2="65%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="55%" y1="65%" x2="25%" y2="35%" stroke="currentColor" strokeWidth="1.5" />
              <line x1="45%" y1="20%" x2="55%" y2="65%" stroke="currentColor" strokeWidth="2.5" className={isLight ? 'text-blue-550/45' : 'text-cyan-400/40'} />
              <line x1="30%" y1="75%" x2="55%" y2="65%" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            {/* Glowing cluster */}
            <div className="absolute top-[20%] left-[45%] w-4 h-4 rounded-full bg-amber-500/30 border-2 border-amber-400 flex items-center justify-center animate-pulse z-10 shadow-[0_0_15px_rgba(245,158,11,0.6)]">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            </div>

            {/* Color switcher cluster */}
            <div className={`absolute top-[30%] left-[70%] w-3.5 h-3.5 rounded-full border flex items-center justify-center z-10 ${
              isLight ? 'bg-blue-50 border-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.5)]' : 'bg-cyan-950 border border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isLight ? 'bg-blue-500' : 'bg-cyan-300'}`} />
            </div>

            {/* Standard nodes */}
            <div className={`absolute top-[35%] left-[25%] w-2.5 h-2.5 rounded-full ${isLight ? 'bg-slate-200 border border-slate-300' : 'bg-slate-800 border border-cyan-700/60'}`} />
            <div className={`absolute top-[65%] left-[55%] w-3 h-3 rounded-full flex items-center justify-center shadow-md ${
              isLight ? 'bg-white border border-blue-400 text-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.2)]' : 'bg-[#1e293b] border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
            }`}>
              <div className={`w-1 h-1 rounded-full ${isLight ? 'bg-blue-600' : 'bg-cyan-400'}`} />
            </div>
            <div className={`absolute top-[75%] left-[30%] w-2 h-2 rounded-full ${isLight ? 'bg-slate-100 border border-slate-200' : 'bg-slate-900 border border-cyan-800'}`} />

            {/* Local Server Block */}
            <div className={`absolute bottom-4 right-5 border px-3 py-2.5 rounded-xl flex items-center gap-2.5 shadow-lg relative z-20 hover:scale-105 transition-transform duration-300 ${isLight ? 'bg-white border-blue-100 text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.03)]' : 'bg-slate-950/80 border-cyan-800/40'}`}>
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isLight ? 'bg-blue-50 border border-blue-200 text-blue-600' : 'bg-cyan-950/80 border-cyan-500/40 text-cyan-400'}`}>
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <div className="text-left font-mono">
                <span className="block text-[8px] uppercase text-slate-400 tracking-wider font-semibold">LOCAL DATA</span>
                <span className={`block text-[9px] font-bold ${isLight ? 'text-blue-600' : 'text-cyan-300'}`}>CHROMADB ACTIVE</span>
              </div>
            </div>
            
            <div className={`absolute top-4 left-5 px-3 py-1 border text-[10px] font-mono rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-md ${
              isLight ? 'bg-white/80 border-blue-200/60 text-blue-600 shadow-sm' : 'bg-cyan-550/10 border border-cyan-500/20 text-cyan-400'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isLight ? 'bg-blue-500' : 'bg-cyan-500'}`} />
              <span>Offline Embedding Engine</span>
            </div>
          </div>
        );

      case 1: // NotebookLM Obsidian Pipeline (Audio waves, headphones)
        return (
          <div className={`absolute inset-0 overflow-hidden flex items-center justify-center ${isLight ? 'bg-white' : 'bg-[#06040c]'}`}>
            {/* Ambient gradients */}
            <div className={`absolute inset-0 ${isLight ? 'bg-[radial-gradient(circle_at_right_bottom,rgba(99,102,241,0.08)_0%,transparent_60%)]' : 'bg-[radial-gradient(circle_at_right_bottom,rgba(168,85,247,0.15)_0%,transparent_60%)]'}`} />
            <div className={`absolute inset-0 ${isLight ? 'bg-[radial-gradient(circle_at_left_top,rgba(245,158,11,0.05)_0%,transparent_50%)]' : 'bg-[radial-gradient(circle_at_left_top,rgba(234,179,8,0.08)_0%,transparent_50%)]'}`} />

            {/* Conveyor track */}
            <div className={`absolute h-1.5 w-[75%] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center border ${
              isLight ? 'bg-slate-100 border-indigo-100' : 'bg-slate-900/90 border-purple-900/50'
            }`}>
              <div className="h-full bg-indigo-500/40 rounded-full animate-pulse w-[15%]" style={{ marginLeft: '10%' }} />
              <div className="h-full bg-indigo-500/40 rounded-full animate-pulse w-[25%]" style={{ marginLeft: '15%' }} />
            </div>

            {/* Moving documents */}
            <div className={`absolute top-[42%] left-[24%] p-2 rounded shadow-md w-12 hover:scale-105 transition-transform duration-300 flex flex-col justify-between border ${
              isLight ? 'bg-white border-blue-200' : 'bg-slate-900/90 border-amber-500/30'
            }`}>
              <div className={`w-full h-1 rounded mb-1 ${isLight ? 'bg-slate-200' : 'bg-slate-700/60'}`} />
              <div className={`w-3/4 h-1 rounded ${isLight ? 'bg-slate-100' : 'bg-slate-700/40'}`} />
            </div>

            <div className={`absolute top-[38%] left-[45%] p-2.5 rounded shadow-lg w-12 flex flex-col justify-between border ${
              isLight ? 'bg-white border-indigo-200' : 'bg-slate-900/90 border-purple-500/30'
            }`}>
              <div className={`w-full h-1 rounded mb-1 ${isLight ? 'bg-indigo-300' : 'bg-purple-500/50'}`} />
              <div className={`w-2/3 h-1 rounded ${isLight ? 'bg-slate-100' : 'bg-slate-700/30'}`} />
            </div>

            {/* Audio wave transformer */}
            <div className="absolute right-[18%] top-[38%] flex items-center gap-1 text-amber-550">
              <div className="w-1 h-3.5 bg-amber-550/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-1 h-7 bg-amber-550/80 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
              <div className="w-1 h-10 bg-amber-550 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="w-1 h-5 bg-amber-550/80 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-1 h-2 bg-amber-550/30 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>

            {/* Headphones symbol */}
            <div className={`absolute right-5 bottom-4 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer border ${
              isLight ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-purple-950/40 border-purple-500/30 text-purple-400'
            }`}>
              <Disc className="w-4 h-4 animate-spin-slow" />
            </div>

            <div className={`absolute top-4 left-5 px-3 py-1 border text-[10px] font-mono rounded-full flex items-center gap-1.5 backdrop-blur-sm self-start ${
              isLight ? 'bg-indigo-50/80 border-indigo-200/60 text-indigo-600 shadow-sm' : 'bg-purple-950/20 border-purple-500/20 text-purple-400'
            }`}>
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Obsidian Podcast Pipeline</span>
            </div>
          </div>
        );

      case 2: // Local AI Document Classification (Paperless, offline)
        return (
          <div className={`absolute inset-0 overflow-hidden flex items-center justify-center ${isLight ? 'bg-white' : 'bg-[#05090f]'}`}>
            {/* Ambient secure shadows */}
            <div className={`absolute inset-0 ${isLight ? 'bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06)_0%,transparent_65%)]' : 'bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_65%)]'}`} />

            {/* Swirling elements container */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Spinning/pulsing local hub */}
              <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center relative border ${
                isLight ? 'bg-slate-50 border-blue-250 shadow-[0_4px_15px_rgba(37,99,235,0.08)]' : 'bg-slate-950 border-blue-500/35 shadow-[0_0_20px_rgba(59,130,246,0.25)]'
              }`}>
                <div className="w-2 h-2 rounded-full bg-emerald-550 animate-ping absolute -top-1 -right-1" />
                <Shield className={`w-6 h-6 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
                <span className={`text-[7px] font-mono mt-1 uppercase ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>QWEN offline</span>
              </div>

              {/* Floating categorized items */}
              <div className={`absolute top-[18%] left-[26%] border p-2 rounded shadow-md w-14 hover:scale-105 transition-transform ${
                isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[6px] font-mono px-1 rounded ${isLight ? 'text-emerald-700 bg-emerald-50' : 'text-emerald-400 bg-emerald-950/70'}`}>DEUTSCH</span>
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                </div>
                <div className={`w-full h-1 rounded ${isLight ? 'bg-slate-200' : 'bg-slate-700/40'}`} />
              </div>

              <div className={`absolute bottom-[18%] left-[60%] border p-2 rounded shadow-md w-14 hover:scale-105 transition-transform ${
                isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[6px] font-mono px-1 rounded ${isLight ? 'text-blue-700 bg-blue-50' : 'text-cyan-400 bg-cyan-950/70'}`}>RECHNUNG</span>
                  <div className="w-1 h-1 rounded-full bg-blue-500" />
                </div>
                <div className={`w-full h-1 rounded ${isLight ? 'bg-slate-200' : 'bg-slate-700/40'}`} />
              </div>

              {/* Secure cloud block icon */}
              <div className={`absolute top-[28%] right-[22%] border px-2 py-1 rounded-lg flex items-center gap-1.5 text-red-550 hover:scale-105 transition-transform ${
                isLight ? 'bg-red-50 border-red-200/50 text-red-650' : 'bg-slate-950 border-red-50/20'
              }`}>
                <CloudOff className="w-3.5 h-3.5" />
                <span className="text-[8px] font-mono uppercase tracking-wider font-semibold">NO CLOUD</span>
              </div>
            </div>

            <div className={`absolute top-4 left-5 px-3 py-1 border text-[10px] font-mono rounded-full flex items-center gap-1.5 backdrop-blur-sm self-start ${
              isLight ? 'bg-blue-50/80 border-blue-200/60 text-blue-600 shadow-sm' : 'bg-blue-950/20 border-blue-500/20 text-blue-400'
            }`}>
              <Shield className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-blue-450'}`} />
              <span>100% GDPR Local Server</span>
            </div>
          </div>
        );

      case 3: // Change Management Prompt Library (Interactive browser mockup)
        return (
          <div className={`absolute inset-0 overflow-hidden flex items-center justify-center ${isLight ? 'bg-white' : 'bg-[#040c11]'}`}>
            {/* Grid layout decoration */}
            <div className={`absolute inset-0 bg-size-200 ${isLight ? 'bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.06)_0%,transparent_60%)]' : 'bg-[radial-gradient(ellipse_at_bottom,rgba(13,148,136,0.1)_0%,transparent_60%)]'}`} />

            <div className={`w-[82%] h-[68%] rounded-xl border flex flex-col overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 ${
              isLight ? 'bg-white border-blue-200' : 'bg-[#09151e]/80 border-teal-900/40'
            }`}>
              {/* Custom microbrowser header */}
              <div className={`border-b px-3 py-1.5 flex items-center justify-between ${
                isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#0b1b26] border-teal-950/40'
              }`}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500/40" />
                  <span className="w-2 h-2 rounded-full bg-blue-400/40" />
                  <span className="w-2 h-2 rounded-full bg-slate-400/40" />
                </div>
                <div className={`text-[7px] font-mono px-4 py-0.5 rounded-full w-28 text-center truncate ${
                  isLight ? 'bg-white border border-slate-200 text-blue-600' : 'bg-[#040c11] text-teal-400/60'
                }`}>
                  localhost:3000/prompts
                </div>
                <div className="w-3 h-3" />
              </div>

              {/* Interactive library cards mockup */}
              <div className="p-3 grid grid-cols-4 gap-2 flex-grow">
                {['Comm', 'Stake', 'Train', 'Coach'].map((col, cIdx) => (
                  <div key={col} className="space-y-1.5 text-left">
                    <span className={`block text-[7px] font-bold font-mono uppercase tracking-widest border-b pb-0.5 ${
                      isLight ? 'text-blue-600 border-slate-200' : 'text-teal-400 border-teal-900/30'
                    }`}>
                      {col}
                    </span>
                    <div className={`p-1 border rounded text-[6px] font-mono space-y-1 transition-all cursor-pointer ${
                      isLight ? 'bg-blue-50/50 border-blue-100/70 text-slate-500 hover:border-blue-400' : 'bg-teal-950/20 border-teal-900/20 text-slate-400 hover:border-teal-400/30'
                    }`}>
                      <div className={`w-3/4 h-1 rounded ${isLight ? 'bg-blue-500/30' : 'bg-teal-400/30'}`} />
                      <div className="w-11/12 h-1 bg-slate-300/20 rounded" />
                    </div>
                    <div className={`p-1 border rounded text-[6px] font-mono space-y-1 ${
                      isLight ? 'bg-slate-50 border-slate-100 text-slate-400' : 'bg-teal-950/10 border-teal-900/10 text-slate-400'
                    }`}>
                      <div className="w-1/2 h-1 bg-slate-200/40 rounded" />
                      <div className="w-10/12 h-1 bg-slate-200/20 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`absolute top-4 left-5 px-3 py-1 border text-[10px] font-mono rounded-full flex items-center gap-1.5 backdrop-blur-sm self-start ${
              isLight ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-teal-950/20 border-teal-500/20 text-teal-300'
            }`}>
              <span>Category Library</span>
            </div>
          </div>
        );

      default:
        return (
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-size-200 ${
            isLight ? 'bg-gradient-to-br from-blue-50 via-white to-slate-50' : 'bg-gradient-to-br from-cyan-950 via-[#0B1527] to-slate-900'
          }`}>
            <div className={`absolute inset-0 ${isLight ? 'bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_60%)]' : 'bg-[radial-gradient(ellipse_at_center,rgba(8,182,212,0.15),transparent_60%)]'}`} />
            <IconComponent className={`w-12 h-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10 ${isLight ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span className={`text-xs font-mono font-bold mt-3 uppercase tracking-wider relative z-10 ${isLight ? 'text-blue-600' : 'text-cyan-500'}`}>{isDe ? status : status}</span>
          </div>
        );
    }
  };

  return (
    <div className={`h-44 flex flex-col items-center justify-center relative overflow-hidden text-center bg-size-200 transition-all duration-300 border-b ${
      isLight 
        ? 'border-blue-100 group-hover:border-b-blue-400/30' 
        : 'border-cyan-950 group-hover:border-b-cyan-500/30'
    }`}>
      {imagePath && !hasError ? (
        <img
          src={imagePath}
          alt={isDe ? "Projekt Vorschau" : "Project Preview"}
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 pointer-events-none"
        />
      ) : (
        renderInteractiveFallback()
      )}

      {/* Absolute visual tags overlaying in front */}
      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1 justify-center z-25">
        {tags.map((tg, i) => (
          <span key={i} className={`px-2 py-0.5 text-[9.5px] rounded-md font-mono border shadow-sm backdrop-blur-xs ${
            isLight 
              ? 'bg-white/95 text-blue-600 border-blue-200/60' 
              : 'bg-[#050C19]/90 text-[#38bdf8] border-cyan-900/40'
          }`}>
            {tg}
          </span>
        ))}
      </div>
    </div>
  );
}
