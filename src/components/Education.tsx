import React from 'react';
import { education } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-zinc-900 bg-[#030305]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white rgb-underline">
              HỌC VẤN & NỀN TẢNG CÔNG NGHỆ
            </h2>
          </div>
        </div>

        <div className="p-8 sm:p-10 bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 border border-brand-purple/30 text-brand-purple flex items-center justify-center text-3xl shrink-0">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-brand-purple bg-brand-purple/10 px-2.5 py-0.5 rounded">
                {education.period}
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-2">
                {education.school}
              </h3>
              <p className="text-sm font-semibold text-purple-300 mt-1">
                {education.major}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-zinc-400">
                {education.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-full"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:border-l md:border-zinc-800 md:pl-8 flex flex-col space-y-2 text-xs font-mono text-zinc-400 shrink-0">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check text-emerald-400"></i>
              <span>Tư duy lập trình & logic</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check text-emerald-400"></i>
              <span>Ứng dụng AI vào quy trình dựng</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check text-emerald-400"></i>
              <span>Hiểu sâu về nén & render 4K</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

