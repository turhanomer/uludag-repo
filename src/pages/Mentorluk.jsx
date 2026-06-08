import React from 'react';

const Mentorluk = () => {
  return (
    <>
      
{/* SideNavBar Integration */}

{/* TopAppBar */}
<header className="flex justify-between items-center w-full px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-[#c2c7d1]/15 shadow-sm">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#0F4C81] cursor-pointer hover:bg-slate-100 p-2 rounded-full transition-colors">menu</span>
<h2 className="text-xl font-bold tracking-tight text-primary">Mentörlük Modülü</h2>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-wider rounded-full uppercase">v1.5 SHOULD</span>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-container/20">
<img alt="User Avatar" data-alt="close-up portrait of a professional man with glasses in a modern office setting, soft corporate lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCGS9z_PbKBlr-413mj7tVOd5SKs364sIBo77UXKQLMrgpXI875JJ3skDBTrw3304vNs2E22WqEeL2medyLTxU1AEqDitTEDX1vhYep6ksP2l57zZW4Dsfj8VMP9fZipuVn5ROwkErwSaWi2gbvDcVOtRl74qWlX4s768OcE-vU76u_X4-RBg6sRf9Q6h0Ui_eM-kAxbBJTPwV6PGLU0mIFchtYZXHuoOtSfZhijUB7A-Z2G00IGr9gidmM6MPDs_i5XclY1C65eji"/>
</div>
</div>
</header>
{/* Main Content Area */}
<main className="p-8 bg-surface min-h-screen">
{/* Search and Filter Section */}
<section className="mb-12">
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
<div className="max-w-3xl">
<h3 className="text-2xl font-bold text-primary mb-2">Geleceğinize Rehberlik Edecek Bir Mentör Bulun</h3>
<p className="text-on-surface-variant mb-6 font-body">Uzmanlık alanlarına, şirketlere veya mezuniyet yıllarına göre arama yapın.</p>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-on-surface font-body transition-all" placeholder="Mentör adı, sektör veya uzmanlık ara..." type="text"/>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-4 py-1.5 bg-secondary-container/30 text-on-secondary-container text-xs font-semibold rounded-full cursor-pointer hover:bg-secondary-container transition-colors">#Yazılım</span>
<span className="px-4 py-1.5 bg-secondary-container/30 text-on-secondary-container text-xs font-semibold rounded-full cursor-pointer hover:bg-secondary-container transition-colors">#Pazarlama</span>
<span className="px-4 py-1.5 bg-secondary-container/30 text-on-secondary-container text-xs font-semibold rounded-full cursor-pointer hover:bg-secondary-container transition-colors">#Girişimcilik</span>
<span className="px-4 py-1.5 bg-secondary-container/30 text-on-secondary-container text-xs font-semibold rounded-full cursor-pointer hover:bg-secondary-container transition-colors">#Akademi</span>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Mentor Profiles - Bento Grid Inspired */}
<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-primary">Önerilen Mentörler</h3>
<button className="text-sm font-semibold text-primary-container hover:underline">Tümünü Gör</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Mentor Card 1 */}
<div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-secondary-container transition-all group">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">
<div className="h-16 w-16 rounded-lg overflow-hidden shrink-0">
<img alt="Mentor 1" data-alt="professional woman executive in smart casual attire, neutral background, sharp focus, editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJV9PFij49DneicHgrdnfdNkRZtu8RO8C-Ev-8ZSKi3jY_poyLGAm_QiqztoA1CoVI2SF25TRt2oR73n7-T-GYMB4s0Ytf9vjLqNvJpGV75VUZ4ludYP8NPr2sHu4PJFRf57vs4Xt0jkYCMzqbzwL3VqR5f3mmNAkakIGkYvOwjF7AjPYQmlwYqSQCudxYTNpnz48UnEge5mGoU2fflVXPZMhVgwG7RbxUUmWogd2mRKgQGkYAZWy64eQVbjWFySDzg_kPkGjNJMLl"/>
</div>
<div>
<h4 className="font-bold text-lg text-primary leading-tight">Zeynep Yılmaz</h4>
<p className="text-sm text-on-surface-variant font-medium">Senior Product Manager @ Google</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px] text-tertiary" >star</span>
<span className="text-xs font-bold text-tertiary">4.9 (42 Mentee)</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-6 line-clamp-2 italic">"Ürün yönetimi ve yurt dışı kariyer fırsatları konusunda size rehberlik edebilirim."</p>
<button className="w-full py-3 bg-secondary-container text-on-secondary-container font-bold text-sm rounded-lg hover:bg-secondary-container/80 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                            Mentörlük Talebi Gönder
                            <span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
{/* Mentor Card 2 */}
<div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-secondary-container transition-all group">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">
<div className="h-16 w-16 rounded-lg overflow-hidden shrink-0">
<img alt="Mentor 2" data-alt="modern businessman with a confident smile, wearing a navy blazer, professional studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB9MRjEWxMvuQ_eHxjij5Bn4eZqWOX8KNCs1tJs1iEvYZRhUX_TnWjFrNzDsHKehvjgB1BfOxZQExGcWZboGdHoS2M1etrrtEEesc-L8MCTOyBO9AuRJDrWPr2D7Rzk9Wba3XlJR9QtreuGl54f7F6GactEyq51r7yIZxIWM0_13SZIActuowrYvm2Q1ifr_Ersjkl_ypzSodm_fH86KQjo8EF8wlaSsnlntkxIY3AIeAJz__BVNvtgwFec_OQJr1Kjnxow2c06Vv-"/>
</div>
<div>
<h4 className="font-bold text-lg text-primary leading-tight">Can Erkin</h4>
<p className="text-sm text-on-surface-variant font-medium">CTO @ Getir</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px] text-tertiary" >star</span>
<span className="text-xs font-bold text-tertiary">5.0 (18 Mentee)</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-6 line-clamp-2 italic">"Ölçeklenebilir sistemler ve ekip yönetimi konularında deneyimlerimi paylaşıyorum."</p>
<button className="w-full py-3 bg-secondary-container text-on-secondary-container font-bold text-sm rounded-lg hover:bg-secondary-container/80 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                            Mentörlük Talebi Gönder
                            <span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
{/* Mentor Card 3 */}
<div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-secondary-container transition-all group">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">
<div className="h-16 w-16 rounded-lg overflow-hidden shrink-0">
<img alt="Mentor 3" data-alt="creative professional woman with friendly expression, artistic office environment, warm soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkTQWwl0yVw5mhh3rrlZI0ia5MHRFAJQpxCs0RUOXM34i24MkGunpfsN1R1CtLxeTZxKKPn4mOMyP7EnFxDFygy7tPwGKvhLxHTYJrK34nqiNxRFG07lyi6y3Z_QIpJMW8RMSb7T0bO5N0H-Fvhl-OxJ4tRIo489Z4bqI2i9RtGTp6mSjPWIWULiPZ1isPfeJC5K8Igat2WVosv1S88P-uSy9fbZ4HG7FRmI2TbfIR0McOrl0vdclljBKEycjy7FJ1wgxw9mBeuBjx"/>
</div>
<div>
<h4 className="font-bold text-lg text-primary leading-tight">Selin Demir</h4>
<p className="text-sm text-on-surface-variant font-medium">Senior UX Architect @ Adobe</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px] text-tertiary" >star</span>
<span className="text-xs font-bold text-tertiary">4.8 (25 Mentee)</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-6 line-clamp-2 italic">"Kullanıcı deneyimi tasarımı ve tasarım sistemleri üzerine mentorluk veriyorum."</p>
<button className="w-full py-3 bg-secondary-container text-on-secondary-container font-bold text-sm rounded-lg hover:bg-secondary-container/80 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                            Mentörlük Talebi Gönder
                            <span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
{/* Mentor Card 4 */}
<div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-secondary-container transition-all group">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">
<div className="h-16 w-16 rounded-lg overflow-hidden shrink-0">
<img alt="Mentor 4" data-alt="senior executive man in professional attire, corporate boardroom background, high-end photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQAk5oHZDJU6nftCn29b84aAAlu5HqxclPTk3bkTc7NorctfKIlBt2xEJorEM-r4EWFDv9_xaCUxqvojshPVFE0YWxZMT_lnBL2gY7EqFhVvzbiHF55dD62LQ9WKFSpX-x7yFa7sAW6eEDLVi28XjM22KZg_EM0IOhuJ-Yt0bgcWOqTDbKwZrpDIVBSt3akxY7rumzizsdBpxuX9j6gpy1Z1a29Cha7JkWLM0q0ZNxIAesbaUN0LvkGgD7P3_92YLA9DKDQUn3FmRx"/>
</div>
<div>
<h4 className="font-bold text-lg text-primary leading-tight">Murat Aras</h4>
<p className="text-sm text-on-surface-variant font-medium">Head of HR @ Microsoft TR</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px] text-tertiary" >star</span>
<span className="text-xs font-bold text-tertiary">4.9 (56 Mentee)</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-6 line-clamp-2 italic">"Kariyer planlama ve mülakat teknikleri konusunda destek olabilirim."</p>
<button className="w-full py-3 bg-secondary-container text-on-secondary-container font-bold text-sm rounded-lg hover:bg-secondary-container/80 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                            Mentörlük Talebi Gönder
                            <span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>
{/* Active Requests & Status Tracking */}
<div className="lg:col-span-4">
<h3 className="text-xl font-bold text-primary mb-6">Aktif Başvurularım</h3>
<div className="bg-surface-container-low rounded-xl p-2 space-y-2">
{/* Status Item 1 */}
<div className="bg-surface-container-lowest p-5 rounded-lg border-l-4 border-secondary transition-transform hover:translate-x-1 cursor-pointer shadow-sm">
<div className="flex justify-between items-start mb-2">
<h5 className="font-bold text-primary">Ali Rıza Bey</h5>
<span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded uppercase">Onaylandı</span>
</div>
<p className="text-xs text-on-surface-variant mb-4">Frontend Geliştirme Yol Haritası</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
<img alt="Avatar" data-alt="close-up avatar of a man with friendly expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc880_-q2aaqFr-RboaJaQTMP-24OlSjtCZ-F6YQCWKL0hrHYT88_EA-Wpa_JUtngEsInXDGsDYc4RAnrCeq7sxOcwq2LadNcO1ZnVsthvHSmk-bkl7GTgNz9-oTVueNXR0x9_GUwiC67hxHuGRFzYCxbyDBt_NhGAf4UlO6jaF1y6FF73uVZq-LCZ9dc_9Amrw_gOsBQVotIoCoc5WkLxVypzvJbZ4-GqT3FQkO26WUjRaBsItLI3jFBbrvmKdzAJPz0MZRKFa9y0"/>
</div>
<div className="h-6 w-6 rounded-full border-2 border-white bg-primary text-[8px] flex items-center justify-center text-white font-bold">ME</div>
</div>
<span className="text-[10px] text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-xs">calendar_today</span>
                                12 Haz 2024
                            </span>
