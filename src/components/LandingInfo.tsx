'use client';
import Link from 'next/link';
import { t } from '@/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function LandingInfo() {
  // Ref for parallax scroll container
  const paraRef = useRef<HTMLDivElement | null>(null);
  // Use global page scroll progress so layers always react while user scrolls the page
  const { scrollYProgress } = useScroll();
  // Layer metadata ordered back to front
  const layers = [
    { src: '/images/parallax/Mouse1.png', depth: 0,  z: 0 },
    { src: '/images/parallax/Mouse2.png', depth: 15, z: 10 },
    { src: '/images/parallax/Mouse3.png', depth: 30, z: 20 },
    { src: '/images/parallax/Mouse4.png', depth: 50, z: 30 },
    { src: '/images/parallax/Mouse5.png', depth: 80, z: 40 },
  ];

  const y0 = useTransform(scrollYProgress, [0,1], [0, layers[0].depth]);
  const y1 = useTransform(scrollYProgress, [0,1], [0, layers[1].depth]);
  const y2 = useTransform(scrollYProgress, [0,1], [0, layers[2].depth]);
  const y3 = useTransform(scrollYProgress, [0,1], [0, layers[3].depth]);
  const y4 = useTransform(scrollYProgress, [0,1], [0, layers[4].depth]);
  const layerTransforms = [y0, y1, y2, y3, y4];

  return (
    <div className="bg-stone-50 flex flex-col items-stretch">
      {/* Constrained hero content */}
      <div className="w-full max-w-6xl mx-auto px-5 pt-16">
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
      </div>
      {/* Full-bleed parallax section */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div ref={paraRef} className="relative w-full overflow-hidden mb-20 h-screen border border-stone-200 shadow-inner">
          {layers.map((layer, i) => (
            <motion.img
              key={layer.src}
              src={layer.src}
              alt={i===0 ? t('home.landing.parallax.alt') : ''}
              aria-hidden={i!==0}
              style={{ y: layerTransforms[i], zIndex: layer.z }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-none select-none pointer-events-none"
              loading="eager"
            />
          ))}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/60" />
        </div>
      </div>
      {/* Feature sections */}
      <div className="w-full max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-1 gap-8 mb-10">
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
