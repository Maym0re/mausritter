import Link from 'next/link';
import { t } from '@/i18n';

export function LandingInfo() {
  return (
    <div className="bg-stone-50 flex items-center">
      <div className="w-full max-w-2xl mx-auto px-5 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6 text-center">
          {t('home.landing.title')}
        </h1>
        <p className="text-stone-600 text-lg leading-relaxed mb-10 text-center">
          {t('home.landing.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/login" className="flex-1 sm:flex-none sm:min-w-[200px] text-center px-6 py-3 rounded-lg bg-stone-900 text-white font-medium shadow hover:bg-black transition">
            {t('home.landing.ctaPrimary')}
          </Link>
          <Link href="/demo" className="flex-1 sm:flex-none sm:min-w-[200px] text-center px-6 py-3 rounded-lg bg-white text-stone-800 font-medium border border-stone-300 shadow-sm hover:bg-stone-100 transition">
            {t('home.landing.demo')}
          </Link>
        </div>
        <div className="space-y-4 mb-10">
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
            <h3 className="font-semibold text-stone-800 mb-1">{t('home.landing.feature1.title')}</h3>
            <p className="text-stone-600 text-sm leading-snug">{t('home.landing.feature1.desc')}</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
            <h3 className="font-semibold text-stone-800 mb-1">{t('home.landing.feature2.title')}</h3>
            <p className="text-stone-600 text-sm leading-snug">{t('home.landing.feature2.desc')}</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
            <h3 className="font-semibold text-stone-800 mb-1">{t('home.landing.feature3.title')}</h3>
            <p className="text-stone-600 text-sm leading-snug">{t('home.landing.feature3.desc')}</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
            <h3 className="font-semibold text-stone-800 mb-1">{t('home.landing.feature4.title')}</h3>
            <p className="text-stone-600 text-sm leading-snug">{t('home.landing.feature4.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

