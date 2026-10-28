import React from 'react';
import { skillsSoftware, coreTechniques } from '../data/resumeData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-zinc-900 bg-[#06060b] relative overflow-hidden">
      {/* Ambient Purple Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-[450px] h-[450px] bg-brand-purple/15 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-white rgb-underline">
              MY SKILLS
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm mt-4 max-w-xl mx-auto">
            Các công cụ phần mềm hậu kỳ và kỹ thuật biên tập video thực chiến được tôi rèn luyện qua các dự án thực tế.
          </p>
        </div>

        {/* Part 1: Software Stack Grid */}
        <div className="mb-16">
          <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center space-x-2">
            <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
            <span>Phần Mềm & Công Cụ Sản Xuất</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsSoftware.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/80 border border-zinc-800/80 hover:border-brand-purple transition duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {/* Software Badge / Icon */}
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-heading font-black text-xl text-white shadow-lg group-hover:scale-105 transition" style={{ borderColor: `${skill.color}66` }}>
                        {skill.icon === 'palette' ? (
                          <i className="fa-solid fa-palette text-amber-400 text-lg"></i>
                        ) : skill.icon === 'sparkles' ? (
                          <i className="fa-solid fa-wand-magic-sparkles text-purple-400 text-lg"></i>
                        ) : (
                          <span style={{ color: skill.color }}>{skill.icon}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-bold text-white group-hover:text-brand-purple transition">
                          {skill.title}
                        </h4>
                        <span className="text-[11px] font-mono text-zinc-400">{skill.subtitle}</span>
                      </div>
                    </div>
                    <span className="text-xs font-heading font-bold text-brand-purple">{skill.percentage}%</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-purple to-purple-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Core Editing Techniques */}
        <div>
          <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center space-x-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            <span>Tư Duy Biên Tập & Tối Ưu Giữ Chân Khán Giả</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTechniques.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-900/40 border border-zinc-800/60 relative group hover:border-zinc-700 transition"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                  style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                >
                  <i className={tech.icon}></i>
                </div>
                <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {tech.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

