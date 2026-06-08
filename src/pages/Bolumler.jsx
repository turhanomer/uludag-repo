import React, { useState } from 'react';

const bolumlerData = [
  {
    id: 'ybs',
    title: 'Yönetim Bilişim Sistemleri',
    shortDesc: 'İşletme ve bilişim teknolojilerini birleştiren, veriye dayalı karar alma süreçlerini yöneten profesyoneller yetiştirir.',
    icon: 'memory',
    color: 'primary',
    tag: 'YBS',
    ogretimDili: 'Türkçe',
    sure: '4 yıl',
    hazirlik: 'Yok',
    kurulusYili: '2012',
    content: [
      {
        heading: 'Bölüm Hakkında',
        text: 'Yönetim Bilişim Sistemleri Lisans Eğitimi\'nin amacı, kamu ve özel sektörde bilişim sistemlerini geliştirecek düzeyde bilişim ve bu sistemleri yönetecek düzeyde yöneticilik becerisine sahip bireyler yetiştirmektir.'
      },
      {
        heading: 'Program Yapısı',
        text: 'Yönetim Bilişim Sistemleri bölümü özü itibariyle disiplinler arası bir program niteliğindedir. Bölümde öğrencilere bilişim sistemlerine ilişkin derslerin yanı sıra işletme, kamu yönetimi ve hukuk başta olmak üzere sosyal bilimler alanından dersler de verilmektedir. Bununla birlikte öğrenciler, mezuniyet sonrası kurumlarında ihtiyaca uygun bilişim sistemlerini geliştirebilmeleri, bu sistemleri yönetimde etkin bir şekilde kullanabilmeleri ve bu sayede kurumlarının kabiliyetlerini ve rekabet gücünü arttırabilmeleri adına eğitim aldıkları süre boyunca çeşitli projelerde yer alması ve iş tecrübesi edinmesi noktasında teşvik edilmektedir.'
      },
      {
        heading: 'Kariyer İmkânları',
        text: 'Bölüm mezunları, kamu ve özel sektöre yönelik bilişim sistemleri yönetimi ve geliştirilmesi ile ilgili çeşitli iş olanaklarına sahiptirler. Mezunlar, bilişim teknolojilerinin kullanıldığı gerek kamu sektörü, gerekse özel sektörde karar alma sistemleri, yazılım analizi, yazılım geliştirme, veri tabanı yönetimi, sanallaştırma, ağ yönetimi ve e-devlet/e-ticaret gibi alanlardaki ihtiyacı karşılamaktadırlar.'
      }
    ],
    tags: ['Yazılım Analizi', 'Veri Tabanı', 'E-Ticaret', 'Ağ Yönetimi', 'E-Devlet']
  },
  {
    id: 'ut',
    title: 'Uluslararası Ticaret ve İşletmecilik',
    shortDesc: 'Küresel pazarlarda rekabet edebilecek, dış ticaret mevzuatına hakim ve stratejik düşünebilen uzmanlar yetiştirir.',
    icon: 'public',
    color: 'tertiary',
    tag: 'UTİ',
    ogretimDili: 'Türkçe',
    sure: '4 yıl',
    hazirlik: 'Yok',
    kurulusYili: '2012',
    content: [
      {
        heading: 'Bölümün Kuruluş Amacı',
        text: 'Yerel ekonomilerin küreselleşmesi süreci firmaların küresel üretim ve ticaret kaynaklı etkilerle karşı karşıya kalmasına yol açmıştır. Günümüzde sermayenin, emeğin, mal ve hizmetlerin ve bilginin uluslararası piyasalarda serbest bir şekilde hareket etmesi sonucu dünya piyasalarının entegrasyonu ile birlikte firmaların uluslararası düzeyde rekabet etmeleri için ihtiyaç duyduğu kişilerin niteliği de değişmiştir. Bu gerçeklikten hareketle Uluslararası Ticaret ve İşletmecilik bölümümüz ülkemizin küresel rekabette ihtiyaç duyacağı nitelikte gençler yetiştirmek amacıyla 2012 tarihinde kurulmuştur.'
      },
      {
        heading: 'Eğitim ve Program İçeriği',
        text: 'Uluslararası Ticaret ve İşletmecilik Bölümü 2013-2014 eğitim-öğretim yılında 47 öğrenci ile normal örgün eğitime başlamıştır. Programın en önemli özelliklerinden biri küresel rekabette başarı için gerekli olan disiplinler arası bir yaklaşıma göre tasarlanmış olmasıdır. Ders programında uluslararası iktisat, uluslararası işletmecilik, uluslararası ticaret, uluslararası finans, iş İngilizcesi gibi temel dersler yanında uluslararası çevreyi tanımada çok önemli olan küresel işletmelerde çevre ve insan bilinci, kültürel farklılıklar ve ticaret gibi derslere de yer verilmiştir.'
      },
      {
        heading: 'Yüksek Lisans İmkânı',
        text: 'Günümüzde öğrencilerin lisans sonrası ayrıca yüksek lisans yapma istekleri de gittikçe artmaktadır. Bu amaçla bölümümüz lisans düzeyi dışında ayrıca Uludağ Üniversitesi Sosyal Bilimler Enstitüsü bünyesinde Uluslararası Ticaret Yüksek Lisans Programlarını (Tezli-Tezsiz) yürütmektedir.'
      },
      {
        heading: 'Kariyer İmkânları',
        text: 'Uluslararası Ticaret ve İşletmecilik bölümü mezunları gerek ulusal gerekse uluslararası piyasalarda bir çok alanda iş imkânına sahiptirler. Başta ulusal/uluslararası şirketlerin dış ticaret, muhasebe, finansman, üretim, insan kaynakları, lojistik, yönetim, pazarlama bölümleri olmak üzere Dünya Ticaret Örgütü, BM, AB gibi uluslararası kuruluşlarda, bankalarda ile ticaret ve sanayi odaları gibi meslek kuruluşlarında görev alabilirler. Ayrıca kamuda Dış Ticaret Müsteşarlığı, Hazine Müsteşarlığı, DPT, Türkiye\'nin Dış Temsilcilikleri, kalkınma ajansları başta olmak üzere bir çok alanda iş imkânlarına sahiptirler.'
      }
    ],
    tags: ['Dış Ticaret', 'Uluslararası Finans', 'Lojistik', 'AB Hukuku', 'İş İngilizcesi']
  },
  {
    id: 'isletme',
    title: 'İşletme',
    shortDesc: 'Modern iş dünyasının ihtiyaçlarına uygun, liderlik vasıflarına sahip ve analitik düşünebilen yöneticiler yetiştirir.',
    icon: 'storefront',
    color: 'secondary',
    tag: 'İŞL',
    ogretimDili: 'Türkçe',
    sure: '4 yıl',
    hazirlik: 'Yok',
    kurulusYili: '2010',
    content: [
      {
        heading: 'Bölümün Kuruluşu',
        text: 'İnegöl İşletme Fakültesi (İNİF) 2010 yılında Uludağ Üniversitesi\'ne bağlı olarak Bakanlar Kurulu\'nun 08/04/2010 tarihli kararnamesine istinaden 28/04/2010 tarihli Resmi Gazetede yayınlanarak kurulmuştur. İNİF İşletme Bölümü 2012-2013 eğitim-öğretim yılında normal örgün eğitime başlamıştır ve eğitim dili TÜRKÇE\'dir.'
      },
      {
        heading: 'Bölümün Amacı',
        text: 'İşletme bölümü ulusal ve uluslararası düzeyde kamu ve özel kesimin gereksinim duyduğu, çağın gereklerine uygun, işletme biliminin temel fonksiyonlarını kavramış ve bu temel fonksiyonları yerel ve küresel iş çevrelerinde uygulayabilen, küresel iş dünyası ile uyumlu, ekip ruhunu kavramış, etik davranışlar ve sosyal sorumluluk konularında farkındalığa sahip, yaşam boyu öğrenme sürecinin önemini kavramış, çağdaş yönetim araç ve yöntemlerini kullanarak strateji oluşturma, yönetme ve işletmenin çeşitli alanlarında performans arttırma becerisine sahip, yaratıcı çözümler geliştirme ve çözümleri uygulamak için etkin stratejiler oluşturma becerisi olan işletmecilik, girişimcilik ve yöneticilik formasyonu ve becerileriyle donatılmış insan kaynağını hazırlama ve yetiştirmeyi amaçlamaktadır.'
      },
      {
        heading: 'Paydaşlar ve Akademik Çevre',
        text: 'İşletme Bölümü, öğrencilerini kamu ve özel sektöre yönelik olarak birçok alanda istihdam edilecek şekilde yetiştirir. Bölümün etkileşim halinde olduğu paydaşlar; SPK, DPT, Sanayi Bakanlığı, Çalışma Bakanlığı, Maliye Bakanlığı başta olmak üzere bakanlıklara bağlı çeşitli kurum ve kuruluşlar ile Üniversiteler, Araştırma Kurumları, Enstitüler, özel sektör kuruluşları ve onların üst düzey örgütleri – Ticaret ve Sanayi Odaları, İşveren Örgütleri gibi yapıları kapsamaktadır. Bölüm, zengin ve nitelikli öğretim elemanı kadrosu ile yüksek lisans ve doktora yapmak isteyen öğrencilerine bilimsel düşünme alt yapısını en iyi şekilde kazandırmayı hedeflemektedir.'
      },
      {
        heading: 'Kariyer İmkânları',
        text: 'Mezunlarımızın iş bulma imkânları genel olarak şöyle sıralanabilir: Bankalar, küçük orta ve büyük ölçekli işletmeler başta olmak üzere özel sektör kuruluşları. Bunların yanı sıra, SPK, Maliye Bakanlığı, Sanayi ve Ticaret Bakanlığı, Çalışma Bakanlığı gibi kamu bürokrasisinin üst düzey kadroları ile kamu kurumlarındaki uzmanlık ve müfettişlikler. Ayrıca bu programdan mezun olanlar aldıkları eğitimin kazandırdığı yeterlilikler ile girişimci olarak kendi işlerini de kurabilmektedirler.'
      }
    ],
    tags: ['Girişimcilik', 'Muhasebe', 'Pazarlama', 'İnsan Kaynakları', 'Finans']
  }
];

