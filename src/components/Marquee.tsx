import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    { text: 'Dựng Video: Premiere Pro & CapCut', color: 'bg-emerald-400' },
    { text: 'YouTube Content Specialist', color: 'bg-brand-purple' },
    { text: 'Nhà Tốt: Property Tour & Bất Động Sản', color: 'bg-amber-400' },
    { text: 'Kênh Âm Nhạc: Aurex Remix', color: 'bg-cyan-400' },
    { text: 'Sound Design & Subtitle Karaoke', color: 'bg-red-400' },
    { text: 'After Effects: GEOlayers 3 & Saber', color: 'bg-purple-400' },
    { text: 'Color Grading REC.709', color: 'bg-yellow-400' },
    { text: 'Ứng Dụng AI: ChatGPT, Gemini, Grok', color: 'bg-emerald-400' },
  ];

  return (
    <div className="w-full py-4 bg-zinc-950/80 border-y border-zinc-900 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-zinc-300">
        {items.map((item, idx) => (
          <span key={`m1-${idx}`} className="mx-6 flex items-center">
            <span className={`w-2 h-2 rounded-full ${item.color} mr-3`}></span>
            {item.text}
          </span>
        ))}
        {items.map((item, idx) => (
          <span key={`m2-${idx}`} className="mx-6 flex items-center">
            <span className={`w-2 h-2 rounded-full ${item.color} mr-3`}></span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