</div>
</div>
{/* Status Item 2 */}
<div className="bg-surface-container-lowest p-5 rounded-lg border-l-4 border-tertiary transition-transform hover:translate-x-1 cursor-pointer shadow-sm">
<div className="flex justify-between items-start mb-2">
<h5 className="font-bold text-primary">Aslıhan Tunç</h5>
<span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase">Beklemede</span>
</div>
<p className="text-xs text-on-surface-variant mb-4">Dijital Pazarlama ve SEO</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
<img alt="Avatar" data-alt="avatar of a young woman smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Mof6VQR30bIOZZczGIk-CA6qEhmy-YVB_8C6q33610OeH8mI10-jAJHaMOhYOn-ltV0PIuD4k6Ap7wMLpghKvBwGeTohggdLBQAs47zfdw1NAPifdP5lxjr2oqXSE8XRbL5wWzV5CEpfAasdxU5pC7X5M9mReKyKS6728FdvS-Bhyo3f_fxZiZ2seBFOaG9_FFTuSeV2vkpRi6IH9VUD-nYgxHWK5lw_bL25I-Ic_7gTcv9m_1Zf-dpxUUXsZIudPjP7F8D0KLTf"/>
</div>
<div className="h-6 w-6 rounded-full border-2 border-white bg-primary text-[8px] flex items-center justify-center text-white font-bold">ME</div>
</div>
<span className="text-[10px] text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-xs">schedule</span>
                                2 gün önce
                            </span>
