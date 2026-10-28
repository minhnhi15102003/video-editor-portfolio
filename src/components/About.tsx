import React from 'react';
import { personalInfo, education } from '../data/resumeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030305]">
      {/* Faint DaVinci Color Wheel / Rainbow Silhouette in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border-8 border-dashed border-zinc-700 bg-gradient-to-tr from-red-600/20 via-green-600/20 to-blue-600/20 blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title with Signature RGB Underline */}
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-white rgb-underline">
              ABOUT ME
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-4 max-w-xl mx-auto">
            Mục tiêu nghề nghiệp và hành trình trở thành Video Editor chuyên nghiệp
          </p>
        </div>

        {/* 2-Column Content: Objective & Personal Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Objective & Creative Mindset */}
          <div className="lg:col-span-7 p-8 bg-zinc-950/80 border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
                <i className="fa-solid fa-bullseye text-brand-purple"></i>
                <span>Mục Tiêu Nghề Nghiệp</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                "Phát triển thành người sáng tạo nội dung có tư duy hình ảnh và khả năng tối ưu trải nghiệm người xem."
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                {personalInfo.objective}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {personalInfo.aboutDetailed}
              </p>
            </div>

            {/* Synergies: IT + Editing */}
            <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded bg-brand-purple/20 text-brand-purple flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">Nền Tảng CNTT Vững Chắc</h4>
                  <p className="text-zinc-400 text-[11px] mt-0.5">Hiểu rõ thuật toán phân phối YouTube/TikTok, tối ưu dung lượng và UX người xem.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">Tận Dụng Trí Tuệ Nhân Tạo (AI)</h4>
                  <p className="text-zinc-400 text-[11px] mt-0.5">Ứng dụng ChatGPT, Gemini, Grok để đẩy nhanh tiến độ lên kịch bản và ý tưởng visual.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Personal Profile Table & Contact Quick View */}
          <div className="lg:col-span-5 p-8 bg-[#07070c] border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
                <i className="fa-solid fa-id-card text-brand-purple"></i>
                <span>Thông Tin Cá Nhân</span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-400">Họ & Tên:</span>
                  <span className="font-bold text-white">{personalInfo.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-400">Ngày sinh:</span>
                  <span className="font-mono text-zinc-200">{personalInfo.dob}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-400">Khu vực:</span>
                  <span className="text-zinc-200">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-400">Số điện thoại:</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="font-mono text-brand-purple hover:underline">{personalInfo.phone}</a>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-400">Email:</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-mono text-zinc-200 hover:text-brand-purple truncate max-w-[200px]">{personalInfo.email}</a>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-400">Học vấn:</span>
                  <span className="text-zinc-200 text-right">{education.school}</span>
                </div>
              </div>

              {/* Hobbies / Interests */}
              <div className="mt-6 pt-4 border-t border-zinc-900">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">Sở thích & Đam mê:</span>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800">🎬 Xem phim</span>
                  <span className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800">🎧 Nghe nhạc</span>
                  <span className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800">⚽ Bóng đá</span>
                  <span className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800">🚀 Công nghệ</span>
                  <span className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800">📸 Chụp ảnh</span>
                  <span className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800">✈️ Du lịch</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="w-full py-3 bg-brand-purple hover:bg-brand-purpleHover text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition"
              >
                <span>Liên Hệ Hợp Tác Ngay</span>
                <i className="fa-solid fa-paper-plane text-[10px]"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

