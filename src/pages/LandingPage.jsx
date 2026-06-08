import React from 'react';
import schoolBg from '../assets/school-building.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Bursa Uludağ Üniversitesi İnegöl İşletme Fakültesi"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
            src={schoolBg}
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/70 to-surface/30" />
        </div>
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full mb-6 w-fit uppercase tracking-widest">Unicom — Üniversite İletişim Platformu</span>
            <h1 className="font-headline text-primary text-[3.5rem] leading-[1.1] font-bold -tracking-[0.02em] mb-6">
              Akademik Dünyayı <br/><span className="text-tertiary">Bir Arada</span> Buluşturun
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-10">
              BUÜ İnegöl İşletme Fakültesi öğrencileri, mezunları ve akademisyenleri için tasarlanmış iletişim ve paylaşım platformu. Mentor ağına katılın, kariyer fırsatlarını keşfedin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kariyer" className="flex items-center gap-3 academic-gradient text-white px-8 py-4 rounded-lg font-semibold hover:opacity-95 transition-all active:scale-95">
                <span className="material-symbols-outlined">work</span>
                Kariyer Portalı
              </Link>
              <Link to="/mezunlar" className="flex items-center gap-3 bg-surface-container-lowest text-primary px-8 py-4 rounded-lg font-semibold hover:bg-surface-container-high transition-all active:scale-95">
                <span className="material-symbols-outlined">groups</span>
                Mezun Dizini
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Asymmetric Floating Stats */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 absolute top-0 right-0 w-64 translate-x-4 -translate-y-8 z-20">
              <div className="text-primary text-3xl font-bold mb-1">2,500+</div>
              <div className="text-on-surface-variant text-sm font-medium">Aktif Mezun</div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl shadow-sm border border-outline-variant/15 absolute bottom-12 left-0 w-72 -translate-x-12 z-20">
              <div className="text-tertiary text-3xl font-bold mb-1">150+</div>
              <div className="text-on-surface-variant text-sm font-medium">Partner Kurum</div>
            </div>
            <div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl">
              <img alt="Student Working" className="w-full h-full object-cover" data-alt="Focused university student using laptop in modern library with soft natural lighting and scholarly environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHgX6GoFp6C3ChGgiDy2n8pRHUJ-wZNDpNantZ7rXS2nhX93ZVD4tMnyCHEWNenE84unYfn_ge-Rq_WFwi1GnY2sDTQ_ynN3lVuDgqwEndZGR22NUjJRTLs9VqqzWiHNBo2m26KkRGS-5J4Jl1WNyAeJ-RtCJlWADhBediwlH4K1KRY8RY7Nl9VOrga_ffEN3PpQsoyFwAHQasrETUhsNOMvsKIpEMxFjQ1utB_IC9wHW0SAeXWn0Tyvgg76BNx7lyk0R1uNLEuk0Z"/>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary -tracking-[0.02em] mb-2">Fakülte Duyuruları</h2>
              <p className="text-on-surface-variant">Akademik takvim ve kariyer etkinliklerinden haberdar olun.</p>
            </div>
            <a className="text-primary font-semibold flex items-center gap-2 group" href="#">
              Tüm Duyurular 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Announcement Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-lg hover:bg-surface-container-high transition-all duration-200 cursor-pointer flex flex-col h-full">
              <span className="text-label-sm text-tertiary font-bold mb-4">ETKİNLİK • 12 MAYIS</span>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4 leading-snug">Medya ve İletişim Zirvesi '24 Kayıtları Başladı</h3>
              <p className="text-on-surface-variant text-sm mb-8 flex-grow">Sektörün önde gelen isimleri bu yıl İNİF kampüsünde bir araya geliyor. Kariyer fırsatlarını kaçırmayın.</p>
              <span className="material-symbols-outlined text-primary self-end">arrow_outward</span>
            </div>
            {/* Announcement Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-lg hover:bg-surface-container-high transition-all duration-200 cursor-pointer flex flex-col h-full">
              <span className="text-label-sm text-secondary font-bold mb-4">AKADEMİK • 05 MAYIS</span>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4 leading-snug">Erasmus+ Staj Hareketliliği Başvuruları</h3>
              <p className="text-on-surface-variant text-sm mb-8 flex-grow">Avrupa'da kariyerinize yön vermek için staj başvurularınızı Kariyer Portalı üzerinden gerçekleştirebilirsiniz.</p>
              <span className="material-symbols-outlined text-primary self-end">arrow_outward</span>
            </div>
            {/* Announcement Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-lg hover:bg-surface-container-high transition-all duration-200 cursor-pointer flex flex-col h-full">
              <span className="text-label-sm text-primary font-bold mb-4">KARİYER • 28 NİSAN</span>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4 leading-snug">Mezunlar Paneli: Dijital Dönüşümde İletişim</h3>
              <p className="text-on-surface-variant text-sm mb-8 flex-grow">Mezunlarımızın deneyimlerini paylaşacağı online webinar serisinin yeni bölümü haftaya başlıyor.</p>
              <span className="material-symbols-outlined text-primary self-end">arrow_outward</span>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-24">
              <h2 className="font-headline text-4xl font-bold text-primary -tracking-[0.02em] mb-6">Öne Çıkan Fırsatlar</h2>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                Fakültemize özel olarak açılan kontenjanlar ve partner kurumlarımızın sunduğu staj/iş imkanlarını keşfedin.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-tertiary-fixed">verified</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface">Fakülte Onaylı</h4>
                    <p className="text-sm text-on-surface-variant">Tüm ilanlar akademik birimlerimizce incelenir.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-secondary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-fixed">diversity_3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface">Mezun Networkü</h4>
                    <p className="text-sm text-on-surface-variant">İlan verenlerin %60'ı fakültemiz mezunudur.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {/* Job Item 1 */}
              <div className="bg-surface-container-lowest p-6 rounded-lg flex items-center justify-between border-l-4 border-tertiary hover:bg-surface-container-high transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-surface-container-low rounded flex items-center justify-center text-primary font-bold text-xl">TRT</div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface">Görsel Yönetmen Yardımcısı</h4>
                    <p className="text-on-surface-variant text-sm italic">TRT Haber Merkezi • İstanbul</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded uppercase mb-2">Tam Zamanlı</span>
                  <p className="text-xs text-on-surface-variant">2 gün önce yayınlandı</p>
                </div>
              </div>
              {/* Job Item 2 */}
              <div className="bg-surface-container-lowest p-6 rounded-lg flex items-center justify-between border-l-4 border-tertiary hover:bg-surface-container-high transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-surface-container-low rounded flex items-center justify-center text-primary font-bold text-xl">DDB</div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface">Junior Reklam Yazarı</h4>
                    <p className="text-on-surface-variant text-sm italic">Medina Turgul DDB • Maslak</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded uppercase mb-2">Staj</span>
                  <p className="text-xs text-on-surface-variant">5 gün önce yayınlandı</p>
                </div>
              </div>
              {/* Job Item 3 */}
              <div className="bg-surface-container-lowest p-6 rounded-lg flex items-center justify-between border-l-4 border-tertiary hover:bg-surface-container-high transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-surface-container-low rounded flex items-center justify-center text-primary font-bold text-xl">AN</div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface">Sosyal Medya Analisti</h4>
                    <p className="text-on-surface-variant text-sm italic">Anadolu Ajansı • Ankara</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded uppercase mb-2">Yarı Zamanlı</span>
                  <p className="text-xs text-on-surface-variant">1 hafta önce yayınlandı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Stats Dashboard (Deep Blue Theme) */}
      <section className="py-24 academic-gradient text-white overflow-hidden relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="font-headline text-4xl font-bold mb-6">Mezuniyet Sonrası Başarı Tablosu</h2>
            <p className="text-on-primary-container text-lg opacity-90">İnönü İletişim mezunlarının profesyonel dünyadaki ayak izlerini takip edin. Rakamlarla büyümemiz ve etkimiz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="relative group">
              <div className="text-[4rem] font-bold leading-none mb-4 tracking-tighter text-secondary-container">%84</div>
              <div className="text-white/60 font-medium mb-2">İstihdam Oranı</div>
              <div className="h-1 w-12 bg-secondary-container rounded-full transition-all group-hover:w-full duration-500"></div>
              <p className="text-sm mt-4 text-white/40 italic">Mezuniyetin ilk 6 ayı içerisinde.</p>
            </div>
            <div className="relative group">
              <div className="text-[4rem] font-bold leading-none mb-4 tracking-tighter text-secondary-container">12</div>
              <div className="text-white/60 font-medium mb-2">Ülkede Kariyer</div>
              <div className="h-1 w-12 bg-secondary-container rounded-full transition-all group-hover:w-full duration-500"></div>
              <p className="text-sm mt-4 text-white/40 italic">Uluslararası ağımız genişliyor.</p>
            </div>
            <div className="relative group">
              <div className="text-[4rem] font-bold leading-none mb-4 tracking-tighter text-secondary-container">450+</div>
              <div className="text-white/60 font-medium mb-2">Aktif Stajyer</div>
              <div className="h-1 w-12 bg-secondary-container rounded-full transition-all group-hover:w-full duration-500"></div>
              <p className="text-sm mt-4 text-white/40 italic">Şu an sektörde öğrenenler.</p>
            </div>
            <div className="relative group">
              <div className="text-[4rem] font-bold leading-none mb-4 tracking-tighter text-secondary-container">1000</div>
              <div className="text-white/60 font-medium mb-2">Üst Düzey Yönetici</div>
              <div className="h-1 w-12 bg-secondary-container rounded-full transition-all group-hover:w-full duration-500"></div>
              <p className="text-sm mt-4 text-white/40 italic">Mezunlarımızın liderlik konumu.</p>
            </div>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
};

export default LandingPage;
