import React, { useState, useRef, useEffect } from 'react';

const alumniList = [
  {
    name: 'Ahmet Yılmaz',
    department: 'Yönetim Bilişim Sistemleri',
    year: '2021',
    company: 'TechCorp - Data Analyst',
    image: 'https://ui-avatars.com/api/?name=Ahmet+Yilmaz&background=0F4C81&color=fff'
  },
  {
    name: 'Ayşe Demir',
    department: 'Uluslararası Ticaret',
    year: '2020',
    company: 'Global Trade A.Ş. - İhracat Uzmanı',
    image: 'https://ui-avatars.com/api/?name=Ayse+Demir&background=cca730&color=fff'
  },
  {
    name: 'Can Kaya',
    department: 'İşletme',
    year: '2022',
    company: 'Innovate Bank - Ürün Yöneticisi',
    image: 'https://ui-avatars.com/api/?name=Can+Kaya&background=217128&color=fff'
  },
  {
    name: 'Zeynep Çelik',
    department: 'Yönetim Bilişim Sistemleri',
    year: '2019',
    company: 'StartupX - Kurucu',
    image: 'https://ui-avatars.com/api/?name=Zeynep+Celik&background=0F4C81&color=fff'
  }
];

const ChatWidget = ({ alumni, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'them',
      text: `Merhaba! Ben ${alumni.name}. Sana nasıl yardımcı olabilirim?`,
      time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isMinimized]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const now = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { id: Date.now(), from: 'me', text: trimmed, time: now }]);
    setInput('');
    // Auto reply after 1.2s
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          from: 'them',
          text: 'Mesajınız için teşekkürler! En kısa sürede dönüş yapacağım.',
          time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden"
      style={{ width: 340, maxHeight: isMinimized ? 60 : 480, transition: 'max-height 0.3s ease' }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)' }}
        onClick={() => setIsMinimized(m => !m)}
      >
        <img src={alumni.image} alt={alumni.name} className="w-9 h-9 rounded-full border-2 border-white/30" />
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm truncate">{alumni.name}</p>
          <p className="text-white/60 text-xs truncate">{alumni.company}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" title="Çevrimiçi" />
          <button
            onClick={e => { e.stopPropagation(); setIsMinimized(m => !m); }}
            className="text-white/70 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">
              {isMinimized ? 'expand_less' : 'remove'}
            </span>
          </button>
          <button
            onClick={e => { e.stopPropagation(); onClose(); }}
            className="text-white/70 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4 space-y-3" style={{ minHeight: 0, height: 360 }}>
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'them' && (
                  <img src={alumni.image} alt="" className="w-7 h-7 rounded-full mr-2 mt-auto shrink-0" />
                )}
                <div className={`max-w-[75%] ${msg.from === 'me' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'me'
                        ? 'bg-[#0a1628] text-white rounded-br-sm'
                        : 'bg-white text-gray-800 shadow-sm rounded-bl-sm border border-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 px-1">{msg.time}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="bg-white border-t border-gray-100 px-3 py-3 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Mesaj yaz..."
              className="flex-1 bg-gray-100 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0a1628]/20 border-none"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl bg-[#0a1628] flex items-center justify-center text-white hover:bg-[#1a3a6e] transition-colors disabled:opacity-40 shrink-0"
            >
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const Mezunlar = () => {
  const [chatAlumni, setChatAlumni] = useState(null);

  const openChat = (alumni) => {
    setChatAlumni(alumni);
  };

  return (
    <>
      <div className="py-24 px-8 max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h1 className="text-4xl font-headline font-bold text-primary mb-4">Mezun Dizini</h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Mezunlarımızla iletişime geçin, network'ünüzü genişletin ve profesyonel kariyer yolculuğunuzda onlardan ilham alın.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="İsim, Bölüm veya Şirket ara..."
              className="px-4 py-2 bg-surface-container-low rounded-lg text-sm border-none focus:ring-2 focus:ring-primary/20 w-full md:w-64"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-container transition-colors">
              Ara
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {alumniList.map((alumni, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-6 rounded-xl text-center border border-outline-variant/15 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative inline-block mb-4">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-surface"
                />
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white" title="Çevrimiçi" />
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface mb-1">{alumni.name}</h3>
              <span className="inline-block bg-surface-container-high text-xs px-2 py-1 rounded text-on-surface-variant font-medium mb-3">
                {alumni.department} • '{alumni.year}
              </span>
              <p className="text-sm text-primary font-semibold mb-6 flex-grow">{alumni.company}</p>
              <button
                onClick={() => openChat(alumni)}
                className="w-full py-2.5 bg-[#0a1628] text-white text-sm font-bold rounded-lg hover:bg-[#1a3a6e] transition-colors flex items-center justify-center gap-2 mt-auto"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                Mesaj Gönder
              </button>
            </div>
          ))}
        </div>
      </div>

      {chatAlumni && (
        <ChatWidget alumni={chatAlumni} onClose={() => setChatAlumni(null)} />
      )}
    </>
  );
};

export default Mezunlar;
