'use client';

import Link from 'next/link';
import { t } from '@/i18n';
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

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
					<Link href="/login"
					      className="flex-1 sm:flex-none sm:min-w-[200px] text-center px-6 py-3 rounded-lg bg-stone-900 text-white font-medium shadow hover:bg-black transition">
						{t('home.landing.ctaPrimary')}
					</Link>
					<Link href="/demo"
					      className="flex-1 sm:flex-none sm:min-w-[200px] text-center px-6 py-3 rounded-lg bg-white text-stone-800 font-medium border border-stone-300 shadow-sm hover:bg-stone-100 transition">
						{t('home.landing.demo')}
					</Link>
				</div>
			</div>

			<SimpleParallaxStack/>

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

			{/* Custom simple parallax (manual implementation) */}
		</div>
	);
}

// Simple manual parallax stack using scroll + translateY
function SimpleParallaxStack() {
	type ParallaxLayer = { src: string; maxShiftPct: number; top?: string, scale?: string };
	const layers = useRef<ParallaxLayer[]>([
		{src: '/images/parallax/Mouse1.png', maxShiftPct: 3},
		{src: '/images/parallax/Mouse2.png', maxShiftPct: 10},
		{src: '/images/parallax/Mouse3.png', maxShiftPct: 15, top: '-10%'},
		{src: '/images/parallax/Mouse4.png', maxShiftPct: 17, top: '-10%'},
		{src: '/images/parallax/Mouse5.png', maxShiftPct: 20, top: '-8%'},
		{src: '/images/parallax/Mouse6.png', maxShiftPct: 25, top: '-3%'} ,
	]);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [progress, setProgress] = useState(0); // 0..1 scroll progress through section

	useEffect(() => {
		const scrollTarget = document.getElementById('scrollContainer') || window;
		let ticking = false;

		function update() {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const vh = window.innerHeight;
			// progress: 0 when section bottom touches viewport bottom; 1 when it fully passed + extra viewport
			const visible = vh - rect.top;
			const total = vh + rect.height;
			let p = visible / total;
			p = Math.max(0, Math.min(1, p));
			setProgress(p);
			ticking = false;
		}

		function onScroll() {
			if (!ticking) {
				requestAnimationFrame(update);
				ticking = true;
			}
		}

		update();
		scrollTarget.addEventListener('scroll', onScroll, {passive: true});
		window.addEventListener('resize', update, {passive: true});
		return () => {
			scrollTarget.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', update);
		};
	}, []);

	return (
		<div ref={containerRef} className="relative h-[40vw] w-full overflow-hidden select-none pointer-events-none">
			{layers.current.map((layer, i) => {
				// Percentage shift relative to element height (0..maxShiftPct)
				const shiftPct = -progress * layer.maxShiftPct; // negative moves up
				return (
					<div
						key={layer.src}
						className="absolute left-0 w-full"
						style={{
							transform: `translateY(${shiftPct}%)`,
							willChange: 'transform',
							zIndex: 10 + i,
							top: layer.top ?? 'initial',
						}}
					>
						<Image
							width={1920}
							height={1080}
							src={layer.src}
							alt="Decorative parallax layer"
							priority={i === 0}
							className="w-full h-auto"
							draggable={false}
						/>
					</div>
				);
			})}
		</div>
	);
}
