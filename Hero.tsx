import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code, Sparkles, Check, Copy } from 'lucide-react';
import { PersonalInfo } from '../types';

interface HeroProps {
  personal: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'concepts' | 'terminal'>('profile');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Top Ambient Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] radial-glow-top pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 radial-glow-subtle pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio, and Call to Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Profile Photo & Availability Status Card */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
            <div className="relative group flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-accent via-purple-600 to-indigo-500 shadow-glow-accent group-hover:scale-105 transition-all duration-300">
                <img
                  src={personal.avatarUrl || "/profile.png"}
                  alt={personal.name}
                  className="w-full h-full rounded-full object-cover bg-[#17171B] border-2 border-[#0A0A0B]"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0A0A0B] shadow-sm flex items-center justify-center" title="Active student">
                <span className="w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17171B]/90 border border-white/[0.08] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-zinc-300">
                  {personal.status}
                </span>
              </div>
              <div className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1.5">
                <span>📍 GL Bajaj ITM, Greater Noida</span>
              </div>
            </div>
          </div>

          {/* Main Name Heading & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-white via-zinc-200 to-[#A78BFA] bg-clip-text text-transparent">
                {personal.name}
              </span>
              <span className="text-accent animate-pulse">.</span>
            </h1>
            <p className="text-base sm:text-lg font-medium text-accent-light/90">
              {personal.title}
            </p>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl leading-relaxed">
            {personal.shortBio}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-accent hover:bg-accent-hover text-white shadow-glow-accent transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Explore My Projects</span>
              <ArrowDown size={15} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#17171B] hover:bg-[#202026] text-white border border-white/[0.1] hover:border-accent/40 transition-all duration-200"
            >
              <Mail size={15} className="text-accent" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Profiles & Quick Contact */}
          <div className="pt-4 flex items-center gap-4 text-foreground-muted border-t border-white/[0.06]">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Connect:</span>
            
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Github size={18} />
              </a>
            )}

            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}

            <button
              onClick={handleCopyEmail}
              aria-label="Copy Email address"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md hover:text-white hover:bg-white/[0.06] border border-white/[0.06] transition-colors"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>{personal.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Visual Terminal Card */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl bg-[#111114] border border-white/[0.08] shadow-2xl overflow-hidden glass-card">
            {/* Terminal Top Window Chrome */}
            <div className="px-4 py-3 bg-[#17171B]/90 border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Window Tabs */}
              <div className="flex items-center gap-1 bg-[#0A0A0B] p-0.5 rounded-lg border border-white/[0.04] text-[11px] font-mono">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-[#1F1F24] text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  profile.py
                </button>
                <button
                  onClick={() => setActiveTab('concepts')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'concepts'
                      ? 'bg-[#1F1F24] text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  focus.json
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'terminal'
                      ? 'bg-[#1F1F24] text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  bash
                </button>
              </div>

              <div className="text-zinc-600">
                <Code size={14} />
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 min-h-[300px]">
              {activeTab === 'profile' && (
                <div className="space-y-1.5">
                  <div className="text-zinc-500"># Python & DSA Student Profile</div>
                  <div>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-blue-300">StudentEngineer</span>:
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">name</span> ={' '}
                    <span className="text-emerald-300">"{personal.name}"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">college</span> ={' '}
                    <span className="text-emerald-300">"GL Bajaj ITM, Greater Noida"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">year</span> ={' '}
                    <span className="text-emerald-300">"2nd Year B.Tech"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">learning</span> = [
                    <span className="text-amber-200">"Python"</span>,{' '}
                    <span className="text-amber-200">"Data Structures & Algorithms"</span>]
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">career_goal</span> ={' '}
                    <span className="text-accent-light">"AI/ML Engineer"</span>
                  </div>
                  <div className="pt-2 text-zinc-500">
                    <span className="text-accent animate-pulse">▋</span> Practicing problem-solving daily...
                  </div>
                </div>
              )}

              {activeTab === 'concepts' && (
                <div className="space-y-1.5">
                  <div className="text-zinc-500">&#47;* Current Exploration & Projects *&#47;</div>
                  <div>&#123;</div>
                  <div className="pl-4">
                    <span className="text-blue-300">"student"</span>: <span className="text-emerald-300">"Shivendra Pandey"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">"focus"</span>: <span className="text-emerald-300">"Practical Technology & AI"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">"projects"</span>: [
                  </div>
                  <div className="pl-8 text-amber-200">
                    "Safe Tour OS (Tourist Safety)",<br />
                    "Personal AI Assistant (PC Tasks)",<br />
                    "Small Python Games (DSA Practice)"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-blue-300">"careerAspiration"</span>: <span className="text-emerald-400">"AI/ML Engineer"</span>
                  </div>
                  <div>&#125;</div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Terminal size={13} className="text-emerald-400" />
                    <span>~&#47;python&#47;dsa $ python3 practice_runner.py</span>
                  </div>
                  <div className="text-emerald-400 text-xs">
                    [+] Running Python DSA & Logic Test Suite...<br />
                    [✓] Array operations & linear search: PASS<br />
                    [✓] Tic-Tac-Toe grid validation: PASS<br />
                    [✓] Condition loops & game logic: PASS
                  </div>
                  <div className="text-accent-light pt-2 flex items-center gap-2">
                    <Sparkles size={13} />
                    <span>Continuously improving programming fundamentals.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Footer status strip */}
            <div className="px-4 py-2 bg-[#0E0E11] border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Python 3.12 / DSA Active
              </span>
              <span>UTF-8 • GL Bajaj ITM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
