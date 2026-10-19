import React from 'react';
import { ShieldAlert, Bot, Gamepad2, MapPin, Terminal, Activity, Radio, Cpu } from 'lucide-react';

interface ProjectPreviewProps {
  variant: 'safetour' | 'ai-assistant' | 'python-games' | 'custom' | string;
  title: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ variant, title }) => {
  return (
    <div className="relative w-full h-48 sm:h-56 bg-[#121216] overflow-hidden rounded-t-xl border-b border-white/[0.06] select-none group-hover:border-accent/30 transition-colors">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity" />

      {/* Browser / App Header bar */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-[#17171B]/90 backdrop-blur border-b border-white/[0.06] px-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="text-[11px] font-mono text-[#71717A] tracking-wider truncate max-w-[200px]">
          {title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.concept
        </div>
        <div className="flex items-center gap-1 text-[#71717A]">
          <Activity size={11} className="text-accent/80 animate-pulse" />
        </div>
      </div>

      {/* Inner Preview Content depending on variant */}
      <div className="pt-9 p-4 h-full flex flex-col justify-between">
        {/* Variant 1: Safe Tour OS */}
        {variant === 'safetour' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-red-500/15 border border-red-500/25 flex items-center justify-center text-red-400">
                  <ShieldAlert size={15} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Safe Tour OS</div>
                  <div className="text-[10px] font-mono text-[#A1A1AA] flex items-center gap-1">
                    <MapPin size={10} className="text-red-400" />
                    <span>Location Permission: Granted</span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25 flex items-center gap-1">
                <Radio size={10} className="animate-pulse" />
                Prototype
              </span>
            </div>

            {/* Emergency SOS Button & Location Mockup */}
            <div className="bg-[#18181D] border border-white/[0.05] p-2.5 rounded-xl flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-zinc-400">PROPOSED WORKFLOW</div>
                <div className="text-xs font-medium text-zinc-200">
                  Identify Nearest Authority
                </div>
                <div className="text-[10px] font-mono text-emerald-400">
                  Coordinates: 28.474° N, 77.504° E
                </div>
              </div>

              {/* SOS Button Mockup */}
              <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 border border-red-400/40 text-white text-xs font-bold font-mono tracking-wider shadow-lg shadow-red-900/30 flex items-center gap-1.5 animate-pulse">
                <span>SOS</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-0.5">
              <span>TOURIST SAFETY CONCEPT</span>
              <span className="text-zinc-400">IN DEVELOPMENT</span>
            </div>
          </div>
        )}

        {/* Variant 2: Personal AI Assistant */}
        {variant === 'ai-assistant' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent-light">
                  <Bot size={15} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">AI Assistant Concept</div>
                  <div className="text-[10px] font-mono text-[#A1A1AA]">Conversational & PC Tasks</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
                Early Prototype
              </span>
            </div>

            {/* Dialogue bubble preview */}
            <div className="space-y-1.5 pt-0.5">
              <div className="bg-[#18181D] border border-white/[0.04] p-2 rounded-lg text-[11px] text-zinc-300">
                <span className="text-accent font-mono text-[10px] font-semibold block">USER PROMPT</span>
                "Summarize binary search logic and open notes"
              </div>
              <div className="bg-[#202028] border border-accent/20 p-2 rounded-lg text-[11px] text-zinc-200">
                <span className="text-emerald-400 font-mono text-[10px] font-semibold flex items-center gap-1">
                  <Cpu size={10} /> AI RESPONSE CONCEPT
                </span>
                Binary search divides sorted arrays in O(log n) time.
              </div>
            </div>
          </div>
        )}

        {/* Variant 3: Small Python Games */}
        {variant === 'python-games' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <Gamepad2 size={15} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Python Logic Games</div>
                  <div className="text-[10px] font-mono text-[#A1A1AA]">Tic-Tac-Toe • Guessing • Snake</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                Practice
              </span>
            </div>

            {/* Mini Python Terminal Mockup */}
            <div className="bg-[#141418] border border-white/[0.05] p-2 rounded-lg font-mono text-[10.5px] space-y-1 text-zinc-300">
              <div className="text-accent flex items-center gap-1.5">
                <Terminal size={11} />
                <span>$ python3 games_menu.py</span>
              </div>
              <div className="text-zinc-400 pl-2">
                [1] Tic-Tac-Toe (Grid Logic)<br />
                [2] Guessing Game (Loops)<br />
                [3] Snake Game (Coordinates)
              </div>
              <div className="text-emerald-400 pl-2">
                &gt; Selection: Running logic simulation...
              </div>
            </div>
          </div>
        )}

        {/* Custom / Fallback */}
        {variant !== 'safetour' && variant !== 'ai-assistant' && variant !== 'python-games' && (
          <div className="h-full flex flex-col justify-center space-y-2 font-mono text-[11px]">
            <div className="flex items-center gap-2 text-accent">
              <Terminal size={14} />
              <span>~/learning/python</span>
            </div>
            <div className="bg-[#18181D] p-2.5 rounded border border-white/[0.05] text-[#A1A1AA] space-y-1">
              <div><span className="text-purple-400">def</span> solve_problem(input_data):</div>
              <div className="text-zinc-500">    # Implementing clean algorithmic logic</div>
            </div>
          </div>
        )}
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#17171B] via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>
  );
};
