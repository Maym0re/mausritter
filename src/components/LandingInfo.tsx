'use client';

import Link from 'next/link';
import { t } from '@/i18n';
import { useEffect, useRef, useState } from "react";

export function LandingInfo() {
	return (
		<div className="bg-stone-50">
			<div className="w-full max-w-3xl mx-auto px-5 pt-16 pb-10 h-[600px]">
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

			{/*<ParallaxProvider scrollContainer={scrollEl}>*/}
			{/*	<ParallaxBanner*/}
			{/*		aria-label={t('home.landing.parallax.alt')}*/}
			{/*		layers={[*/}
			{/*			{ image: '/images/parallax/Mouse1.png', speed: 0, className: 'w-full', expanded: false },*/}
			{/*			{ image: '/images/parallax/Mouse2.png', speed: 5, className: 'w-full', expanded: false },*/}
			{/*			{ image: '/images/parallax/Mouse3.png', speed: 10, className: 'w-full', expanded: false },*/}
			{/*			{ image: '/images/parallax/Mouse4.png', speed: 13, className: 'w-full', expanded: false },*/}
			{/*			{ image: '/images/parallax/Mouse5.png', speed: 15, className: 'w-full', expanded: false },*/}
			{/*			{ image: '/images/parallax/Mouse6.png', speed: 17, className: 'w-full', expanded: true, },*/}
			{/*		]}*/}
			{/*		className="w-full overflow-hidden h-[650px]"*/}
			{/*	/>*/}
			{/*</ParallaxProvider>*/}

			<SimpleParallaxStack />

			<div className="w-full max-w-5xl mx-auto px-5 py-20 space-y-12 h-[1000px]">
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
	// Layer configuration: farther layers have smaller maxShift
	const layers = useRef([
		{ src: '/images/parallax/Mouse1.png', maxShift: 0, inset: '-0 0', backgroundPosition: 'center top' },
		{ src: '/images/parallax/Mouse2.png', maxShift: 50, inset: '-0 0', backgroundPosition: 'center top' },
		{ src: '/images/parallax/Mouse3.png', maxShift: 100, inset: '0 0', backgroundPosition: 'center top' },
		{ src: '/images/parallax/Mouse4.png', maxShift: 150, inset: '0 0', backgroundPosition: 'center top' },
		{ src: '/images/parallax/Mouse5.png', maxShift: 200, inset: '0 0', backgroundPosition: 'center top' },
		{ src: '/images/parallax/Mouse6.png', maxShift: 230, inset: 0, backgroundPosition: 'center top' },
	]);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [progress, setProgress] = useState(0); // 0..1

	useEffect(() => {
		const scrollTarget = document.getElementById('scrollContainer') || window;
		let ticking = false;

		function update() {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const vh = window.innerHeight;
			// Start animating when container enters viewport, finish when it is fully passed by + viewport height
			const visible = vh - rect.top; // how far from entering (0 at bottom edge touch)
			const total = vh + rect.height; // span over which we interpolate
			let p = visible / total; // can be negative / >1
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
		(scrollTarget).addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', update, { passive: true });
		return () => {
			(scrollTarget).removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', update);
		};
	}, []);

	return (
		<div className="relative h-[650px] w-full overflow-hidden select-none pointer-events-none bg-stone-100 border-t border-b border-stone-200">
			<div ref={containerRef} className="">
				{layers.current.map((layer, i) => {
					const shift = -progress * layer.maxShift; // negative => moves up
					return (
						<div
							key={layer.src}
							className="absolute inset-0"
							style={{
								transform: `translateY(${shift}px)`,
								willChange: 'transform',
								// Higher zIndex for nearer layers (later ones)
								zIndex: 10 + i,
								backgroundImage: `url(${layer.src})`,
								backgroundPosition: layer.backgroundPosition,
								backgroundSize: 'contain',
								height: '1000px',
								inset: layer.inset,
								backgroundRepeat: 'no-repeat',
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
