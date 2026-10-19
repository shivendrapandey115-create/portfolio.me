import React, { useState } from 'react';
import { SkillCategory } from '../types';
import { 
  Atom, 
  FileCode2, 
  Globe, 
  Palette, 
  Code, 
  Layout, 
  Server, 
  Cpu, 
  Network, 
  ShieldCheck, 
  FileJson, 
  Terminal, 
  Database, 
  FolderGit2, 
  Zap, 
  Layers, 
  GitBranch, 
  Box, 
  Package, 
  CheckCircle, 
  TerminalSquare,
  Wrench
} from 'lucide-react';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Map icon names safely
  const renderSkillIcon = (iconName: string) => {
    const props = { size: 18, className: 'text-accent group-hover:text-accent-light transition-colors' };
    switch (iconName) {
      case 'Atom': return <Atom {...props} />;
      case 'FileCode2': return <FileCode2 {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Network': return <Network {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'FileJson': return <FileJson {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Database': return <Database {...props} />;
      case 'FolderGit2': return <FolderGit2 {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Package': return <Package {...props} />;
      case 'CheckCircle': return <CheckCircle {...props} />;
      case 'TerminalSquare': return <TerminalSquare {...props} />;
      default: return <Wrench {...props} />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      aria-label="Skills & Technologies Section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
    >
      {/* Header */}
      <div className="space-y-2 mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-mono uppercase tracking-wider">
          <span>02. Technical Focus</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Skills & Current Learning Focus
        </h2>
        <p className="text-foreground-muted text-sm sm:text-base max-w-2xl">
          An honest overview of languages and concepts I am actively practicing and studying as a second-year B.Tech student.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
            selectedCategory === 'all'
              ? 'bg-accent text-white shadow-glow-subtle'
              : 'bg-[#17171B] text-foreground-muted hover:text-white border border-white/[0.06]'
          }`}
        >
          All Skills ({categories.reduce((acc, cat) => acc + cat.skills.length, 0)})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
              selectedCategory === cat.id
                ? 'bg-accent text-white shadow-glow-subtle'
                : 'bg-[#17171B] text-foreground-muted hover:text-white border border-white/[0.06]'
            }`}
          >
            {cat.name} ({cat.skills.length})
          </button>
        ))}
      </div>

      {/* Categories & Skills Grid */}
      <div className="space-y-10">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {category.name}
              </h3>
              <div className="h-px flex-1 bg-white/[0.06]" />
              {category.description && (
                <span className="hidden sm:inline-block text-xs font-mono text-zinc-500">
                  {category.description}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#17171B]/70 hover:bg-[#1E1E24] border border-white/[0.06] hover:border-accent/30 transition-all duration-200 group flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-lg bg-[#111114] border border-white/[0.06] group-hover:scale-105 transition-transform flex-shrink-0">
                    {renderSkillIcon(skill.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white truncate group-hover:text-accent-light transition-colors">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#111114] text-zinc-400 border border-white/[0.05] whitespace-nowrap">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-foreground-muted mt-1 leading-relaxed truncate">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
