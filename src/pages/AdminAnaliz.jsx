import React from 'react';

const AdminAnaliz = () => {
  return (
    <>
      <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-outline-variant/15 font-['Manrope'] font-semibold">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium mb-1">
            <span>Admin</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary-container">Analiz</span>
          </div>
          <h2 className="text-xl font-bold text-primary">Detaylı İstatistikler</h2>
        </div>
        <button className="bg-surface-container text-on-surface px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-surface-container-high transition-all">
          <span className="material-symbols-outlined text-[18px]">download</span>
          Raporu İndir
        </button>
      </header>

      <section className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
            <h4 className="text-sm text-on-surface-variant font-medium mb-1">Aylık Aktif Kullanıcı</h4>
            <div className="text-3xl font-bold text-primary mb-2">4,250</div>
            <span className="text-xs text-secondary font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
              %8 Geçen Aya Göre
            </span>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
            <h4 className="text-sm text-on-surface-variant font-medium mb-1">Başvurulan İlan Sayısı</h4>
            <div className="text-3xl font-bold text-tertiary mb-2">842</div>
            <span className="text-xs text-secondary font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
              %15 Geçen Aya Göre
            </span>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
            <h4 className="text-sm text-on-surface-variant font-medium mb-1">Eşleşen Mentörlük</h4>
            <div className="text-3xl font-bold text-primary mb-2">156</div>
            <span className="text-xs text-secondary font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
              %5 Geçen Aya Göre
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
            <h3 className="font-bold text-primary mb-6">Bölüm Bazlı İstihdam (İlk 6 Ay)</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-on-surface">Yönetim Bilişim Sistemleri</span>
                  <span>%88</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-on-surface">Halkla İlişkiler ve Tanıtım</span>
                  <span>%75</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-on-surface">Radyo, TV ve Sinema</span>
                  <span>%70</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2">
                  <div className="bg-tertiary h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15">
            <h3 className="font-bold text-primary mb-6">Platform Kullanım Dağılımı</h3>
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 rounded-full border-[16px] border-surface-container flex items-center justify-center">
                <div className="absolute top-0 right-0 w-full h-full border-[16px] border-primary rounded-full border-t-transparent border-l-transparent transform rotate-45"></div>
                <span className="text-xl font-bold text-on-surface">100%</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="w-3 h-3 bg-primary rounded-full"></span> Öğrenci (%60)
                </div>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="w-3 h-3 bg-secondary rounded-full"></span> Mezun (%25)
                </div>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="w-3 h-3 bg-surface-container-high rounded-full"></span> Firma/Kurum (%15)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AdminAnaliz;
