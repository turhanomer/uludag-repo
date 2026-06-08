import React from 'react';

const AdminKariyer = () => {
  return (
    <>
      <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-outline-variant/15 font-['Manrope'] font-semibold">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium mb-1">
            <span>Admin</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary-container">Kariyer Portalı</span>
          </div>
          <h2 className="text-xl font-bold text-primary">İlan Yönetimi</h2>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:opacity-90 transition-all">
          <span className="material-symbols-outlined text-[18px]">add</span>
          Yeni İlan Yayınla
        </button>
      </header>
      
      <section className="p-8">
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/15 overflow-hidden">
          <div className="px-6 py-4 flex justify-between items-center border-b border-outline-variant/10 bg-surface-container-low">
            <h3 className="font-bold text-primary font-headline">İlan Havuzu</h3>
            <div className="flex gap-2">
              <select className="text-xs px-3 py-1.5 rounded border border-outline-variant/20 bg-white text-on-surface">
                <option>Tüm İlanlar</option>
                <option>Bekleyenler</option>
                <option>Yayındakiler</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-on-surface-variant bg-surface">
                  <th className="px-6 py-3 font-semibold">Firma / Kurum</th>
                  <th className="px-6 py-3 font-semibold">İlan Başlığı</th>
                  <th className="px-6 py-3 font-semibold">Tür</th>
                  <th className="px-6 py-3 font-semibold">Tarih</th>
                  <th className="px-6 py-3 font-semibold">Durum</th>
                  <th className="px-6 py-3 font-semibold text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                <tr className="hover:bg-surface-container/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-on-surface text-sm">TRT Haber</td>
                  <td className="px-6 py-4 text-sm">Görsel Yönetmen Yardımcısı</td>
                  <td className="px-6 py-4"><span className="text-xs font-semibold px-2 py-1 bg-surface-container-high rounded">Tam Zamanlı</span></td>
                  <td className="px-6 py-4 text-xs text-on-surface-variant">12 Mayıs 2024</td>
                  <td className="px-6 py-4"><span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">YAYINDA</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:underline text-xs font-bold">Düzenle</button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-on-surface text-sm">Medina Turgul DDB</td>
                  <td className="px-6 py-4 text-sm">Junior Reklam Yazarı</td>
                  <td className="px-6 py-4"><span className="text-xs font-semibold px-2 py-1 bg-surface-container-high rounded">Staj</span></td>
                  <td className="px-6 py-4 text-xs text-on-surface-variant">14 Mayıs 2024</td>
                  <td className="px-6 py-4"><span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded">ONAY BEKLİYOR</span></td>
                  <td className="px-6 py-4 text-right flex gap-2 justify-end">
                    <button className="text-error hover:bg-error/10 px-2 py-1 rounded text-xs font-bold">Reddet</button>
                    <button className="text-white bg-primary hover:bg-primary/90 px-2 py-1 rounded text-xs font-bold">Onayla</button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-on-surface text-sm">Anadolu Ajansı</td>
                  <td className="px-6 py-4 text-sm">Sosyal Medya Analisti</td>
                  <td className="px-6 py-4"><span className="text-xs font-semibold px-2 py-1 bg-surface-container-high rounded">Yarı Zamanlı</span></td>
                  <td className="px-6 py-4 text-xs text-on-surface-variant">10 Mayıs 2024</td>
                  <td className="px-6 py-4"><span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">YAYINDA</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:underline text-xs font-bold">Düzenle</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default AdminKariyer;
