import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Kariyer from './pages/Kariyer';
import Admin from './pages/Admin';
import AdminLayout from './pages/AdminLayout';
import AdminKanallar from './pages/AdminKanallar';
import AdminKariyer from './pages/AdminKariyer';
import AdminAnaliz from './pages/AdminAnaliz';
import AdminProfil from './pages/AdminProfil';
import Mentorluk from './pages/Mentorluk';
import Bolumler from './pages/Bolumler';
import Mezunlar from './pages/Mezunlar';
import GirisYap from './pages/GirisYap';
import KayitOl from './pages/KayitOl';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="kariyer" element={<Kariyer />} />
          <Route path="bolumler" element={<Bolumler />} />
          <Route path="mezunlar" element={<Mezunlar />} />
          <Route path="giris" element={<GirisYap />} />
          <Route path="kayit" element={<KayitOl />} />
        </Route>
        
        {/* Admin Paneli */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="kanallar" element={<AdminKanallar />} />
          <Route path="kariyer" element={<AdminKariyer />} />
          <Route path="analiz" element={<AdminAnaliz />} />
          <Route path="profil" element={<AdminProfil />} />
        </Route>

        {/* Mentörlük Modülü (Admin Layout içinden çalışacak) */}
        <Route path="/mentorluk" element={<AdminLayout />}>
          <Route index element={<Mentorluk />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
