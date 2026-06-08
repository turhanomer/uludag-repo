import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-[#f8f9fa] dark:bg-slate-900 sticky top-0 z-50 transition-colors duration-200">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto font-['Manrope'] tracking-tight leading-tight">
        <Link to="/" className="text-xl font-bold text-[#0F4C81] dark:text-white">İNİF Kariyer</Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-[#0F4C81] transition-colors duration-200">Hakkımızda</Link>
          <Link to="/bolumler" className="text-slate-600 dark:text-slate-400 hover:text-[#0F4C81] transition-colors duration-200">Bölümler</Link>
          <Link to="/kariyer" className="text-slate-600 dark:text-slate-400 hover:text-[#0F4C81] transition-colors duration-200">Kariyer</Link>
          <Link to="/mezunlar" className="text-slate-600 dark:text-slate-400 hover:text-[#0F4C81] transition-colors duration-200">Mezunlar</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/giris" className="px-5 py-2 text-sm font-semibold text-[#0F4C81] hover:bg-surface-container-low rounded transition-all duration-150 active:scale-95">Giriş Yap</Link>
          <Link to="/kayit" className="px-6 py-2 text-sm font-semibold academic-gradient text-white rounded-lg shadow-sm hover:opacity-90 transition-all duration-150 active:scale-95">Kayıt Ol</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
