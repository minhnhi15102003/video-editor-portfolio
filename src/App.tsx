import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';

export const App: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    youtubeId: string;
    title: string;
  }>({
    isOpen: false,
    youtubeId: '',
    title: '',
  });

  const handlePlayVideo = (youtubeId: string, title: string) => {
    setModalState({
      isOpen: true,
      youtubeId,
      title,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main id="home">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Portfolio onPlayVideo={handlePlayVideo} />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Video Modal Popup */}
      <VideoModal
        isOpen={modalState.isOpen}
        youtubeId={modalState.youtubeId}
        title={modalState.title}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;

