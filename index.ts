export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  shortBio: string;
  longBio: string[];
  location: string;
  college?: string;
  year?: string;
  careerGoal?: string;
  status: string;
  isAvailable: boolean;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl?: string;
  avatarUrl?: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
  description?: string;
  level?: string; // Honest context like "Currently practicing", "Area of interest", "Career goal" - NO percentage bars
}

export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
  skills: SkillItem[];
}

export interface ProjectStats {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  statusBadge?: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  plannedFeatures?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  previewVariant: 'safetour' | 'ai-assistant' | 'python-games' | 'custom' | string;
  architecture?: string[];
  metrics?: ProjectStats[];
  disclaimer?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies?: string[];
  type: 'work' | 'internship' | 'freelance' | 'academic';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  currentYear?: string;
  details?: string[];
}

export interface PhilosophyPillar {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: {
    philosophy: PhilosophyPillar[];
    highlights: { label: string; value: string; subtext?: string }[];
  };
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  settings: {
    showExperience: boolean;
    showEducation: boolean;
    enableContactForm: boolean;
  };
}
