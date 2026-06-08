import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Senior UX Designer',
    company: 'MediaMarkt Türkiye',
    badge: 'YENİ İLAN',
    badgeColor: 'bg-secondary-container text-on-secondary-container',
    description: 'E-ticaret platformlarımızın kullanıcı deneyimini geliştirecek, veri odaklı tasarım süreçlerini yönetecek yetenekli bir UX tasarımcısı arıyoruz. Figma ve portfolyo zorunludur.',
    location: 'İstanbul, Maslak',
    type: 'Tam Zamanlı',
    salary: 'Rekabetçi Maaş',
    deadline: '30 Haziran 2025',
    requirements: ['Figma bilgisi', 'En az 3 yıl deneyim', 'E-ticaret deneyimi', 'Portfolyo zorunlu'],
    about: 'MediaMarkt, Avrupa\'nın en büyük tüketici elektroniği perakendecilerinden biridir. Türkiye genelinde 50\'den fazla mağaza ve güçlü dijital altyapısıyla sektörün liderlerindendir.',
    logo: null, abbr: 'MM', logoColor: 'text-red-600'
  },
  {
    id: 2,
    title: 'Kurumsal İletişim Stajyeri',
    company: 'Publicis Groupe',
    badge: 'STAJ',
    badgeColor: 'bg-blue-100 text-blue-800',
    description: 'Global müşterilerimizin iletişim stratejilerine destek verecek, metin yazımı ve raporlama süreçlerinde aktif rol alacak 3. veya 4. sınıf öğrencileri arıyoruz.',
    location: 'Hibrit / İstanbul',
    type: '3-6 Ay',
    salary: 'Staj Ücreti',
    deadline: '15 Temmuz 2025',
    requirements: ['3. veya 4. sınıf öğrencisi', 'İyi seviye İngilizce', 'Metin yazarlığı yeteneği', 'Takım çalışmasına yatkınlık'],
    about: 'Publicis Groupe, dünyanın en büyük reklam ve iletişim gruplarından biridir. 100\'den fazla ülkede faaliyet göstermektedir.',
    logo: null, abbr: 'PG', logoColor: 'text-blue-700'
  },
  {
    id: 3,
    title: 'Akademik Başarı Bursu 2024',
    company: 'İNİF Vakfı',
    badge: 'BURS',
    badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    description: 'Fakültemizde yüksek başarı gösteren, sosyo-ekonomik desteğe ihtiyaç duyan öğrencilere yönelik yıllık eğitim bursu programı başvuruları başlamıştır.',
    location: 'İnegöl, Bursa',
    type: 'Burs',
    salary: 'Yıllık Burs',
    deadline: '15 Ekim 2024',
    requirements: ['3.50+ GANO', 'Sosyo-ekonomik destek beyanı', 'Motivasyon mektubu', 'İki referans mektubu'],
    about: 'İNİF Vakfı, İnegöl İşletme Fakültesi bünyesinde faaliyet göstererek öğrencilerin akademik ve kariyer gelişimini desteklemeyi amaçlar.',
    logo: null, abbr: 'İV', logoColor: 'text-amber-700'
  },
  {
    id: 4,
    title: 'Social Media Manager',
    company: 'Havas Istanbul',
    badge: null,
    badgeColor: '',
    description: 'Kreatif kampanya fikirleri üretecek, topluluk yönetimi ve reklam paneli operasyonlarını yürütecek enerjik ekip arkadaşları arıyoruz.',
    location: 'İstanbul, Levent',
    type: 'Tam Zamanlı',
    salary: '35.000 - 50.000 ₺',
    deadline: '1 Ağustos 2025',
    requirements: ['Sosyal medya yönetim araçları deneyimi', 'Meta & TikTok reklam paneli bilgisi', 'Kreatif içerik üretimi', 'Analitik düşünme'],
    about: 'Havas, global ölçekte faaliyet gösteren önde gelen iletişim ve reklam gruplarından biridir. İstanbul ofisi 200\'den fazla çalışanıyla kreatif çözümler üretmektedir.',
    logo: null, abbr: 'HV', logoColor: 'text-purple-700'
  }
];

