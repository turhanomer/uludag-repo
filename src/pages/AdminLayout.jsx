import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id, e) => {
    e.preventDefault();
    if (location.pathname !== '/admin') {
      navigate('/admin');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'dashboard') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex bg-surface min-h-screen relative z-0">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant/15 flex flex-col py-6 font-['Inter'] text-sm font-medium z-[100]">
        <div className="px-6 mb-8">
          <h1 className="text-lg font-bold text-[#0F4C81]">İNİF Panel</h1>
          <p className="text-xs text-on-surface-variant/70 uppercase tracking-widest mt-1">Yönetim Paneli</p>
        </div>
        <nav className="flex-1 space-y-1 px-2">
          <button onClick={(e) => scrollToSection('dashboard', e)} className="w-full flex items-center gap-3 py-3 pl-4 transition-all cursor-pointer text-slate-500 hover:bg-[#f8f9fa] hover:text-[#0F4C81]">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </button>
          <button onClick={(e) => scrollToSection('kanallar', e)} className="w-full flex items-center gap-3 py-3 pl-4 transition-all cursor-pointer text-slate-500 hover:bg-[#f8f9fa] hover:text-[#0F4C81]">
            <span className="material-symbols-outlined">hub</span>
            <span>Kanallar</span>
          </button>
          <button onClick={(e) => scrollToSection('mentorluk', e)} className="w-full flex items-center gap-3 py-3 pl-4 transition-all cursor-pointer text-slate-500 hover:bg-[#f8f9fa] hover:text-[#0F4C81]">
            <span className="material-symbols-outlined">group</span>
            <span>Mezun Yönetimi</span>
          </button>
          <button onClick={(e) => scrollToSection('kariyer', e)} className="w-full flex items-center gap-3 py-3 pl-4 transition-all cursor-pointer text-slate-500 hover:bg-[#f8f9fa] hover:text-[#0F4C81]">
            <span className="material-symbols-outlined">work</span>
            <span>Kariyer Portalı</span>
          </button>
          <button onClick={(e) => scrollToSection('analiz', e)} className="w-full flex items-center gap-3 py-3 pl-4 transition-all cursor-pointer text-slate-500 hover:bg-[#f8f9fa] hover:text-[#0F4C81]">
            <span className="material-symbols-outlined">analytics</span>
            <span>Analiz</span>
          </button>
        </nav>
        <div className="px-4 mb-6 mt-auto">
          <button className="w-full cta-gradient text-white py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 font-semibold active:scale-95 transition-transform cursor-pointer relative z-10">
            <span className="material-symbols-outlined text-sm">add</span>
            Yeni İlan
          </button>
        </div>
        <div className="border-t border-outline-variant/15 pt-4 space-y-1 px-2">
          <button onClick={(e) => scrollToSection('profil', e)} className="w-full flex items-center gap-3 py-2 pl-4 transition-all cursor-pointer text-slate-500 hover:bg-[#f8f9fa] hover:text-[#0F4C81]">
            <span className="material-symbols-outlined">settings</span>
            <span>Profil / Ayarlar</span>
          </button>
          <a className="flex items-center gap-3 py-2 text-slate-500 pl-4 hover:bg-[#f8f9fa] hover:text-error transition-all cursor-pointer" href="/">
            <span className="material-symbols-outlined">logout</span>
            <span>Siteye Dön</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen relative z-10">
        <Outlet />
        {/* Footer Shell */}
        <footer className="w-full py-6 px-8 border-t border-outline-variant/15 font-['Inter'] text-xs text-slate-500 mt-auto bg-surface relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="font-bold text-[#0F4C81]">İNİF Panel</span>
              <span className="text-slate-400">© 2024 - Tüm Hakları Saklıdır.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default AdminLayout;
