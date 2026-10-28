import React from 'react';
import { personalInfo } from '../data/resumeData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 overflow-hidden">
      {/* Ambient Rainbow & Purple Spotlight Glow in Background */}
      <div className="absolute -top-10 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-purple-600/25 via-pink-600/15 to-emerald-500/15 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[450px] bg-brand-purple/20 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & CTA */}
        <div className="lg:col-span-7 text-left space-y-5">
          <div className="inline-block">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-zinc-400">
                {personalInfo.name.toUpperCase()} &bull; {personalInfo.location}
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight uppercase">
              PROFESSIONAL <br />
              <span className="text-white">VIDEO EDITOR</span>
            </h1>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-medium leading-relaxed">
            {personalInfo.tagline} Chuyên sản xuất video YouTube đa chủ đề, video bất động sản Nhà Tốt, visualizer âm nhạc và short-form tối ưu trải nghiệm giữ chân người xem.
          </p>

          {/* Quick Info Badges from CV */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <span className="text-xs font-mono bg-zinc-900/90 text-purple-300 border border-purple-500/30 px-3 py-1 rounded">
              <i className="fa-solid fa-graduation-cap text-brand-purple mr-1.5"></i>
              ĐH Mỏ - Địa chất (CNTT)
            </span>
            <span className="text-xs font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800 px-3 py-1 rounded">
              <i className="fa-brands fa-youtube text-red-500 mr-1.5"></i>
              Meganetwork &bull; Nhà Tốt
            </span>
            <span className="text-xs font-mono bg-zinc-900/90 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded">
              <i className="fa-solid fa-code text-emerald-400 mr-1.5"></i>
              Frontend Developer Background
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-purple hover:bg-brand-purpleHover text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition transform hover:-translate-y-0.5 shadow-lg shadow-purple-600/30"
            >
              <span>LETS TALK</span>
              <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-zinc-700 hover:border-zinc-500 bg-zinc-950/80 text-zinc-200 font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase transition"
            >
              <i className="fa-solid fa-play mr-2 text-xs text-brand-purple"></i>
              <span>Xem Video Đã Edit</span>
            </a>
          </div>

          {/* Metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-900">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="p-3 bg-zinc-950/60 border border-zinc-900">
                <div className="font-heading font-extrabold text-lg sm:text-xl text-white">{stat.value}</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Editor Cutout Photo + 3D Pr & Ae Icons + Lightning Effects */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
          
          {/* Floating Adobe Premiere Pro (Pr) Icon */}
          <div className="absolute -top-6 -left-2 sm:top-2 sm:left-4 z-20 float-pr">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00005b]/90 border-2 border-[#9999ff] p-2 flex items-center justify-center shadow-xl shadow-purple-900/60 electric-glow">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#9999ff]">Pr</span>
            </div>
          </div>

          {/* Floating Adobe After Effects (Ae) Icon */}
          <div className="absolute -top-4 -right-2 sm:top-6 sm:right-6 z-20 float-ae">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00005b]/90 border-2 border-[#d291ff] p-2 flex items-center justify-center shadow-xl shadow-purple-900/60 electric-glow">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#d291ff]">Ae</span>
            </div>
          </div>

          {/* Purple Lightning Graphic Behind Editor Shoulders */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <svg className="w-[380px] sm:w-[460px] h-auto text-purple-500 opacity-75 electric-glow animate-pulse" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 180 L130 140 L110 190 L190 120 L160 210 L250 150" stroke="url(#purpleGrad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M460 170 L380 130 L400 190 L320 110 L340 210 L260 160" stroke="url(#purpleGrad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a855f7" />
                  <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Editor Cutout Portrait Card (Nguyễn Anh Minh's actual photo) */}
          <div className="relative z-10 w-64 sm:w-80 overflow-hidden flex flex-col items-center">
            <div className="relative group">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-80 sm:h-96 object-cover object-top rounded-2xl filter contrast-110 brightness-95 shadow-2xl border border-zinc-800"
              />
              
              {/* Golden Crown Graphic overlaid on shirt */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-amber-400 text-3xl opacity-90 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
                <i className="fa-solid fa-crown"></i>
              </div>

              {/* Verified badge */}
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[10px] font-mono text-purple-300 px-2.5 py-1 rounded-full border border-purple-500/40 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Video Editor</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

