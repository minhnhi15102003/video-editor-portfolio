import React from 'react';
import { testimonials } from '../data/resumeData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 border-t border-zinc-900 bg-[#030305]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <div className="mb-14 inline-block">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-wider text-white rgb-underline">
            TESTIMONIALS
          </h2>
        </div>

        {/* 3 Solid Purple Testimonial Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-brand-purple p-8 sm:p-10 text-white flex flex-col justify-between shadow-2xl shadow-purple-950/50 rounded-none transform hover:-translate-y-1 transition duration-300 min-h-[260px] text-left"
            >
              <div>
                <h4 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider">
                  {testi.name}
                </h4>
                <span className="text-xs font-semibold text-purple-200 uppercase tracking-widest block mt-1">
                  {testi.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-purple-50 leading-relaxed font-medium mt-6 italic">
                "{testi.quote}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

