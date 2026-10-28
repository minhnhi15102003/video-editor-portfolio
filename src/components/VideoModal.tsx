import React, { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  youtubeId: string;
  title: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  youtubeId,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/80">
          <span className="text-xs font-heading font-bold text-brand-purple uppercase tracking-wider">
            {title || 'Video Showcase'}
          </span>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 text-lg transition focus:outline-none"
            aria-label="Close Modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Video Iframe Container */}
        <div className="aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

