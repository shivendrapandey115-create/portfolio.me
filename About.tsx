import React from 'react';
import { PersonalInfo, PhilosophyPillar } from '../types';
import { Layers, Zap, Target, MapPin, Compass, GraduationCap, School } from 'lucide-react';

interface AboutProps {
  personal: PersonalInfo;
  philosophy: PhilosophyPillar[];
  highlights: { label: string; value: string; subtext?: string }[];
}

export const About: React.FC<AboutProps> = ({ personal, philosophy, highlights }) => {
  const getPhilosophyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="text-accent" size={20} />;
      case 'Zap':
        return <Zap className="text-accent" size={20} />;
      case 'Target':
        return <Target className="text-accent" size={20} />;
      default:
        return <Compass className="text-accent" size={20} />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
    >
      {/* Section Header */}
      <div className="space-y-2 mb-14 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-mono uppercase tracking-wider">
          <span>01. Who I Am</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          About Me & Academic Journey
        </h2>
        <p className="text-foreground-muted text-sm sm:text-base max-w-2xl">
          A dedicated B.Tech student focused on programming fundamentals, algorithmic problem solving, and intelligent technology.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Authentic Bio & Philosophy Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-foreground-muted leading-relaxed text-sm sm:text-base">
            {personal.longBio.map((paragraph, index) => (
              <p key={index} className="text-zinc-300/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Location, College & Status Info Bar */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#17171B]/70 border border-white/[0.06] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                <School size={18} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#A1A1AA]">Institution</div>
                <div className="text-sm font-medium text-white mt-0.5">
                  GL Bajaj Institute of Tech & Mgmt
                </div>
                <div className="text-[11px] text-zinc-400">Greater Noida, UP</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#17171B]/70 border border-white/[0.06] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <GraduationCap size={18} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#A1A1AA]">Current Degree & Year</div>
                <div className="text-sm font-medium text-white mt-0.5">B.Tech — Second Year</div>
                <div className="text-[11px] text-zinc-400">Pursuing undergraduate degree</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#17171B]/70 border border-white/[0.06] flex items-start gap-3 sm:col-span-2">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#A1A1AA]">Location & Career Goal</div>
                <div className="text-sm font-medium text-white mt-0.5">
                  {personal.location}
                </div>
                <div className="text-[11px] text-accent-light">
                  Long-term goal: Become an AI/ML Engineer
                </div>
              </div>
            </div>
          </div>

          {/* What I Enjoy Building & Practicing */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#17171B] to-[#121216] border border-white/[0.08] space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-accent-light">
              What I Enjoy Building & Exploring
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="text-accent">▹</span> Python practice & logic games
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">▹</span> Data Structures & Algorithms
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">▹</span> Safe Tour OS tourist safety concept
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">▹</span> Personal AI conversational assistant
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Key Principles & Highlights */}
        <div className="lg:col-span-5 space-y-4">
          {/* Student Profile Identity Card */}
          <div className="p-4 rounded-2xl bg-[#17171B]/80 border border-white/[0.08] flex items-center gap-4 shadow-lg mb-2">
            <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent/50 p-0.5 bg-gradient-to-tr from-accent to-purple-600 flex-shrink-0">
              <img
                src={personal.avatarUrl || "/profile.png"}
                alt={personal.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-white truncate">{personal.name}</div>
              <div className="text-xs text-accent-light font-mono truncate">B.Tech Student • Second Year</div>
              <div className="text-[11px] text-zinc-400 truncate">GL Bajaj ITM, Greater Noida</div>
            </div>
          </div>

          {/* Highlight Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#17171B] border border-white/[0.06] text-center"
              >
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-[11px] font-mono text-accent-light mt-0.5">
                  {item.label}
                </div>
                {item.subtext && (
                  <div className="text-[10px] text-zinc-500 truncate mt-0.5">
                    {item.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3">
            Core Learning Principles
          </h3>

          {/* Philosophy Cards */}
          <div className="space-y-3.5">
            {philosophy.map((pillar, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#17171B]/60 hover:bg-[#1C1C22] border border-white/[0.06] hover:border-accent/30 transition-all duration-200 space-y-2 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover:scale-105 transition-transform">
                    {getPhilosophyIcon(pillar.icon)}
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed pl-1">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
