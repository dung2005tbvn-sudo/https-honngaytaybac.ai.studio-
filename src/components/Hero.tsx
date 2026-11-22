import React from 'react';
import { ChevronDown, Sparkles, MapPin, Music } from 'lucide-react';
import { HERO_IMAGE } from '../data/culturalData';

interface HeroProps {
  onExploreClick: () => void;
  onMapClick: () => void;
  onSoundClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onMapClick, onSoundClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#2B2118] text-[#FBF9F5]">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Toàn cảnh núi rừng và ruộng bậc thang Tây Bắc hùng vĩ lúc bình minh"
          className="w-full h-full object-cover object-center filter brightness-[0.88]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = 'true';
              target.src = '/images/hero.jpg';
            }
          }}
        />
        {/* Measured scrims ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/85 via-[#1C1917]/40 to-transparent" />
      </div>

      {/* Decorative Ethnic Motif Top Line */}
      <div className="relative z-10 h-1.5 w-full bg-gradient-to-r from-[#A43B21] via-[#C88327] to-[#1C355E]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="max-w-3xl">
          
          {/* Curatorial Kicker - Unboxed clean text with typographic separator */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-sans tracking-widest uppercase text-amber-200/90 font-medium mb-4">
            <span>Không Gian Văn Hoá Tây Bắc</span>
            <span aria-hidden="true">·</span>
            <span>Di Sản & Cội Nguồn</span>
            <span aria-hidden="true">·</span>
            <span>Huyền Thoại 6 Tỉnh Thành</span>
          </div>

          {/* Heading H1 with text-wrap balance */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md text-balance">
            Hồn Ngàn Tây Bắc – <span className="italic font-normal text-amber-200">Hành Trình Di Sản</span>
          </h1>

          {/* Slogan & Introduction */}
          <p className="text-lg sm:text-xl text-stone-200 font-light leading-relaxed mb-8 max-w-2xl drop-shadow-xs">
            Khám phá sắc màu văn hoá, con người và thiên nhiên của vùng đất huyền thoại. Nơi sương mây quấn quýt đỉnh non cao, nhịp chày giã gạo rộn rã thung lũng và điệu xòe níu bước chân lữ khách.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              type="button"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-stone-900 bg-amber-300 hover:bg-amber-400 rounded-sm shadow-md transition-all duration-200 whitespace-nowrap active:translate-y-0.5"
            >
              <span>Khám Phá Di Sản</span>
              <ChevronDown className="ml-2 w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={onMapClick}
              type="button"
              className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium tracking-wide text-white bg-stone-900/60 hover:bg-stone-900/80 border border-stone-400/40 backdrop-blur-xs rounded-sm transition-all duration-200 whitespace-nowrap"
            >
              <MapPin className="mr-2 w-4 h-4 text-amber-300" />
              <span>Bản Đồ 6 Tỉnh</span>
            </button>

            <button
              onClick={onSoundClick}
              type="button"
              className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium tracking-wide text-amber-100 hover:text-white bg-black/30 hover:bg-black/50 border border-amber-300/30 backdrop-blur-xs rounded-sm transition-all duration-200 whitespace-nowrap"
            >
              <Music className="mr-2 w-4 h-4 text-amber-300" />
              <span>Thử Tiếng Khèn & Đàn Tính</span>
            </button>
          </div>

        </div>
      </div>

      {/* Quantitative Rigor Strip (Proof / Metric Adjacency) */}
      <div className="relative z-10 border-t border-stone-800/80 bg-stone-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-800">
            
            <div className="pt-3 md:pt-0">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-200 tabular-nums">
                06 Tỉnh
              </div>
              <div className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">
                Điện Biên · Lai Châu · Sơn La · Hòa Bình · Yên Bái · Lào Cai
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-200 tabular-nums">
                20+ Tộc Người
              </div>
              <div className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">
                Thái · Mông · Mường · Dao · Tày · Hà Nhì...
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-200 tabular-nums">
                3.143m
              </div>
              <div className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">
                Fansipan – Nóc nhà Đông Dương kỳ vĩ
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-6">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-200 tabular-nums">
                UNESCO
              </div>
              <div className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">
                Nghệ thuật Múa Xòe – Di sản nhân loại
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
