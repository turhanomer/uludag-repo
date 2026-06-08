import React from 'react';

const AdminProfil = () => {
  return (
    <>
      <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-outline-variant/15 font-['Manrope'] font-semibold">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium mb-1">
            <span>Admin</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary-container">Profil</span>
          </div>
          <h2 className="text-xl font-bold text-primary">Hesap Ayarları</h2>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-all">
          Değişiklikleri Kaydet
        </button>
      </header>

      <section className="p-8 max-w-4xl">
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15">
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-outline-variant/10">
            <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-primary overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP02KQytM9yPHz7ANjTSMEN0X0bGQFufJ98igz9b6DqmZ1a6-8tBtH5mN4OjS_WoFqercDI4y4diuuWR9-vMRvbBP4ktqQZxzaud4iHK7rE9jtDWJhqV4di3Udw0zpcHCVYkrj_WG_KkRJdQd-fGbxUzch1Ik50gEp_iA8rEFlUQtJBfCEZnCdZPCpJoSlXMN408Y0wpo3O7VBPlMA0aXsi0X6YMOgdfZpec1F_q1RMHtUnsfxTVhri0QUW-MXXtVapCo8wagg5i_K" alt="Admin" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-on-surface">Emre Yılmaz</h3>
              <p className="text-on-surface-variant text-sm mb-3">Sistem Yöneticisi</p>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs font-bold bg-surface-container border border-outline-variant/20 rounded hover:bg-surface-container-high">Fotoğrafı Değiştir</button>
                <button className="px-3 py-1.5 text-xs font-bold text-error bg-error/10 rounded hover:bg-error/20">Kaldır</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Ad Soyad</label>
              <input type="text" defaultValue="Emre Yılmaz" className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">E-Posta Adresi</label>
              <input type="email" defaultValue="admin@inif.edu.tr" className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Görev / Unvan</label>
              <input type="text" defaultValue="Sistem Yöneticisi" className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Telefon</label>
              <input type="tel" defaultValue="+90 555 123 4567" className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm focus:ring-1 focus:ring-primary" />
            </div>
          </div>

          <h4 className="font-bold text-on-surface mb-4">Bildirim Tercihleri</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary rounded focus:ring-primary" />
              <span className="text-sm text-on-surface-variant">Yeni kullanıcı kayıtlarında bana e-posta gönder</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary rounded focus:ring-primary" />
              <span className="text-sm text-on-surface-variant">Yeni mentörlük taleplerinde sistem bildirimi gönder</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" />
              <span className="text-sm text-on-surface-variant">Haftalık özet raporlarını e-posta ile al</span>
            </label>
          </div>
        </div>
      </section>
    </>
  );
};
export default AdminProfil;
