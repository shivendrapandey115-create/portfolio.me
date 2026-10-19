import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { ProjectPreview } from './ProjectPreview';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Extract distinct categories
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
    >
      {/* Header */}
      <div className="space-y-2 mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-mono uppercase tracking-wider">
          <Sparkles size={12} />
          <span>03. Projects & Concepts</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Featured Projects & Concepts
        </h2>
        <p className="text-foreground-muted text-sm sm:text-base max-w-2xl">
          Concepts, early prototypes, and programming practice projects that combine technology with practical solutions.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
              selectedCategory === category
                ? 'bg-accent text-white shadow-glow-subtle'
                : 'bg-[#17171B] text-foreground-muted hover:text-white border border-white/[0.06]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl bg-[#17171B]/70 border border-white/[0.08] hover:border-accent/40 flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
          >
            {/* Top Interactive Preview */}
            <div
              className="cursor-pointer relative"
              onClick={() => setActiveModalProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <ProjectPreview variant={project.previewVariant} title={project.title} />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/90 text-white text-xs font-medium font-mono shadow-lg backdrop-blur-sm">
                  <Eye size={13} /> View Concept & Architecture
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent-light border border-accent/25">
                    {project.category}
                  </span>
                  {project.statusBadge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {project.statusBadge}
                    </span>
                  )}
                </div>

                <h3
                  onClick={() => setActiveModalProject(project)}
                  className="text-lg font-bold text-white tracking-tight group-hover:text-accent-light transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-foreground-muted line-clamp-3 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#212128] text-zinc-300 border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#212128] text-zinc-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Actions Footer */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Concept Details</span>
                    <ArrowUpRight size={13} className="text-accent" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source profile for ${project.title}`}
                        className="p-1.5 rounded-md text-foreground-muted hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="p-1.5 rounded-md text-foreground-muted hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
