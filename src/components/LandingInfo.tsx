'use client';

import Link from 'next/link';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { t } from '@/i18n';

export function LandingInfo() {
	return (
		<div className="bg-stone-50">
			<div className="w-full max-w-3xl mx-auto px-5 pt-16 pb-10">
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
			</div>

			{/* Локальный провайдер на случай отсутствия глобального */}
			<ParallaxProvider>
				<ParallaxBanner
					aria-label={t('home.landing.parallax.alt')}
					layers={[
						{ image: '/images/parallax/Mouse1.png', speed: 0 },
						{ image: '/images/parallax/Mouse2.png', speed: -10 },
						{ image: '/images/parallax/Mouse3.png', speed: -20 },
						{ image: '/images/parallax/Mouse4.png', speed: -30 },
						{ image: '/images/parallax/Mouse5.png', speed: -40 },
					]}
					className="w-full h-[55vh] min-h-[380px] max-h-[640px] overflow-hidden"
				/>
			</ParallaxProvider>

			<div className="w-full max-w-5xl mx-auto px-5 py-20 space-y-12">
				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 flex flex-col">
						<h3 className="text-lg font-semibold text-stone-800 mb-2">{t('home.landing.world.title')}</h3>
						<p className="text-stone-600 text-sm leading-relaxed">{t('home.landing.world.desc')}</p>
					</div>
					<div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 flex flex-col">
						<h3 className="text-lg font-semibold text-stone-800 mb-2">{t('home.landing.characters.title')}</h3>
						<p className="text-stone-600 text-sm leading-relaxed">{t('home.landing.characters.desc')}</p>
					</div>
					<div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 flex flex-col">
						<h3 className="text-lg font-semibold text-stone-800 mb-2">{t('home.landing.demoAccess.title')}</h3>
						<p className="text-stone-600 text-sm leading-relaxed">{t('home.landing.demoAccess.desc')}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