const JobDetailModal = ({ job, onClose }) => {
  if (!job) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a6e] p-7 rounded-t-2xl text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-xl text-white">close</span>
          </button>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
              <span className={job.logoColor}>{job.abbr}</span>
            </div>
            <div>
              {job.badge && (
                <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-1 ${job.badgeColor}`}>
                  {job.badge}
                </span>
              )}
              <h2 className="text-xl font-headline font-bold text-white">{job.title}</h2>
              <p className="text-white/70 text-sm font-semibold">{job.company}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1 bg-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80 font-medium">
              <span className="material-symbols-outlined text-sm">location_on</span>{job.location}
            </span>
            <span className="flex items-center gap-1 bg-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80 font-medium">
              <span className="material-symbols-outlined text-sm">schedule</span>{job.type}
            </span>
            <span className="flex items-center gap-1 bg-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80 font-medium">
              <span className="material-symbols-outlined text-sm">payments</span>{job.salary}
            </span>
            <span className="flex items-center gap-1 bg-red-400/20 rounded-lg px-3 py-1.5 text-xs text-red-200 font-medium">
              <span className="material-symbols-outlined text-sm">alarm</span>Son: {job.deadline}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-7 space-y-5">
          <div>
            <h3 className="font-headline font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1a3a6e] text-base">description</span>
              İlan Açıklaması
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h3 className="font-headline font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1a3a6e] text-base">checklist</span>
              Aranan Nitelikler
            </h3>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6e] shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1a3a6e] text-base">business</span>
              Kurum Hakkında
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{job.about}</p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-7 pb-7 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            Kapat
          </button>
          <button className="flex-1 py-3 rounded-xl bg-[#0a1628] text-white font-bold text-sm hover:bg-[#1a3a6e] transition-colors shadow-lg">
            Hemen Başvur
          </button>
        </div>
      </div>
    </div>
  );
};

const Kariyer = () => {
  const [viewMode, setViewMode] = useState('liste');
  const [selectedJob, setSelectedJob] = useState(null);

  // Filter state
  const [location, setLocation] = useState('');
  const [sectors, setSectors] = useState({ dijital: true, halkla: false, gorsel: false, radyo: false });
  const [activeType, setActiveType] = useState('Tam Zamanlı');
  const [degree, setDegree] = useState('');

  const toggleSector = (key) => setSectors(prev => ({ ...prev, [key]: !prev[key] }));

  const clearFilters = () => {
    setLocation('');
    setSectors({ dijital: true, halkla: false, gorsel: false, radyo: false });
    setActiveType('Tam Zamanlı');
    setDegree('');
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">v2.0 COULD</span>
              <h1 className="text-4xl font-headline font-extrabold text-primary -tracking-wider">Kariyer Portalı</h1>
            </div>
            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
              İletişim Fakültesi öğrencileri ve mezunları için küratörlüğünü yaptığımız güncel iş, staj ve burs imkânlarını keşfedin.
            </p>
          </div>
          {/* View toggle */}
          <div className="flex gap-2">
            <div className="bg-surface-container-low p-1 rounded-lg flex">
              <button
                onClick={() => setViewMode('liste')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${viewMode === 'liste' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Liste
              </button>
              <button
                onClick={() => setViewMode('izgara')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${viewMode === 'izgara' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Izgara
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-surface-container-low rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="material-symbols-outlined">tune</span>
                <h2 className="font-headline font-bold text-lg">Filtrele</h2>
              </div>
              <div className="space-y-6">
                {/* Location */}
                <div className="space-y-3">
                  <label className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest text-xs">Konum</label>
                  <select
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 p-3"
                  >
                    <option value="">Tüm Konumlar</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="remote">Uzaktan (Remote)</option>
                  </select>
                </div>
                {/* Sector */}
                <div className="space-y-3">
                  <label className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest text-xs">Sektör</label>
                  <div className="space-y-2">
                    {[
                      { key: 'dijital', label: 'Dijital Pazarlama' },
                      { key: 'halkla', label: 'Halkla İlişkiler' },
                      { key: 'gorsel', label: 'Görsel İletişim' },
                      { key: 'radyo', label: 'Radyo & TV' }
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-3 group cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sectors[key]}
                          onChange={() => toggleSector(key)}
                          className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                        />
                        <span className="text-sm text-on-surface group-hover:text-primary transition-colors">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Type */}
                <div className="space-y-3">
                  <label className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest text-xs">İlan Tipi</label>
                  <div className="flex flex-wrap gap-2">
                    {['Tam Zamanlı', 'Staj', 'Burs'].map(type => (
                      <span
                        key={type}
                        onClick={() => setActiveType(activeType === type ? '' : type)}
                        className={`px-3 py-1 text-xs font-semibold rounded-full cursor-pointer transition-all ${
                          activeType === type
                            ? 'bg-[#0a1628] text-white'
                            : 'bg-surface-container-high text-on-surface-variant hover:bg-secondary-container'
                        }`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Degree */}
                <div className="space-y-3">
                  <label className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest text-xs">Eğitim Seviyesi</label>
                  <select
                    value={degree}
                    onChange={e => setDegree(e.target.value)}
                    className="w-full bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 p-3"
                  >
                    <option value="">Lisans Öğrencisi</option>
                    <option value="mezun">Yeni Mezun</option>
                    <option value="yuksek">Yüksek Lisans</option>
                  </select>
                </div>
              </div>
              <button
                onClick={clearFilters}
                className="w-full mt-8 py-3 bg-surface-container-highest text-primary font-bold text-sm rounded-lg hover:bg-outline-variant/20 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">filter_alt_off</span>
                Filtreleri Temizle
              </button>
            </div>
            {/* Tip */}
            <div className="bg-secondary-container/30 p-6 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-headline font-bold text-on-secondary-container mb-2">Profesyonel Profil</h4>
                <p className="text-xs text-on-secondary-container/80 leading-relaxed">Profilinizi %100 tamamlayarak ilanlarda öne çıkın ve kurumsal firmaların dikkatini çekin.</p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl opacity-10 text-on-secondary-container">stars</span>
            </div>
          </aside>

          {/* Listings */}
          <div className="lg:col-span-9">
            {viewMode === 'liste' ? (
              <div className="space-y-6">
                {jobs.map(job => (
                  <div key={job.id} className="group bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:bg-surface-container-high flex flex-col md:flex-row gap-6">
                    <div className="w-20 h-20 bg-surface rounded-lg flex items-center justify-center shrink-0 font-black text-xl">
                      <span className={job.logoColor}>{job.abbr}</span>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-headline font-bold text-on-surface">{job.title}</h3>
                          <p className="text-primary font-semibold text-sm">{job.company}</p>
                        </div>
                        {job.badge && (
                          <span className={`text-[10px] font-bold px-2 py-1 rounded ${job.badgeColor}`}>{job.badge}</span>
                        )}
                      </div>
                      <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant font-medium">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1 text-tertiary">
                          <span className="material-symbols-outlined text-sm">payments</span>
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col justify-end gap-3 shrink-0">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface-variant font-bold text-sm hover:bg-surface transition-all"
                      >
                        Detaylar
                      </button>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="px-6 py-2.5 rounded-lg bg-[#0a1628] text-white font-bold text-sm shadow-md active:scale-95 transition-all hover:bg-[#1a3a6e]"
                      >
                        Başvur
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map(job => (
                  <div key={job.id} className="group bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:bg-surface-container-high flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-surface rounded-lg flex items-center justify-center shrink-0 font-black text-lg">
                        <span className={job.logoColor}>{job.abbr}</span>
                      </div>
                      <div>
                        {job.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded mb-1 inline-block ${job.badgeColor}`}>{job.badge}</span>
                        )}
                        <h3 className="font-headline font-bold text-on-surface text-base">{job.title}</h3>
                        <p className="text-primary font-semibold text-xs">{job.company}</p>
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-3 flex-grow">{job.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">location_on</span>{job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">schedule</span>{job.type}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="flex-1 py-2 rounded-lg border border-outline-variant text-on-surface-variant font-bold text-xs hover:bg-surface transition-all"
                      >
                        Detaylar
                      </button>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="flex-1 py-2 rounded-lg bg-[#0a1628] text-white font-bold text-xs shadow-md active:scale-95 transition-all hover:bg-[#1a3a6e]"
                      >
                        Başvur
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center pt-10">
              <nav className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0a1628] text-white font-bold text-sm">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors font-bold text-sm text-on-surface-variant">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors font-bold text-sm text-on-surface-variant">3</button>
                <span className="px-2 text-outline-variant">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors font-bold text-sm text-on-surface-variant">12</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
};

export default Kariyer;
