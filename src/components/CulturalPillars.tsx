import React, { useState } from 'react';
import { CULTURAL_PILLARS, CulturalPillar, CulturalItem } from '../data/culturalData';
import { folkAudio } from '../utils/audioSynth';
import { Sparkles, X, Music, Volume2, BookOpen, Layers, MapPin, Feather, Check } from 'lucide-react';

export const CulturalPillars: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(CULTURAL_PILLARS[0].id);
  const [selectedItem, setSelectedItem] = useState<CulturalItem | null>(null);
  const [playingInstrument, setPlayingInstrument] = useState<string | null>(null);

  const activePillar = CULTURAL_PILLARS.find(p => p.id === activePillarId) || CULTURAL_PILLARS[0];

  const handlePlaySound = (type: 'khen' | 'dantinh' | 'congchieng') => {
    setPlayingInstrument(type);
    if (type === 'khen') folkAudio.playKhenMôngNote();
    if (type === 'dantinh') folkAudio.playDanTinhNote();
    if (type === 'congchieng') folkAudio.playCongChieng();

    setTimeout(() => {
      setPlayingInstrument(null);
    }, 1800);
  };

  return (
    <section id="tru-cot-van-hoa" className="py-20 lg:py-28 bg-[#F4EFEA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest font-sans font-semibold text-[#A43B21] mb-2">
            05 Trụ Cột Văn Hoá Đặc Trưng
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Kho Tàng Di Sản Tây Bắc
          </h2>
          <div className="w-16 h-0.5 bg-[#A43B21] mx-auto mb-5" />
          <p className="text-base text-stone-700 font-light">
            Mỗi trụ cột là một mảnh ghép thiêng liêng đúc kết từ tri thức bản địa, kỹ thuật thủ công tài hoa và tâm hồn mộc mạc của đồng bào các dân tộc.
          </p>
        </div>

        {/* Interactive Segmented Tab Controls (Zero-pill, clean buttons) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2">
          {CULTURAL_PILLARS.map((pillar, idx) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                type="button"
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-sm transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#A43B21] text-white border-[#A43B21] shadow-sm'
                    : 'bg-white text-stone-700 border-stone-300 hover:text-stone-950 hover:bg-stone-50'
                }`}
              >
                <span className="font-mono text-xs opacity-70 mr-1.5">{String(idx + 1).padStart(2, '0')}.</span>
                {pillar.title}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Overview Banner */}
        <div className="bg-white rounded-sm border border-stone-200/90 overflow-hidden mb-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px]">
              <img
                src={activePillar.heroImage}
                alt={activePillar.title}
                className="w-full h-full object-cover object-center absolute inset-0"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    if (activePillar.id === 'trang-phuc') target.src = '/images/costume.jpg';
                    else if (activePillar.id === 'am-thuc') target.src = '/images/cuisine.jpg';
                    else if (activePillar.id === 'le-hoi' || activePillar.id === 'am-nhac-mua-xoe') target.src = '/images/festival.jpg';
                    else target.src = '/images/hero.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-amber-300">
                  {activePillar.tag}
                </span>
                <p className="font-serif text-lg font-bold text-white mt-1">
                  {activePillar.subtitle}
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-sans text-[#A43B21] font-semibold uppercase tracking-widest mb-2">
                  <span>Trụ Cột Di Sản</span>
                  <span aria-hidden="true">·</span>
                  <span>{activePillar.tag}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                  {activePillar.title}
                </h3>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {activePillar.overview}
                </p>

                {/* Pullquote citation */}
                <div className="p-4 bg-stone-50 border-t border-b border-stone-200/80 my-4">
                  <p className="font-serif italic text-sm text-stone-800 leading-relaxed">
                    "{activePillar.artisanQuote}"
                  </p>
                  <p className="text-xs text-stone-500 font-sans mt-2 text-right">
                    — {activePillar.authorQuote}
                  </p>
                </div>
              </div>

              {/* Special interactive audio trigger if music pillar */}
              {activePillar.id === 'am-nhac-mua-xoe' && (
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium text-stone-600">Thử âm sắc nhạc cụ:</span>
                  <button
                    onClick={() => handlePlaySound('khen')}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-sm border border-amber-300 transition-colors"
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${playingInstrument === 'khen' ? 'animate-ping' : ''}`} />
                    <span>Khèn Mông</span>
                  </button>
                  <button
                    onClick={() => handlePlaySound('dantinh')}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-sm border border-emerald-300 transition-colors"
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${playingInstrument === 'dantinh' ? 'animate-ping' : ''}`} />
                    <span>Đàn Tính Tẩu</span>
                  </button>
                  <button
                    onClick={() => handlePlaySound('congchieng')}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-stone-200 hover:bg-stone-300 text-stone-900 rounded-sm border border-stone-300 transition-colors"
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${playingInstrument === 'congchieng' ? 'animate-ping' : ''}`} />
                    <span>Cồng Chiêng Mường</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Pillar Items Grid (Cards with zero-pill metadata & full details on click) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-serif text-xl font-bold text-stone-900">
              Chi Tiết Tinh Hoa & Điểm Nhấn
            </h4>
            <span className="text-xs text-stone-500 font-sans">
              Nhấp vào từng thẻ để đọc tích truyện & ý nghĩa văn hoá
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activePillar.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-white rounded-sm border border-stone-200 hover:border-[#A43B21]/70 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-2">
                    <span className="text-[#A43B21] font-semibold">{item.ethnicGroup}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.region}</span>
                  </div>

                  <h5 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#A43B21] transition-colors mb-2">
                    {item.name}
                  </h5>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <div className="space-y-1.5 border-t border-stone-100 pt-3 mb-4">
                    {item.characteristics.slice(0, 2).map((char, cIdx) => (
                      <div key={cIdx} className="flex items-start text-xs text-stone-600 gap-2">
                        <Check className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-[#A43B21] font-medium">
                  <span>{item.badge}</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Xem chi tiết →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Cultural Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div 
            className="bg-[#FBF9F5] rounded-sm max-w-2xl w-full border border-stone-300 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#FBF9F5] border-b border-stone-200 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs font-sans text-[#A43B21] font-semibold uppercase tracking-wider">
                <span>{selectedItem.ethnicGroup}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedItem.badge}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1 text-stone-400 hover:text-stone-800 rounded transition-colors"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                  {selectedItem.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Phổ biến tại: {selectedItem.region}</span>
                </div>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                  {selectedItem.details}
                </p>
              </div>

              {/* Characteristics breakdown */}
              <div className="bg-white p-5 rounded-sm border border-stone-200">
                <h4 className="text-xs uppercase tracking-wider font-sans font-bold text-stone-900 mb-3">
                  Đặc Trưng Nổi Bật & Kỹ Thuật
                </h4>
                <ul className="space-y-2">
                  {selectedItem.characteristics.map((c, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-stone-700 gap-2.5">
                      <span className="font-mono text-xs font-semibold text-[#A43B21] shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials & Cultural Meaning Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedItem.materials && (
                  <div className="bg-stone-100/70 p-4 rounded-sm border border-stone-200/80">
                    <div className="text-xs uppercase tracking-wider font-sans font-semibold text-stone-500 mb-1">
                      Nguyên Liệu / Chế Tác
                    </div>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                      {selectedItem.materials}
                    </p>
                  </div>
                )}
                <div className="bg-stone-100/70 p-4 rounded-sm border border-stone-200/80">
                  <div className="text-xs uppercase tracking-wider font-sans font-semibold text-stone-500 mb-1">
                    Ý Nghĩa Văn Hoá
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {selectedItem.culturalMeaning}
                  </p>
                </div>
              </div>

              {/* Action Close */}
              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  type="button"
                  className="px-5 py-2 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded transition-colors"
                >
                  Đóng Lại
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
