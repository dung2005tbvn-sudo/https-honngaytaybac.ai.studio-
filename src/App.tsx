/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { CulturalPillars } from './components/CulturalPillars';
import { InteractiveMap } from './components/InteractiveMap';
import { SoundAndQuizSection } from './components/SoundAndQuizSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { Province, PROVINCES } from './data/culturalData';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScrollToExplore = () => {
    const el = document.getElementById('tong-quan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMap = () => {
    const el = document.getElementById('ban-do-tuong-tac');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSound = () => {
    const el = document.getElementById('am-vang-nui-rung');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProvince = (prov: Province) => {
    setSelectedProvince(prov);
    const el = document.getElementById('ban-do-tuong-tac');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header onExploreClick={handleScrollToExplore} />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Section 1: Hero Banner & Quantitative Proof */}
        <Hero
          onExploreClick={handleScrollToExplore}
          onMapClick={handleScrollToMap}
          onSoundClick={handleScrollToSound}
        />

        {/* Section 1: Overview 6 Provinces & Ethnic Harmony */}
        <Overview onSelectProvince={handleSelectProvince} />

        {/* Section 2: 5 Cultural Pillars */}
        <CulturalPillars />

        {/* Section 3: Interactive Geographic Map & Detail Showcase */}
        <InteractiveMap
          selectedProvince={selectedProvince}
          onSelectProvince={setSelectedProvince}
        />

        {/* Sensory Sound Audition & Cultural Quiz */}
        <SoundAndQuizSection />

        {/* Gallery & Cultural Lightbox */}
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer onSelectProvince={handleSelectProvince} />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Cuộn lên đầu trang"
          className="fixed bottom-6 right-6 z-40 p-3 bg-stone-900/90 text-amber-200 hover:text-white hover:bg-stone-900 rounded-full shadow-lg border border-stone-700 backdrop-blur-xs transition-all duration-200 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
