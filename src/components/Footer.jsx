import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] dark:bg-slate-950 border-t border-[#c2c7d1]/15 py-24 px-8 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="font-bold text-[#0F4C81] text-xl mb-6">İNİF Kariyer</div>
          <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed max-w-xs">
            İnönü Üniversitesi İletişim Fakültesi öğrencileri ve mezunları arasındaki bağı güçlendiren profesyonel gelişim platformu.
          </p>
          <div className="flex gap-4 mt-8">
            <a className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-[18px]">share</span></a>
            <a className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
            <a className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-[18px]">mail</span></a>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="font-headline font-bold text-primary text-sm uppercase tracking-wider">Hızlı Erişim</h5>
          <ul className="space-y-3 font-['Inter'] text-xs text-slate-500">
            <li><a className="hover:text-[#0F4C81] transition-colors" href="#">Bölümlerimiz</a></li>
            <li><a className="hover:text-[#0F4C81] transition-colors" href="#">Duyurular</a></li>
            <li><a className="hover:text-[#0F4C81] transition-colors" href="#">Etkinlik Takvimi</a></li>
            <li><a className="hover:text-[#0F4C81] transition-colors" href="#">Sıkça Sorulanlar</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-headline font-bold text-primary text-sm uppercase tracking-wider">Kurumsal</h5>
          <ul className="space-y-3 font-['Inter'] text-xs text-slate-500">
            <li><a className="hover:text-[#0F4C81] transition-colors" href="#">KVKK Aydınlatma</a></li>
            <li><a className="hover:text-[#0F4C81] transition-colors" href="#">Kullanım Koşulları</a></li>
            <li><a className="hover:text-[#0F4C81] transition-colors" href="#">İletişim</a></li>
            <li><a className="hover:text-[#0F4C81] transition-colors" href="#">Fakülte Sitesi</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-headline font-bold text-primary text-sm uppercase tracking-wider">Kampüs</h5>
          <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
            İnönü Üniversitesi Kampüsü<br/>
            İletişim Fakültesi Dekanlığı<br/>
            44280 Battalgazi/Malatya
          </p>
          <div className="mt-4 p-4 bg-surface-container rounded-lg border border-outline-variant/15">
            <p className="text-[10px] text-on-surface-variant leading-snug">Kariyer merkezimiz hafta içi 08:30 - 17:30 saatleri arasında açıktır.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#c2c7d1]/15 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-['Inter'] text-xs text-slate-500">© 2024 İNİF Kariyer - Tüm Hakları Saklıdır.</p>
        <div className="flex gap-6">
          <a className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest" href="#">Gizlilik Politikası</a>
          <a className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest" href="#">Çerez Tercihleri</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
