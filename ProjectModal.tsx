import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, AlertCircle, Sparkles } from 'lucide-react';
import { ProjectPreview } from './ProjectPreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#17171B] border border-white/[0.12] rounded-2xl shadow-2xl z-10 text-foreground animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-[#111114]/80 text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors border border-white/[0.08]"
        >
          <X size={18} />
        </button>

        {/* Project Preview Banner */}
        <ProjectPreview variant={project.previewVariant} title={project.title} />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/15 text-accent-light border border-accent/25">
                {project.category}
              </span>
              {project.statusBadge && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25">
                  {project.statusBadge}
                </span>
              )}
            </div>
            <h2 id="modal-title" className="text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-sm text-foreground-muted mt-2 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Metrics / Status if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#111114] border border-white/[0.06]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-base sm:text-lg font-bold font-mono text-accent-light">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-[#A1A1AA] uppercase tracking-wider font-mono mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Honest Status & Development Scope Disclaimer */}
          {project.disclaimer && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200/90 text-xs flex items-start gap-2.5">
              <AlertCircle size={15} className="mt-0.5 flex-shrink-0 text-amber-400" />
              <div className="leading-relaxed">{project.disclaimer}</div>
            </div>
          )}

          {/* Key Concept / Core Features */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-accent" /> Key Concept & Features
            </h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5">▹</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Planned Features (if any) */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2.5 flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-400" /> Planned Learning Milestones
              </h3>
              <ul className="space-y-1.5 text-xs text-zinc-400">
                {project.plannedFeatures.map((pFeat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400/80">○</span>
                    <span>{pFeat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies & Focus */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2.5 flex items-center gap-1.5">
              <Cpu size={14} className="text-accent" /> Technologies & Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#212128] text-zinc-300 border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2.5 flex items-center gap-1.5">
                <BarChart3 size={14} className="text-accent" /> Architectural Design
              </h3>
              <ul className="space-y-1.5 text-xs font-mono text-zinc-400 bg-[#111114] p-3.5 rounded-xl border border-white/[0.06]">
                {project.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-zinc-600">•</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors shadow-glow-subtle"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#212128] hover:bg-[#2A2A33] text-white border border-white/[0.08] transition-colors"
                >
                  <ExternalLink size={15} />
                  <span>Demo Link</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#A1A1AA] hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
