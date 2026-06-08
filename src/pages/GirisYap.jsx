import React from 'react';
import { Link } from 'react-router-dom';

const GirisYap = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-surface-container-lowest p-10 rounded-2xl shadow-xl border border-outline-variant/15">
        <div>
          <h2 className="mt-6 text-center text-3xl font-headline font-extrabold text-primary">
            Hesabınıza Giriş Yapın
          </h2>
          <p className="mt-2 text-center text-sm text-on-surface-variant">
            Veya{' '}
            <Link to="/kayit" className="font-medium text-primary hover:text-primary-container">
              yeni bir hesap oluşturun
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">E-posta adresi</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-outline-variant/50 placeholder-on-surface-variant/50 text-on-surface focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-surface-container-low"
                placeholder="Öğrenci veya kişisel e-posta adresiniz"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Şifre</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-outline-variant/50 placeholder-on-surface-variant/50 text-on-surface focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-surface-container-low"
                placeholder="Şifreniz"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-outline-variant rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-on-surface-variant">
                Beni Hatırla
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-tertiary hover:text-tertiary-container">
                Şifremi unuttum
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white academic-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary active:scale-95 transition-all"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-white/50 group-hover:text-white/80">login</span>
              </span>
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GirisYap;
