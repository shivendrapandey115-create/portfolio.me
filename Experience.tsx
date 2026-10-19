import React, { useState } from 'react';
import { ExperienceItem, EducationItem } from '../types';
import { Briefcase, GraduationCap, Calendar, MapPin, School, BookOpen } from 'lucide-react';

interface ExperienceProps {
  experience: ExperienceItem[];
  education: EducationItem[];
  showExperience?: boolean;
  showEducation?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({
  experience,
  education,
  showExperience = true,
  showEducation = true,
}) => {
  const hasExp = showExperience && experience && experience.length > 0;
  const hasEdu = showEducation && education && education.length > 0;

  // If both are hidden or empty, do not render the section at all
  if (!hasExp && !hasEdu) {
    return null;
  }

  const [activeTab, setActiveTab] = useState<'experience' | 'education'>(
    hasExp ? 'experience' : 'education'
  );

  return (
    <section
      id="education"
      aria-label="Education & Experience Section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
    >
      {/* Anchor for backward compatibility if user clicks #experience */}
      <div id="experience" className="-mt-24 pt-24" />

      {/* Header */}
      <div className="space-y-2 mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-mono uppercase tracking-wider">
          <GraduationCap size={13} />
          <span>{hasExp ? '04. Career & Education' : '04. Academic Background'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          {hasExp ? 'Experience & Education' : 'Education & Academic Journey'}
        </h2>
        <p className="text-foreground-muted text-sm sm:text-base max-w-2xl">
          {hasExp
            ? 'A structured timeline of professional engineering positions and academic credentials.'
            : 'Academic education, degree pursuit, and computer science foundations.'}
        </p>
      </div>

      {/* Tabs if both exist */}
      {hasExp && hasEdu && (
        <div className="flex items-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('experience')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-accent text-white shadow-glow-subtle'
                : 'bg-[#17171B] text-foreground-muted hover:text-white border border-white/[0.06]'
            }`}
          >
            <Briefcase size={15} />
            <span>Work Experience ({experience.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-accent text-white shadow-glow-subtle'
                : 'bg-[#17171B] text-foreground-muted hover:text-white border border-white/[0.06]'
            }`}
          >
            <GraduationCap size={15} />
            <span>Education ({education.length})</span>
          </button>
        </div>
      )}

      {/* Timeline Content */}
      <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-12 max-w-4xl">
        {activeTab === 'experience' &&
          experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111114] border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all shadow-glow-subtle" />

              <div className="p-6 rounded-2xl bg-[#17171B]/70 border border-white/[0.06] hover:border-accent/30 transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-accent-light">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A1A1AA]">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111114] border border-white/[0.04]">
                      <Calendar size={13} className="text-accent" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111114] border border-white/[0.04]">
                        <MapPin size={13} className="text-zinc-500" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-foreground-muted pt-2 leading-relaxed">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-accent mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        {activeTab === 'education' &&
          education.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111114] border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all shadow-glow-subtle" />

              <div className="p-6 sm:p-7 rounded-2xl bg-[#17171B]/80 border border-white/[0.08] hover:border-accent/30 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 text-accent-light text-xs font-mono">
                      <BookOpen size={11} />
                      <span>{item.currentYear || 'Second Year'}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight pt-1">
                      {item.degree}
                    </h3>
                    <div className="text-sm font-semibold text-accent-light flex items-center gap-1.5">
                      <School size={15} />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111114] border border-white/[0.04]">
                      <Calendar size={13} className="text-accent" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111114] border border-white/[0.04]">
                        <MapPin size={13} className="text-zinc-500" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {item.details && item.details.length > 0 && (
                  <ul className="space-y-2.5 text-sm text-foreground-muted pt-2 leading-relaxed border-t border-white/[0.04]">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-accent mt-1">▹</span>
                        <span className="text-zinc-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
