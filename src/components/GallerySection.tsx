import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/culturalData';
import { Image as ImageIcon, X, MapPin, Maximize2, Tag } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'Tất Cả Sắc Màu' },
    { id: 'costume', label: 'Trang Phục & Dệt' },
    { id: 'cuisine', label: 'Ẩm Thực Vùng Cao' },
    { id: 'festival', label: 'Lễ Hội & Điệu Xòe' },
    { id: 'landscape', label: 'Thắng Cảnh Hùng Vĩ' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="thu-vien-sac-mau" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest font-sans font-semibold text-[#A43B21] mb-2">
            Thư Viện Sắc Màu Tây Bắc
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Khắc Họa Nét Đẹp Đời Sống
          </h2>
          <div className="w-16 h-0.5 bg-[#A43B21] mx-auto mb-5" />
          <p className="text-base text-stone-700 font-light">
            Tuyển tập hình ảnh chân thực ghi lại những khoảnh khắc lễ hội, trang phục rực rỡ và cảnh sắc ruộng bậc thang kỳ vĩ giữa mây ngàn.
          </p>
        </div>

        {/* Interactive Filter Segmented Controls */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {filters.map(f => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                type="button"
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#A43B21] text-white border-[#A43B21] shadow-sm'
                    : 'bg-white text-stone-700 border-stone-300 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer bg-white rounded-sm border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      if (item.category === 'costume') target.src = '/images/costume.jpg';
                      else if (item.category === 'cuisine') target.src = '/images/cuisine.jpg';
                      else if (item.category === 'festival') target.src = '/images/festival.jpg';
                      else target.src = '/images/hero.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
                  <span className="text-xs font-sans font-medium flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5" /> Phóng to chi tiết
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-1.5">
                    <span className="text-[#A43B21] font-semibold">{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.ethnic}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#A43B21] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs text-stone-500">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-stone-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-[#FBF9F5] rounded-sm max-w-4xl w-full border border-stone-300 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image View */}
            <div className="relative bg-black flex items-center justify-center max-h-[58vh] overflow-hidden">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full max-h-[58vh] object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    if (selectedPhoto.category === 'costume') target.src = '/images/costume.jpg';
                    else if (selectedPhoto.category === 'cuisine') target.src = '/images/cuisine.jpg';
                    else if (selectedPhoto.category === 'festival') target.src = '/images/festival.jpg';
                    else target.src = '/images/hero.jpg';
                  }
                }}
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption and Cultural Story */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-sans font-semibold text-[#A43B21] mb-2">
                <span>{selectedPhoto.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Dân tộc: {selectedPhoto.ethnic}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                {selectedPhoto.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-4">
                <MapPin className="w-4 h-4 text-[#A43B21]" />
                <span>Địa điểm: {selectedPhoto.location}</span>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                {selectedPhoto.description}
              </p>

              <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedPhoto(null)}
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
