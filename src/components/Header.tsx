import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Compass } from 'lucide-react';
import { folkAudio } from '../utils/audioSynth';

interface HeaderProps {
  onExploreClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onExploreClick }) => {
  const [isAmbientOn, setIsAmbientOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const active = folkAudio.toggleMountainStreamAmbient();
    setIsAmbientOn(active);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="group flex items-center gap-3 text-stone-900 whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-sm bg-[#A43B21] flex items-center justify-center text-amber-100 font-serif font-bold text-lg shadow-sm">
              TB
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#A43B21] transition-colors">
                Hồn Ngàn Tây Bắc
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-sans uppercase tracking-widest text-stone-500 font-medium">
                Di Sản 6 Tỉnh
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a 
              href="#tong-quan" 
              className="hover:text-[#A43B21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Tổng quan
            </a>
            <a 
              href="#tru-cot-van-hoa" 
              className="hover:text-[#A43B21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Trụ cột văn hoá
            </a>
            <a 
              href="#ban-do-tuong-tac" 
              className="hover:text-[#A43B21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Bản đồ 6 tỉnh
            </a>
            <a 
              href="#am-vang-nui-rung" 
              className="hover:text-[#A43B21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Âm vang & Thử thách
            </a>
            <a 
              href="#thu-vien-sac-mau" 
              className="hover:text-[#A43B21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Thư viện ảnh
            </a>
          </nav>

          {/* Zone 3: 1 primary action & ambient sound toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Ambient Sound Button */}
            <button
              onClick={toggleSound}
              type="button"
              className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded border transition-all whitespace-nowrap ${
                isAmbientOn 
                  ? 'bg-amber-100/80 text-amber-900 border-amber-300 shadow-xs' 
                  : 'bg-stone-100 text-stone-600 border-stone-200 hover:text-stone-900 hover:bg-stone-200/70'
              }`}
              title="Bật/Tắt âm thanh suối ngàn & gió núi thiên nhiên"
            >
              {isAmbientOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#A43B21] animate-pulse" />
                  <span className="hidden sm:inline">Suối ngàn: Bật</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                  <span className="hidden sm:inline">Âm suối ngàn</span>
                </>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onExploreClick}
              type="button"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#A43B21] hover:bg-[#882F19] rounded transition-colors shadow-sm whitespace-nowrap"
            >
              <Compass className="w-4 h-4" />
              <span>Khám Phá Ngay</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-stone-200 px-4 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-medium text-stone-800">
            <a 
              href="#tong-quan" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A43B21] transition-colors"
            >
              Tổng quan Tây Bắc
            </a>
            <a 
              href="#tru-cot-van-hoa" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A43B21] transition-colors"
            >
              5 Trụ cột văn hoá
            </a>
            <a 
              href="#ban-do-tuong-tac" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A43B21] transition-colors"
            >
              Bản đồ 6 tỉnh thành
            </a>
            <a 
              href="#am-vang-nui-rung" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A43B21] transition-colors"
            >
              Âm vang đại ngàn & Thử thách
            </a>
            <a 
              href="#thu-vien-sac-mau" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A43B21] transition-colors"
            >
              Thư viện ảnh sắc màu
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
