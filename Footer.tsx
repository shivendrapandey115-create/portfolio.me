import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter, Sparkles } from 'lucide-react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personal: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0E0E11] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Statement */}
        <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-semibold tracking-tight text-white">
              {personal.name}
            </span>
          </div>
          <p className="text-xs text-foreground-muted">
            Second-year B.Tech Student at GL Bajaj ITM • Aspiring AI/ML Engineer.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#17171B] text-foreground-muted hover:text-white hover:bg-[#202026] border border-white/[0.04] transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#17171B] text-foreground-muted hover:text-white hover:bg-[#202026] border border-white/[0.04] transition-colors"
            >
              <Linkedin size={16} />
            </a>
          )}
          {personal.twitter && (
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter Profile"
              className="p-2 rounded-lg bg-[#17171B] text-foreground-muted hover:text-white hover:bg-[#202026] border border-white/[0.04] transition-colors"
            >
              <Twitter size={16} />
            </a>
          )}
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-[#17171B] text-foreground-muted hover:text-white hover:bg-[#202026] border border-white/[0.04] transition-colors"
            >
              <Mail size={16} />
            </a>
          )}
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#71717A]">
          <span>© {currentYear} {personal.name}. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-[#17171B] text-[#A1A1AA] hover:text-white hover:bg-[#202026] border border-white/[0.04] transition-colors flex items-center gap-1 group"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
