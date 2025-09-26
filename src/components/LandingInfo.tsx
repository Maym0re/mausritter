'use client';
import Link from 'next/link';
import { t } from '@/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function LandingInfo() {
  // Ref for parallax scroll container
  const paraRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: paraRef, offset: ['start end','end start'] });
  // Layer definitions ordered back (Mouse1) to front (Mouse5)
  const layers: { src: string; depth: number; z: number }[] = [
    { src: '/images/parallax/Mouse1.png', depth: 0,  z: 0 },
    { src: '/images/parallax/Mouse2.png', depth: 15, z: 10 },
    { src: '/images/parallax/Mouse3.png', depth: 30, z: 20 },
    { src: '/images/parallax/Mouse4.png', depth: 50, z: 30 },
    { src: '/images/parallax/Mouse5.png', depth: 80, z: 40 },
  ];

  return (
    <div className="bg-stone-50 flex items-start">
      <div className="w-full px-5 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6 text-center">
          {t('home.landing.title')}
        </h1>
        <p className="text-stone-600 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
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

        {/* Parallax illustration */}
        <div ref={paraRef} className="relative w-full h-[380px] md:h-[480px] lg:h-[560px] overflow-hidden mb-20 rounded-xl border border-stone-200 bg-gradient-to-b from-stone-100 to-stone-200 shadow-inner">
          {layers.map(layer => {
            const y = useTransform(scrollYProgress, [0,1], [0, layer.depth]);
            return (
              <motion.img
                key={layer.src}
                src={layer.src}
                alt={layer.depth === 0 ? t('home.landing.parallax.alt') : ''}
                aria-hidden={layer.depth !== 0}
                style={{ y, zIndex: layer.z }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] max-w-none select-none pointer-events-none"
                loading="eager"
              />
            );
          })}
          {/* Optional subtle overlay for cohesion */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/60" />
        </div>

        {/* Feature sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow transition">
            <h3 className="font-semibold text-stone-800 mb-2 text-lg">{t('home.landing.world.title')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{t('home.landing.world.desc')}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow transition">
            <h3 className="font-semibold text-stone-800 mb-2 text-lg">{t('home.landing.characters.title')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{t('home.landing.characters.desc')}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow transition">
            <h3 className="font-semibold text-stone-800 mb-2 text-lg">{t('home.landing.demoAccess.title')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{t('home.landing.demoAccess.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
