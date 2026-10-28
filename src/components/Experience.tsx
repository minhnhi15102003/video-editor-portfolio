import React from 'react';
import { experiences } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-white rgb-underline">
              KINH NGHIỆM LÀM VIỆC
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm mt-4 max-w-xl mx-auto">
            Hành trình thực chiến sản xuất nội dung YouTube đa dạng, video bất động sản và tư duy công nghệ
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-zinc-800">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              } gap-6 md:gap-12 group`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#030305] border-2 border-brand-purple flex items-center justify-center z-10 shadow-lg shadow-purple-600/30 group-hover:scale-110 transition">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-purple"></span>
              </div>

              {/* Content Card */}
              <div className="ml-10 md:ml-0 md:w-1/2 p-6 sm:p-8 bg-zinc-950/90 border border-zinc-800/80 hover:border-brand-purple transition duration-300 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-0.5 rounded">
                    {exp.duration}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{exp.period}</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  {exp.company}
                </h3>
                <h4 className="text-sm font-semibold text-purple-300 mb-4">
                  {exp.role}
                </h4>

                <ul className="space-y-2 text-xs text-zinc-300 font-normal">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2">
                      <i className="fa-solid fa-angle-right text-brand-purple mt-0.5 text-[11px] shrink-0"></i>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Projects developed / managed */}
                {exp.projects && (
                  <div className="mt-5 pt-4 border-t border-zinc-900 space-y-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Các kênh đã quản lý & phát triển:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((proj, pIdx) => (
                        <a
                          key={pIdx}
                          href={proj.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1.5 text-[11px] font-mono bg-zinc-900 hover:bg-brand-purple hover:text-white text-zinc-300 px-2.5 py-1 rounded border border-zinc-800 transition"
                        >
                          <i className="fa-brands fa-youtube text-red-500"></i>
                          <span>{proj.name}</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-[9px] ml-1"></i>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

