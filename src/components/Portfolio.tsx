import React, { useState } from 'react';
import { portfolioProjects, personalInfo } from '../data/resumeData';
import { ProjectItem } from '../types';

interface PortfolioProps {
  onPlayVideo: (youtubeId: string, title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onPlayVideo }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 border-t border-zinc-900 bg-[#040407] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block mb-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-white rgb-underline">
                MY BEST EDITS
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Các sản phẩm video thực tế đã xuất bản cho Nhà Tốt và các kênh YouTube quản lý.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition rounded-none ${
                activeFilter === 'all'
                  ? 'bg-brand-purple text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Tất Cả ({portfolioProjects.length})
            </button>
            <button
              onClick={() => setActiveFilter('real-estate')}
              className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition rounded-none ${
                activeFilter === 'real-estate'
                  ? 'bg-brand-purple text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Nhà Tốt (BĐS)
            </button>
            <button
              onClick={() => setActiveFilter('remix')}
              className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition rounded-none ${
                activeFilter === 'remix'
                  ? 'bg-brand-purple text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Remix & Âm Nhạc
            </button>
            <button
              onClick={() => setActiveFilter('worship')}
              className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition rounded-none ${
                activeFilter === 'worship'
                  ? 'bg-brand-purple text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Thư Giãn / Worship
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group bg-zinc-950 border border-zinc-800/90 hover:border-brand-purple transition duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Thumbnail Container */}
              <div
                className="relative aspect-video overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => {
                  if (project.youtubeId) {
                    onPlayVideo(project.youtubeId, project.title);
                  } else if (project.url) {
                    window.open(project.url, '_blank');
                  }
                }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl shadow-2xl transform group-hover:scale-110 transition duration-300">
                    <i className="fa-solid fa-play ml-1 text-zinc-950"></i>
                  </span>
                </div>

                {/* Badge Category */}
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-purple-300 px-2.5 py-1 border border-zinc-700">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-brand-purple transition leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 pt-3 border-t border-zinc-900 flex flex-wrap gap-1.5 items-center justify-between text-[11px] font-mono text-zinc-500">
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded text-[10px]">
                        #{h}
                      </span>
                    ))}
                  </div>
                  {project.youtubeId ? (
                    <span className="text-brand-purple font-semibold flex items-center space-x-1 cursor-pointer" onClick={() => onPlayVideo(project.youtubeId!, project.title)}>
                      <span>Xem clip</span>
                      <i className="fa-solid fa-play text-[9px]"></i>
                    </span>
                  ) : (
                    <a href={project.url} target="_blank" rel="noreferrer" className="text-brand-purple font-semibold flex items-center space-x-1">
                      <span>Mở kênh</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Drive Daily Vlog Banner from CV */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-purple-950/40 via-zinc-900/60 to-zinc-950 border border-brand-purple/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-purple/20 border border-brand-purple text-brand-purple flex items-center justify-center text-2xl shrink-0">
              <i className="fa-brands fa-google-drive"></i>
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-white">Thư Mục Daily Vlog & Video Thực Tế (Google Drive)</h4>
              <p className="text-xs text-zinc-400 mt-1">
                Xem toàn bộ các video vlog thường nhật và footage sản phẩm hoàn thiện được lưu trữ trực tiếp trên Drive.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.driveVlogUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-brand-purple hover:bg-brand-purpleHover text-white font-heading font-bold text-xs uppercase tracking-wider whitespace-nowrap transition shadow-lg shadow-purple-600/30 flex items-center space-x-2"
          >
            <span>Mở Drive Daily Vlog</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

