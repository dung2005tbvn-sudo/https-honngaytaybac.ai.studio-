import React from 'react';
import { PROVINCES, Province } from '../data/culturalData';
import { Mountain, Users, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';

interface OverviewProps {
  onSelectProvince: (prov: Province) => void;
}

export const Overview: React.FC<OverviewProps> = ({ onSelectProvince }) => {
  return (
    <section id="tong-quan" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-sans font-semibold text-[#A43B21] mb-2">
            Tổng Quan Địa Lý & Con Người
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-6">
            Mái Nhà Chung Giữa Ngàn Trùng Sương Gió
          </h2>
          <div className="w-16 h-0.5 bg-[#A43B21] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light text-balance">
            Vùng văn hoá Tây Bắc bao gồm 6 tỉnh: <strong className="font-medium text-stone-900">Điện Biên, Lai Châu, Sơn La, Hòa Bình, Yên Bái và Lào Cai</strong>. Đây là mái nhà chung của hơn 20 dân tộc anh em như Thái, Mông, Mường, Dao, Tày... Tạo nên một không gian văn hoá rực rỡ, vừa hùng vĩ giữa thiên nhiên ngàn trùng, vừa đầm ấm trong nét sinh hoạt đời thường.
          </p>
        </div>

        {/* 3 Value Pillars of Northwest Heritage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="bg-stone-50/80 rounded-sm border border-stone-200/90 p-6 sm:p-8 hover:border-stone-300 transition-colors">
            <div className="w-12 h-12 rounded-sm bg-[#19432B]/10 flex items-center justify-center text-[#19432B] mb-5">
              <Mountain className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Thiên Nhiên Hùng Vĩ & Đỉnh Đèo
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Dãy Hoàng Liên Sơn sừng sững, đèo Ô Quy Hồ, Pha Đin chạm mây trời cùng những nấc thang ruộng bậc thang Mù Cang Chải vươn tới lưng chừng trời xanh.
            </p>
          </div>

          <div className="bg-stone-50/80 rounded-sm border border-stone-200/90 p-6 sm:p-8 hover:border-stone-300 transition-colors">
            <div className="w-12 h-12 rounded-sm bg-[#A43B21]/10 flex items-center justify-center text-[#A43B21] mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Hơn 20 Dân Tộc Cùng Chung Sống
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Người Thái dựng nhà ven suối, người Mông kiên cường trên núi đá tai mèo, người Mường bên thung lũng sông Đà – kết thành bức tranh phong tục đa sắc.
            </p>
          </div>

          <div className="bg-stone-50/80 rounded-sm border border-stone-200/90 p-6 sm:p-8 hover:border-stone-300 transition-colors">
            <div className="w-12 h-12 rounded-sm bg-[#C88327]/10 flex items-center justify-center text-[#C88327] mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Đậm Đà Tình Nghĩa Bản Mường
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Chén rượu cần nồng ấm, bát thắng cố chợ phiên nghi ngút khói, tiếng khèn gọi bạn tình thổn thức và vòng xòe đại đoàn kết thắp sáng đêm sương.
            </p>
          </div>

        </div>

        {/* 6 Provinces Fast-Card Grid */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest font-sans font-semibold text-stone-500 mb-1">
                Địa Bàn 6 Tỉnh Thành
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Sắc Màu Từng Vùng Đất
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md">
              Nhấp vào bất kỳ tỉnh thành nào để mở thông tin chi tiết trên bản đồ và di sản văn hoá đặc trưng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROVINCES.map((prov) => (
              <button
                key={prov.id}
                onClick={() => onSelectProvince(prov)}
                type="button"
                className="group text-left p-6 bg-white rounded-sm border border-stone-200 hover:border-[#A43B21]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#A43B21] transition-colors">
                      {prov.name}
                    </span>
                    <span className="text-xs font-mono text-stone-500 tabular-nums">
                      {prov.areaKm2.toLocaleString('vi-VN')} km²
                    </span>
                  </div>

                  <div className="text-xs font-serif italic text-[#A43B21] mb-3">
                    "{prov.tagline}"
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {prov.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 truncate max-w-[200px]">
                    {prov.heroHighlight}
                  </span>
                  <span className="inline-flex items-center font-medium text-[#A43B21] group-hover:translate-x-1 transition-transform">
                    Khám phá <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pull Quote Editorial Element */}
        <div className="mt-16 pt-12 border-t border-stone-200/80 text-center max-w-3xl mx-auto">
          <blockquote className="font-serif italic text-xl sm:text-2xl text-stone-800 leading-relaxed mb-3">
            "Không xòe không vui, không xòe cây lúa không tốt, không xòe đôi lứa không thành duyên."
          </blockquote>
          <cite className="text-xs uppercase tracking-widest font-sans not-italic text-stone-500">
            Dân ca Thái cổ – Triết lý gắn kết cội nguồn Tây Bắc
          </cite>
        </div>

      </div>
    </section>
  );
};
