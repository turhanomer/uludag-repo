import React from 'react';
import AdminKanallar from './AdminKanallar';
import Mentorluk from './Mentorluk';
import AdminKariyer from './AdminKariyer';
import AdminAnaliz from './AdminAnaliz';
import AdminProfil from './AdminProfil';

const Admin = () => {
  return (
    <>
      
{/* SideNavBar Shell */}

{/* Main Content Area */}
<main className="w-full min-h-screen">
{/* TopAppBar */}
<header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-outline-variant/15 font-['Manrope'] font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium mb-1">
<span>Admin</span>
<span className="material-symbols-outlined text-xs" data-icon="chevron_right">chevron_right</span>
<span className="text-primary-container">Genel Bakış</span>
</div>
<h2 className="text-xl font-bold text-primary">Hoşgeldin Admin</h2>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
</div>
<div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
<div className="text-right">
<p className="text-sm font-bold text-on-surface leading-none">Emre Yılmaz</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Sistem Yöneticisi</p>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img alt="User Avatar" className="w-full h-full object-cover" data-alt="portrait of a professional man in a dark suit against a soft office background lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP02KQytM9yPHz7ANjTSMEN0X0bGQFufJ98igz9b6DqmZ1a6-8tBtH5mN4OjS_WoFqercDI4y4diuuWR9-vMRvbBP4ktqQZxzaud4iHK7rE9jtDWJhqV4di3Udw0zpcHCVYkrj_WG_KkRJdQd-fGbxUzch1Ik50gEp_iA8rEFlUQtJBfCEZnCdZPCpJoSlXMN408Y0wpo3O7VBPlMA0aXsi0X6YMOgdfZpec1F_q1RMHtUnsfxTVhri0QUW-MXXtVapCo8wagg5i_K"/>
</div>
</div>
</div>
</header>
<section className="p-8 space-y-8">
{/* Overview Cards (Asymmetric Bento Grid) */}
<div className="grid grid-cols-12 gap-6">
{/* Users Summary Card */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl border border-transparent shadow-sm hover:bg-surface-container-high transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-primary-fixed rounded-lg text-primary">
<span className="material-symbols-outlined" data-icon="group">group</span>
</div>
<span className="bg-primary-container/10 text-[#0F4C81] text-[10px] font-bold px-2 py-1 rounded">v1.0 MUST</span>
</div>
<h3 className="text-on-surface-variant text-sm font-medium mb-1">Toplam Kullanıcı</h3>
<div className="flex items-end gap-3">
<span className="text-3xl font-bold text-on-surface tracking-tight">1,284</span>
<span className="text-on-secondary-container bg-secondary-container/30 px-2 py-0.5 rounded text-xs font-bold mb-1 flex items-center">
<span className="material-symbols-outlined text-xs mr-0.5" data-icon="trending_up">trending_up</span>
                            12%
                        </span>
</div>
<div className="mt-6 flex gap-4">
<div>
<p className="text-xs text-on-surface-variant mb-0.5">Aktif</p>
<p className="text-sm font-bold text-primary">1,150</p>
</div>
<div className="w-px h-8 bg-outline-variant/30"></div>
<div>
<p className="text-xs text-on-surface-variant mb-0.5">Bekleyen</p>
<p className="text-sm font-bold text-tertiary">134</p>
</div>
</div>
</div>
{/* Active Posts Card */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:bg-surface-container-high transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-secondary-fixed rounded-lg text-secondary">
<span className="material-symbols-outlined" data-icon="campaign">campaign</span>
</div>
<span className="bg-secondary-container/20 text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded">v1.5 SHOULD</span>
</div>
<h3 className="text-on-surface-variant text-sm font-medium mb-1">Aktif İlanlar</h3>
<div className="flex items-end gap-3">
<span className="text-3xl font-bold text-on-surface tracking-tight">42</span>
<span className="text-xs text-on-surface-variant mb-1">Bu ay +8 yeni</span>
</div>
<div className="mt-6">
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-full" ></div>
</div>
<p className="text-[10px] text-on-surface-variant mt-2">Kapasite Kullanımı: %65</p>
</div>
</div>
{/* Recent Channels Card */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:bg-surface-container-high transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-tertiary-fixed rounded-lg text-tertiary">
<span className="material-symbols-outlined" data-icon="hub">hub</span>
</div>
<span className="bg-tertiary-container/10 text-tertiary text-[10px] font-bold px-2 py-1 rounded">v2.0 COULD</span>
</div>
<h3 className="text-on-surface-variant text-sm font-medium mb-1">Aktif Kanallar</h3>
<div className="flex items-end gap-3">
<span className="text-3xl font-bold text-on-surface tracking-tight">15</span>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-surface-container-lowest bg-slate-200 flex items-center justify-center text-[10px] font-bold">PR</div>
<div className="w-6 h-6 rounded-full border-2 border-surface-container-lowest bg-blue-200 flex items-center justify-center text-[10px] font-bold">RT</div>
<div className="w-6 h-6 rounded-full border-2 border-surface-container-lowest bg-green-200 flex items-center justify-center text-[10px] font-bold">GA</div>
</div>
</div>
<p className="text-xs text-on-surface-variant mt-6">Son eklenen: <span className="font-bold text-on-surface">Mezunlar Derneği</span></p>
</div>
</div>
{/* Approval Queue & Analytics */}
<div className="grid grid-cols-12 gap-6">
{/* User Approval Queue */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/15">
<div className="px-6 py-4 flex justify-between items-center border-b border-outline-variant/10">
<div>
<h3 className="font-bold text-primary font-headline">Onay Bekleyen Kayıtlar</h3>
<p className="text-xs text-on-surface-variant">Son 24 saat içinde gelen başvurular</p>
</div>
<button className="text-xs text-primary font-bold hover:underline">Tümünü Gör</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-[10px] uppercase tracking-widest text-on-surface-variant bg-surface-container-low">
<th className="px-6 py-3 font-semibold">Kullanıcı</th>
<th className="px-6 py-3 font-semibold">Rol</th>
<th className="px-6 py-3 font-semibold">E-Posta Doğrulama</th>
<th className="px-6 py-3 font-semibold text-right">İşlem</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/5">
<tr className="hover:bg-surface-container/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">AY</div>
<div>
<p className="text-sm font-bold text-on-surface">Ahmet Yılmaz</p>
<p className="text-[10px] text-on-surface-variant">2018 Mezunu</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="bg-primary/5 text-primary text-[10px] font-bold px-2 py-0.5 rounded">Mezun</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-secondary text-xs font-medium">
<span className="material-symbols-outlined text-sm" data-icon="verified">verified</span>
                                            .edu.tr onaylı
                                        </div>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-error hover:bg-error/10 p-1.5 rounded transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="close">close</span>
</button>
<button className="text-secondary hover:bg-secondary/10 p-1.5 rounded transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="check">check</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center font-bold text-xs">SE</div>
<div>
<p className="text-sm font-bold text-on-surface">Selda Erkin</p>
<p className="text-[10px] text-on-surface-variant">Akademisyen</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="bg-tertiary/5 text-tertiary text-[10px] font-bold px-2 py-0.5 rounded">Akademik</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-on-surface-variant/50 text-xs font-medium">
<span className="material-symbols-outlined text-sm" data-icon="pending">pending</span>
                                            Beklemede
                                        </div>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-error hover:bg-error/10 p-1.5 rounded transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="close">close</span>
</button>
<button className="text-secondary hover:bg-secondary/10 p-1.5 rounded transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="check">check</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">MB</div>
<div>
<p className="text-sm font-bold text-on-surface">Murat Boz</p>
<p className="text-[10px] text-on-surface-variant">2022 Mezunu</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="bg-primary/5 text-primary text-[10px] font-bold px-2 py-0.5 rounded">Mezun</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-secondary text-xs font-medium">
<span className="material-symbols-outlined text-sm" data-icon="verified">verified</span>
                                            .edu.tr onaylı
                                        </div>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-error hover:bg-error/10 p-1.5 rounded transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="close">close</span>
</button>
<button className="text-secondary hover:bg-secondary/10 p-1.5 rounded transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="check">check</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Analytics Widget (Sector Distribution) */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15">
<div className="flex justify-between items-center mb-6">
<h3 className="font-bold text-primary font-headline">Sektörel Dağılım</h3>
<span className="material-symbols-outlined text-on-surface-variant cursor-help" data-icon="info">info</span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium">Reklam &amp; Pazarlama</span>
<span className="text-on-surface-variant">%35</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-primary h-full" ></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium">Medya &amp; Gazetecilik</span>
<span className="text-on-surface-variant">%28</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-secondary h-full" ></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium">Halkla İlişkiler</span>
<span className="text-on-surface-variant">%22</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-tertiary h-full" ></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium">Diğer</span>
<span className="text-on-surface-variant">%15</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-outline-variant/40 h-full" ></div>
</div>
</div>
</div>
<div className="mt-8 p-4 bg-surface-container-low rounded-lg">
<p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Hızlı Özet</p>
<p className="text-xs text-on-surface-variant leading-relaxed">Mezunlarımızın büyük çoğunluğu İstanbul merkezli reklam ajanslarında kariyerine devam etmektedir.</p>
</div>
</div>
</div>
{/* Topluluk Açma Talepleri */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/15 mt-6">
  <div className="px-6 py-4 flex justify-between items-center border-b border-outline-variant/10">
    <div>
      <h3 className="font-bold text-primary font-headline">Topluluk Açma Talepleri</h3>
      <p className="text-xs text-on-surface-variant">Yeni öğrenci kulübü ve topluluk başvuruları</p>
    </div>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full text-left">
      <thead>
        <tr className="text-[10px] uppercase tracking-widest text-on-surface-variant bg-surface-container-low">
          <th className="px-6 py-3 font-semibold">Başvuran / Öğrenci</th>
          <th className="px-6 py-3 font-semibold">Önerilen Topluluk Adı</th>
          <th className="px-6 py-3 font-semibold">Resmi Ünvan (Title) Ver</th>
          <th className="px-6 py-3 font-semibold text-right">İşlem</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/5">
        <tr className="hover:bg-surface-container/30 transition-colors">
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">BK</div>
              <div>
                <p className="text-sm font-bold text-on-surface">Burak Kaya</p>
                <p className="text-[10px] text-on-surface-variant">Radyo, TV ve Sinema</p>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <span className="text-sm font-semibold text-on-surface">Kısa Film Atölyesi</span>
          </td>
          <td className="px-6 py-4">
            <input type="text" placeholder="Örn: Başkan, Kurucu..." defaultValue="Kurucu Başkan" className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/20 rounded text-sm w-48 focus:ring-1 focus:ring-primary" />
          </td>
          <td className="px-6 py-4 text-right space-x-2">
            <button className="text-error hover:bg-error/10 px-3 py-1.5 rounded transition-colors text-xs font-bold">
              Reddet
            </button>
            <button className="text-white bg-primary hover:bg-primary-container hover:text-primary px-3 py-1.5 rounded transition-colors text-xs font-bold">
              Onayla ve Title Ata
            </button>
          </td>
        </tr>
        <tr className="hover:bg-surface-container/30 transition-colors">
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center font-bold text-xs">CD</div>
              <div>
                <p className="text-sm font-bold text-on-surface">Cansu Demir</p>
                <p className="text-[10px] text-on-surface-variant">Halkla İlişkiler</p>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <span className="text-sm font-semibold text-on-surface">Dijital PR Kulübü</span>
          </td>
          <td className="px-6 py-4">
            <input type="text" placeholder="Örn: Başkan, Kurucu..." defaultValue="Topluluk Lideri" className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/20 rounded text-sm w-48 focus:ring-1 focus:ring-primary" />
          </td>
          <td className="px-6 py-4 text-right space-x-2">
            <button className="text-error hover:bg-error/10 px-3 py-1.5 rounded transition-colors text-xs font-bold">
              Reddet
            </button>
            <button className="text-white bg-primary hover:bg-primary-container hover:text-primary px-3 py-1.5 rounded transition-colors text-xs font-bold">
              Onayla ve Title Ata
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</section>

{/* Single Page Admin Dashboard Sections */}
<div className="space-y-16 pb-16">
  <div id="kanallar" className="scroll-mt-24 border-t border-outline-variant/15">
    <AdminKanallar />
  </div>
  <div id="mentorluk" className="scroll-mt-24 border-t border-outline-variant/15">
    <Mentorluk />
  </div>
  <div id="kariyer" className="scroll-mt-24 border-t border-outline-variant/15">
    <AdminKariyer />
  </div>
  <div id="analiz" className="scroll-mt-24 border-t border-outline-variant/15">
    <AdminAnaliz />
  </div>
  <div id="profil" className="scroll-mt-24 border-t border-outline-variant/15">
    <AdminProfil />
  </div>
</div>

{/* Footer Shell */}

</main>

    </>
  );
};

export default Admin;
