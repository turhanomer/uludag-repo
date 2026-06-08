import React from 'react';
import { Link } from 'react-router-dom';

const KayitOl = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-surface-container-lowest p-10 rounded-2xl shadow-xl border border-outline-variant/15">
        <div>
          <h2 className="mt-6 text-center text-3xl font-headline font-extrabold text-primary">
            Aramıza Katılın
          </h2>
          <p className="mt-2 text-center text-sm text-on-surface-variant">
            Zaten hesabınız var mı?{' '}
            <Link to="/giris" className="font-medium text-primary hover:text-primary-container">
              Giriş yapın
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-on-surface mb-1">Adınız</label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-outline-variant/50 placeholder-on-surface-variant/50 text-on-surface focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-container-low"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-on-surface mb-1">Soyadınız</label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-outline-variant/50 placeholder-on-surface-variant/50 text-on-surface focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-container-low"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-on-surface mb-1">E-posta adresi</label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-outline-variant/50 placeholder-on-surface-variant/50 text-on-surface focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-container-low"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-on-surface mb-1">Hesap Türü</label>
            <select
              id="role"
              name="role"
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-outline-variant/50 text-on-surface focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-container-low"
            >
              <option>Öğrenci</option>
              <option>Mezun</option>
              <option>Akademisyen</option>
              <option>Kurumsal / İşveren</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-on-surface mb-1">Şifre</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-outline-variant/50 placeholder-on-surface-variant/50 text-on-surface focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-container-low"
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="focus:ring-primary h-4 w-4 text-primary border-outline-variant rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-on-surface-variant">
                <a href="#" className="text-tertiary hover:underline">Kullanım Koşullarını</a> ve <a href="#" className="text-tertiary hover:underline">KVKK Aydınlatma Metnini</a> okudum, kabul ediyorum.
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white academic-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary active:scale-95 transition-all"
            >
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KayitOl;
