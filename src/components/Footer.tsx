import React from 'react';
import { personalInfo } from '../data/resumeData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-zinc-900 text-center text-xs text-zinc-500 font-mono">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 {personalInfo.name} &bull; Professional Video Editor Portfolio</p>
        <p className="text-[11px] text-zinc-600">Built with React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
};

