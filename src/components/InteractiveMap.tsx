import React, { useState } from 'react';
import { PROVINCES, Province } from '../data/culturalData';
import { MapPin, Utensils, Sparkles, Compass, Mountain, Landmark, Users } from 'lucide-react';

interface InteractiveMapProps {
  selectedProvince?: Province | null;
  onSelectProvince?: (province: Province) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  selectedProvince: externalSelected, 
  onSelectProvince 
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string>('yen-bai');

  const currentId = externalSelected ? externalSelected.id : internalSelectedId;
  const currentProvince = PROVINCES.find(p => p.id === currentId) || PROVINCES[4];

  const handleSelect = (prov: Province) => {
    setInternalSelectedId(prov.id);
    if (onSelectProvince) {
      onSelectProvince(prov);
    }
  };

  return (
    <section id="ban-do-tuong-tac" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest font-sans font-semibold text-[#A43B21] mb-2">
            Bản Đồ Văn Hoá Tương Tác
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Hành Trình 6 Vùng Đất Di Sản
          </h2>
          <div className="w-16 h-0.5 bg-[#A43B21] mx-auto mb-5" />
          <p className="text-base text-stone-700 font-light">
            Nhấp chọn từng tỉnh trên bản đồ hoặc thanh điều hướng để khám phá địa danh nổi tiếng, ẩm thực trứ danh và bản sắc văn hoá độc nhất của từng miền đất.
          </p>
        </div>

        {/* Interactive Province Filter Bar (Zero-pill buttons) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {PROVINCES.map((prov) => {
            const isSelected = prov.id === currentId;
            return (
              <button
                key={prov.id}
                onClick={() => handleSelect(prov)}
                type="button"
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-sm transition-all whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-[#1C355E] text-white border-[#1C355E] shadow-sm'
                    : 'bg-white text-stone-700 border-stone-300 hover:text-stone-950 hover:bg-stone-50'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 inline mr-1.5 ${isSelected ? 'text-amber-300' : 'text-stone-400'}`} />
                {prov.name}
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Balanced Grid: Interactive SVG Map + Detailed Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Interactive Geographic SVG Canvas */}
          <div className="lg:col-span-5 bg-white rounded-sm border border-stone-200/90 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
                <span className="text-xs font-sans uppercase tracking-wider font-semibold text-stone-500">
                  Sơ Đồ Địa Lý Tây Bắc
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Tỉ lệ tương đối
                </span>
              </div>
              
              {/* Map SVG container */}
              <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center p-2">
                <svg
                  viewBox="0 0 500 480"
                  className="w-full h-full drop-shadow-sm select-none"
                >
                  <defs>
                    <radialGradient id="mapBgGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F4EFEA" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FBF9F5" stopOpacity="0.1" />
                    </radialGradient>
                  </defs>

                  {/* Gentle background terrain glow */}
                  <rect width="500" height="480" fill="url(#mapBgGlow)" rx="12" />

                  {/* Rivers / Mountain Ranges Accent Lines */}
                  <path
                    d="M 180 50 Q 230 140 280 230 T 400 370"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    opacity="0.4"
                  />
                  <text x="320" y="240" fill="#94A3B8" fontSize="11" fontStyle="italic" opacity="0.7">
                    Sông Đà
                  </text>

                  {/* 1. LÀO CAI (North-East) */}
                  <g
                    onClick={() => handleSelect(PROVINCES[5])}
                    className="cursor-pointer transition-transform duration-200 hover:opacity-90"
                  >
                    <path
                      d="M 230 30 L 330 30 L 350 110 L 290 140 L 240 100 Z"
                      fill={currentId === 'lao-cai' ? '#1C355E' : '#E2E8F0'}
                      stroke={currentId === 'lao-cai' ? '#0F172A' : '#CBD5E1'}
                      strokeWidth={currentId === 'lao-cai' ? '3' : '1.5'}
                    />
                    <text
                      x="285"
                      y="75"
                      textAnchor="middle"
                      fill={currentId === 'lao-cai' ? '#FFFFFF' : '#334155'}
                      fontSize="13"
                      fontWeight="bold"
                      className="pointer-events-none font-sans"
                    >
                      Lào Cai
                    </text>
                  </g>

                  {/* 2. LAI CHÂU (North-West) */}
                  <g
                    onClick={() => handleSelect(PROVINCES[1])}
                    className="cursor-pointer transition-transform duration-200 hover:opacity-90"
                  >
                    <path
                      d="M 140 80 L 230 30 L 240 100 L 210 180 L 150 180 Z"
                      fill={currentId === 'lai-chau' ? '#19432B' : '#E2E8F0'}
                      stroke={currentId === 'lai-chau' ? '#0F172A' : '#CBD5E1'}
                      strokeWidth={currentId === 'lai-chau' ? '3' : '1.5'}
                    />
                    <text
                      x="190"
                      y="115"
                      textAnchor="middle"
                      fill={currentId === 'lai-chau' ? '#FFFFFF' : '#334155'}
                      fontSize="13"
                      fontWeight="bold"
                      className="pointer-events-none font-sans"
                    >
                      Lai Châu
                    </text>
                  </g>

                  {/* 3. ĐIỆN BIÊN (West) */}
                  <g
                    onClick={() => handleSelect(PROVINCES[0])}
                    className="cursor-pointer transition-transform duration-200 hover:opacity-90"
                  >
                    <path
                      d="M 90 180 L 150 180 L 180 230 L 170 330 L 80 280 Z"
                      fill={currentId === 'dien-bien' ? '#A43B21' : '#E2E8F0'}
                      stroke={currentId === 'dien-bien' ? '#0F172A' : '#CBD5E1'}
                      strokeWidth={currentId === 'dien-bien' ? '3' : '1.5'}
                    />
                    <text
                      x="125"
                      y="255"
                      textAnchor="middle"
                      fill={currentId === 'dien-bien' ? '#FFFFFF' : '#334155'}
                      fontSize="13"
                      fontWeight="bold"
                      className="pointer-events-none font-sans"
                    >
                      Điện Biên
                    </text>
                  </g>

                  {/* 4. YÊN BÁI (Mid-East) */}
                  <g
                    onClick={() => handleSelect(PROVINCES[4])}
                    className="cursor-pointer transition-transform duration-200 hover:opacity-90"
                  >
                    <path
                      d="M 290 140 L 350 110 L 390 190 L 320 230 L 270 200 Z"
                      fill={currentId === 'yen-bai' ? '#A43B21' : '#E2E8F0'}
                      stroke={currentId === 'yen-bai' ? '#0F172A' : '#CBD5E1'}
                      strokeWidth={currentId === 'yen-bai' ? '3' : '1.5'}
                    />
                    <text
                      x="325"
                      y="175"
                      textAnchor="middle"
                      fill={currentId === 'yen-bai' ? '#FFFFFF' : '#334155'}
                      fontSize="13"
                      fontWeight="bold"
                      className="pointer-events-none font-sans"
                    >
                      Yên Bái
                    </text>
                  </g>

                  {/* 5. SƠN LA (Central-South) */}
                  <g
                    onClick={() => handleSelect(PROVINCES[2])}
                    className="cursor-pointer transition-transform duration-200 hover:opacity-90"
                  >
                    <path
                      d="M 180 230 L 270 200 L 320 230 L 330 340 L 250 360 L 170 330 Z"
                      fill={currentId === 'son-la' ? '#1C355E' : '#E2E8F0'}
                      stroke={currentId === 'son-la' ? '#0F172A' : '#CBD5E1'}
                      strokeWidth={currentId === 'son-la' ? '3' : '1.5'}
                    />
                    <text
                      x="250"
                      y="285"
                      textAnchor="middle"
                      fill={currentId === 'son-la' ? '#FFFFFF' : '#334155'}
                      fontSize="13"
                      fontWeight="bold"
                      className="pointer-events-none font-sans"
                    >
                      Sơn La
                    </text>
                  </g>

                  {/* 6. HÒA BÌNH (South-East Gateway) */}
                  <g
                    onClick={() => handleSelect(PROVINCES[3])}
                    className="cursor-pointer transition-transform duration-200 hover:opacity-90"
                  >
                    <path
                      d="M 330 340 L 410 300 L 440 380 L 370 430 L 310 400 Z"
                      fill={currentId === 'hoa-binh' ? '#C88327' : '#E2E8F0'}
                      stroke={currentId === 'hoa-binh' ? '#0F172A' : '#CBD5E1'}
                      strokeWidth={currentId === 'hoa-binh' ? '3' : '1.5'}
                    />
                    <text
                      x="375"
                      y="375"
                      textAnchor="middle"
                      fill={currentId === 'hoa-binh' ? '#FFFFFF' : '#334155'}
                      fontSize="13"
                      fontWeight="bold"
                      className="pointer-events-none font-sans"
                    >
                      Hòa Bình
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 text-center">
              Chạm hoặc click vào các khối địa giới trên bản đồ để xem chi tiết
            </div>
          </div>

          {/* Column 2: Detailed Province Heritage Showcase Card */}
          <div className="lg:col-span-7 bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Province Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#A43B21] font-semibold mb-1">
                    <span>Tỉnh Thành Tây Bắc</span>
                    <span aria-hidden="true">·</span>
                    <span>Thủ phủ: {currentProvince.capital}</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                    {currentProvince.name}
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono text-stone-500 uppercase">Diện Tích</div>
                  <div className="font-serif text-lg font-bold text-stone-900 tabular-nums">
                    {currentProvince.areaKm2.toLocaleString('vi-VN')} km²
                  </div>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="mb-6">
                <p className="font-serif italic text-base text-[#A43B21] mb-2">
                  "{currentProvince.tagline}"
                </p>
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  {currentProvince.description}
                </p>
              </div>

              {/* Ethnic Composition (Clean unboxed tags) */}
              <div className="mb-6 p-4 bg-stone-50 rounded-sm border border-stone-200/80">
                <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider font-semibold text-stone-700 mb-2">
                  <Users className="w-3.5 h-3.5 text-[#1C355E]" />
                  <span>Thành Phần Dân Tộc Cùng Sinh Sống</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
                  {currentProvince.ethnicGroups.map((eth, eIdx) => (
                    <React.Fragment key={eIdx}>
                      <span className="font-medium text-stone-800">{eth}</span>
                      {eIdx < currentProvince.ethnicGroups.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Grid 2 Columns: Landmarks & Cultural Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                <div className="p-4 bg-stone-50/60 rounded-sm border border-stone-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider font-semibold text-stone-800 mb-2">
                    <Landmark className="w-3.5 h-3.5 text-[#A43B21]" />
                    <span>Thắng Cảnh & Địa Danh</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-900 font-medium mb-1">
                    {currentProvince.keyLandmark}
                  </p>
                  <p className="text-xs text-stone-500">
                    {currentProvince.secondaryLandmark}
                  </p>
                </div>

                <div className="p-4 bg-stone-50/60 rounded-sm border border-stone-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider font-semibold text-stone-800 mb-2">
                    <Utensils className="w-3.5 h-3.5 text-[#C88327]" />
                    <span>Ẩm Thực & Đặc Sản Rừng</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-900 leading-relaxed">
                    {currentProvince.signatureDish}
                  </p>
                </div>

              </div>

              {/* Cultural Highlights List */}
              <div className="border-t border-stone-100 pt-4">
                <h4 className="text-xs uppercase tracking-wider font-sans font-bold text-stone-800 mb-2.5">
                  Điểm Nhấn Bản Sắc Nổi Bật Nhất
                </h4>
                <ul className="space-y-1.5">
                  {currentProvince.culturalHighlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start text-xs sm:text-sm text-stone-700 gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A43B21] mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom info strip */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
              <span>
                <strong className="text-stone-700">Di sản nghề truyền thống:</strong> {currentProvince.craftHeritage}
              </span>
              <span className="text-[#A43B21] font-semibold">
                Đặc trưng: {currentProvince.heroHighlight}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
