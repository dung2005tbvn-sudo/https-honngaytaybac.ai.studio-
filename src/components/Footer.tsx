import React, { useState } from 'react';
import { Send, Check, Heart, Compass, ShieldCheck } from 'lucide-react';
import { PROVINCES, Province } from '../data/culturalData';

interface FooterProps {
  onSelectProvince: (prov: Province) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectProvince }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#FBF9F5] pt-16 pb-12 border-t-2 border-[#A43B21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Cultural Conservation Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#A43B21] flex items-center justify-center text-amber-100 font-serif font-bold text-base">
                TB
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Hồn Ngàn Tây Bắc
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Không gian số lưu trữ, tôn vinh và lan tỏa vẻ đẹp di sản văn hoá, phong tục truyền thống và tinh hoa con người 6 tỉnh vùng cao Tây Bắc Việt Nam.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-200/90 pt-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Gìn giữ & tôn trọng giá trị nguyên bản di sản các dân tộc</span>
            </div>
          </div>

          {/* 6 Provinces Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-amber-200">
              6 Tỉnh Vùng Tây Bắc
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {PROVINCES.map(prov => (
                <li key={prov.id}>
                  <button
                    onClick={() => {
                      onSelectProvince(prov);
                      const el = document.getElementById('ban-do-tuong-tac');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    type="button"
                    className="hover:text-amber-300 transition-colors text-left flex items-center gap-2"
                  >
                    <span>{prov.name}</span>
                    <span className="text-stone-600 font-mono">({prov.capital})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup (Nhận Bản Tin Di Sản) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-amber-200">
              Bản Tin Văn Hoá Vùng Cao
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Nhận thông tin về các mùa lễ hội hoa ban, mùa lúa chín Mù Cang Chải và câu chuyện di sản mới nhất.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  required
                  className="w-full px-3.5 py-2.5 text-xs text-stone-900 bg-stone-100 rounded-l-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#A43B21] hover:bg-[#882F19] text-white rounded-r-sm transition-colors text-xs font-semibold flex items-center justify-center shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Cảm ơn bạn! Đã đăng ký nhận bản tin di sản thành công.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright & Respect Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <div>
            © {new Date().getFullYear()} Hồn Ngàn Tây Bắc. Hành trình Di sản Văn hoá phi vật thể Việt Nam.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Được kiến tạo với lòng kính ngưỡng bản sắc đại ngàn</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
