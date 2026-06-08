import React from 'react';

const AdminKanallar = () => {
  return (
    <>
      <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-outline-variant/15 font-['Manrope'] font-semibold">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium mb-1">
            <span>Admin</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary-container">Kanallar</span>
          </div>
          <h2 className="text-xl font-bold text-primary">Kanal Yönetimi</h2>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:opacity-90 transition-all">
          <span className="material-symbols-outlined text-[18px]">add</span>
          Yeni Kanal Oluştur
        </button>
      </header>
      
      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Kanal Card 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined">campaign</span>
              </div>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">GENEL</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface mb-2">Duyurular</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">Fakülte genelini ilgilendiren resmi duyuru ve etkinlikler.</p>
            <div className="flex justify-between items-center border-t border-outline-variant/10 pt-4">
              <span className="text-xs text-on-surface-variant font-medium">1,200 Üye</span>
              <button className="text-primary text-sm font-bold hover:underline">Yönet</button>
            </div>
          </div>

          {/* Kanal Card 2 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined">movie</span>
              </div>
              <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded">KULÜP</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface mb-2">Sinema Kulübü</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">RTS bölümü ağırlıklı, haftalık film gösterimleri.</p>
            <div className="flex justify-between items-center border-t border-outline-variant/10 pt-4">
              <span className="text-xs text-on-surface-variant font-medium">340 Üye</span>
              <button className="text-primary text-sm font-bold hover:underline">Yönet</button>
            </div>
          </div>

          {/* Kanal Card 3 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined">connect_without_contact</span>
              </div>
              <span className="bg-tertiary/10 text-tertiary text-[10px] font-bold px-2 py-1 rounded">BÖLÜM</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface mb-2">Halkla İlişkiler</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">Bölüm içi staj ve haber paylaşım platformu.</p>
            <div className="flex justify-between items-center border-t border-outline-variant/10 pt-4">
              <span className="text-xs text-on-surface-variant font-medium">450 Üye</span>
              <button className="text-primary text-sm font-bold hover:underline">Yönet</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AdminKanallar;
