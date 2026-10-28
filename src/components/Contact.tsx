import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      alert(`Cảm ơn ${name}! Nguyễn Anh Minh đã nhận được yêu cầu và sẽ liên hệ lại với bạn sớm nhất.`);
      setName('');
      setMessage('');
      setFormSubmitted(false);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block">
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-white rgb-underline">
              I AM READY TO CONSULT YOU
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-4">
            Gửi yêu cầu dự án hoặc brief video, tôi sẽ phản hồi bản tư vấn trong vòng 1-2 giờ.
          </p>
        </div>

        {/* Consultation Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Field 1: My Name Is */}
            <div className="md:col-span-5 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <label className="font-heading text-xs uppercase tracking-wider text-zinc-300 whitespace-nowrap">
                My Name Is
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên của bạn hoặc Brand"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-brand-purple rounded-none"
              />
            </div>

            {/* Field 2: I Am Interested In */}
            <div className="md:col-span-5 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <label className="font-heading text-xs uppercase tracking-wider text-zinc-300 whitespace-nowrap">
                I Am Interested In
              </label>
              <input
                type="text"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Dựng YouTube, Reels/TikTok, TVC..."
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-brand-purple rounded-none"
              />
            </div>

            {/* SEND Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full py-3.5 bg-brand-purple hover:bg-brand-purpleHover text-white font-heading font-extrabold text-xs uppercase tracking-widest transition rounded-none disabled:opacity-50"
              >
                {formSubmitted ? 'SENDING...' : 'SEND'}
              </button>
            </div>

          </div>
        </form>

        {/* Contact Information Row from Anh Minh's CV */}
        <div className="mt-14 pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-zinc-400">
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center space-x-3 hover:text-white transition"
          >
            <i className="fa-solid fa-phone text-brand-purple text-sm"></i>
            <span className="text-zinc-200 font-mono">{personalInfo.phone} <span className="text-zinc-500">(Zalo/Call)</span></span>
          </a>

          <div className="flex items-center space-x-3">
            <i className="fa-solid fa-location-dot text-brand-purple text-sm"></i>
            <span className="text-zinc-200">{personalInfo.location}</span>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center space-x-3 hover:text-white transition"
          >
            <i className="fa-solid fa-envelope text-brand-purple text-sm"></i>
            <span className="text-zinc-200 font-mono">{personalInfo.email}</span>
          </a>
        </div>

        {/* Social Links for Mobile View */}
        <div className="flex sm:hidden items-center justify-center space-x-6 mt-8 text-zinc-400 text-lg">
          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-brand-purple"><i className="fa-solid fa-phone"></i></a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-purple"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://www.youtube.com/@AurexRemix" target="_blank" rel="noreferrer" className="hover:text-brand-purple"><i className="fa-brands fa-youtube"></i></a>
        </div>

      </div>

      {/* Vertical "Go Back To The Top" Link (Right Edge) */}
      <a
        href="#home"
        className="hidden xl:flex items-center space-x-2 fixed bottom-12 right-6 z-40 text-[11px] font-heading font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-purple transition duration-200"
      >
        <span className="vertical-text">Go Back To The Top</span>
        <i className="fa-solid fa-arrow-up text-brand-purple"></i>
      </a>
    </section>
  );
};