const colorMap = {
  primary: {
    bg: 'bg-blue-50',
    icon: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800',
    btn: 'text-blue-700 hover:text-blue-900',
    border: 'border-blue-200',
    dot: 'bg-blue-500',
    tag: 'bg-blue-600'
  },
  tertiary: {
    bg: 'bg-amber-50',
    icon: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800',
    btn: 'text-amber-700 hover:text-amber-900',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    tag: 'bg-amber-600'
  },
  secondary: {
    bg: 'bg-green-50',
    icon: 'text-green-700',
    badge: 'bg-green-100 text-green-800',
    btn: 'text-green-700 hover:text-green-900',
    border: 'border-green-200',
    dot: 'bg-green-500',
    tag: 'bg-green-600'
  }
};

const BolumModal = ({ bolum, onClose }) => {
  const c = colorMap[bolum.color];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${c.bg} p-8 rounded-t-2xl border-b ${c.border} relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors text-gray-500 hover:text-gray-800"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="flex items-start gap-5">
            <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0 shadow-sm`}>
              <span className={`material-symbols-outlined text-3xl ${c.icon}`}>{bolum.icon}</span>
            </div>
            <div>
              <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white ${c.tag} mb-2`}>
                {bolum.tag}
              </span>
              <h2 className="text-2xl font-headline font-bold text-gray-900">{bolum.title} Bölümü</h2>
            </div>
          </div>
          {/* Meta badges */}
          <div className="flex flex-wrap gap-3 mt-5">
            <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 border border-gray-100">
              <span className="material-symbols-outlined text-sm text-gray-400">translate</span>
              Öğretim Dili: {bolum.ogretimDili}
            </div>
            <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 border border-gray-100">
              <span className="material-symbols-outlined text-sm text-gray-400">schedule</span>
              Süre: {bolum.sure}
            </div>
            <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 border border-gray-100">
              <span className="material-symbols-outlined text-sm text-gray-400">school</span>
              Hazırlık: {bolum.hazirlik}
            </div>
            <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 border border-gray-100">
              <span className="material-symbols-outlined text-sm text-gray-400">calendar_today</span>
              Kuruluş: {bolum.kurulusYili}
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="p-8 space-y-6">
          {bolum.content.map((section, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${c.dot} shrink-0`} />
                <h3 className="font-headline font-bold text-gray-900">{section.heading}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-4">{section.text}</p>
            </div>
          ))}

          {/* Skill tags */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${c.dot} shrink-0`} />
              <h3 className="font-headline font-bold text-gray-900">Öne Çıkan Alanlar</h3>
            </div>
            <div className="flex flex-wrap gap-2 pl-4">
              {bolum.tags.map((tag, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${c.tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className={`w-full py-3 rounded-xl font-bold text-sm text-white ${c.tag} hover:opacity-90 transition-opacity`}
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

const Bolumler = () => {
  const [selectedBolum, setSelectedBolum] = useState(null);

  return (
    <>
      <div className="py-24 px-8 max-w-7xl mx-auto min-h-screen">
        <div className="mb-16">
          <h1 className="text-4xl font-headline font-bold text-primary mb-4">Bölümlerimiz</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Fakültemizde yer alan bölümleri inceleyerek kariyer hedeflerinize en uygun eğitimi seçin. Geleceğinizi şekillendirmeye bugünden başlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bolumlerData.map((bolum) => {
            const c = colorMap[bolum.color];
            return (
              <div
                key={bolum.id}
                className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 hover:bg-surface-container-high transition-all duration-300 group flex flex-col"
              >
                <div className={`w-16 h-16 rounded-lg ${c.bg} flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined text-3xl ${c.icon}`}>{bolum.icon}</span>
                </div>
                <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-3 w-fit ${c.badge}`}>
                  {bolum.tag}
                </span>
                <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">{bolum.title}</h2>
                <p className="text-on-surface-variant mb-8 flex-grow leading-relaxed text-sm">
                  {bolum.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {bolum.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full text-white ${c.tag} opacity-80`}>{tag}</span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedBolum(bolum)}
                  className={`flex items-center gap-2 ${c.btn} font-semibold group-hover:gap-3 transition-all mt-auto w-fit text-sm`}
                >
                  Detaylı Bilgi
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {selectedBolum && (
        <BolumModal bolum={selectedBolum} onClose={() => setSelectedBolum(null)} />
      )}
    </>
  );
};

export default Bolumler;
