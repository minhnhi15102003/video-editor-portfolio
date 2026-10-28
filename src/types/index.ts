export interface ProjectItem {
  id: string;
  title: string;
  category: 'real-estate' | 'remix' | 'worship' | 'vlog' | 'youtube';
  categoryLabel: string;
  youtubeId?: string;
  url?: string;
  thumbnail: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  period?: string;
  description: string[];
  projects?: {
    name: string;
    url: string;
  }[];
}

export interface SkillCategory {
  title: string;
  percentage: number;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

export interface EducationItem {
  school: string;
  major: string;
  period: string;
  description: string[];
}