</div>
</div>
{/* Status Item 3 */}
<div className="bg-surface-container-lowest/50 p-5 rounded-lg border-l-4 border-outline transition-transform hover:translate-x-1 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h5 className="font-bold text-slate-400">Kerem Bal</h5>
<span className="px-2 py-0.5 bg-outline-variant/30 text-outline text-[10px] font-bold rounded uppercase">Tamamlandı</span>
</div>
<p className="text-xs text-slate-400 mb-4">Siber Güvenlik Temelleri</p>
<div className="flex items-center justify-between opacity-50">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
<img alt="Avatar" data-alt="professional avatar of a person" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB8qTcN1vAyaOfvpVdUNwjO5nOwyNp-xvGlfFvsSH1NKg2hcfPvu_-XQQLjVT5vhQpgZMvf_pjEh4N7IijLFKE25W3Ek5X7fIbDQGq1T8u9NuaiWV9k5wBdwcLhl5BJqfAKy-aW8IXZewoOU_VwY9BZgz7q8RFNzkGm-tiZS5p_C0A45siasDPe8qBDbpza5WuqwzryGChwlm22IzUX4mRkxs-McA7B_YyvXMtxdxeq__O0ZG63JGW2IWGUEpigzlxhpq3t7zxlpKa"/>
</div>
<div className="h-6 w-6 rounded-full border-2 border-white bg-primary text-[8px] flex items-center justify-center text-white font-bold">ME</div>
</div>
<span className="text-[10px] text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-xs">done_all</span>
                                14 May 2024
                            </span>
</div>
</div>
</div>
{/* Growth Insight Card */}
<div className="mt-8 bg-gradient-to-br from-secondary to-on-secondary-container p-6 rounded-xl text-white shadow-lg">
<div className="flex items-center gap-3 mb-3">
<span className="material-symbols-outlined text-2xl" >rocket_launch</span>
<h4 className="font-bold text-lg">Kariyer Hızlandırıcı</h4>
</div>
<p className="text-xs opacity-90 leading-relaxed mb-4">Mentörlük alan öğrencilerin işe yerleşme hızı %40 daha yüksektir. Aktif bir mentörlük programı senin için kapıları açabilir.</p>
<button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-bold transition-colors">Kılavuzu İncele</button>
</div>
</div>
</div>
</main>
{/* Footer */}


    </>
  );
};

export default Mentorluk;
