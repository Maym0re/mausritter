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
				{/* Free notice & official site link */}
				<div className="mt-12 text-center text-sm text-stone-600 space-y-3">
					<p>{t('home.landing.freeNote')}</p>
					<p>
						<a
							href="https://mausritter.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-stone-800 underline underline-offset-2 hover:text-black font-medium"
						>
							{t('home.landing.officialSite')}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

// Simple manual parallax stack using scroll + translateY
function SimpleParallaxStack() {
	// Layer configuration with depth: farther = smaller maxShiftPct, later start, smaller scaleDelta
	type ParallaxLayer = {
		src: string;
		maxShiftPct: number;
		startOffset: number;
		top?: string;
	};
	const layers = useRef<ParallaxLayer[]>([
		{src: '/images/parallax/Mouse1.png', maxShiftPct: 2, startOffset: 0.18},
		{src: '/images/parallax/Mouse2.png', maxShiftPct: 10, startOffset: 0.14},
		{src: '/images/parallax/Mouse3.png', maxShiftPct: 16, startOffset: 0.10, top: '-8%'},
		{src: '/images/parallax/Mouse4.png', maxShiftPct: 20, startOffset: 0.07, top: '-8%'},
		{src: '/images/parallax/Mouse5.png', maxShiftPct: 22, startOffset: 0.05, top: '-4%'},
		{src: '/images/parallax/Mouse6.png', maxShiftPct: 24, startOffset: -0.5, top: '0'},
	]);

	const containerRef = useRef<HTMLDivElement | null>(null);
	const [progress, setProgress] = useState(0); // global 0..1 scroll progress

	useEffect(() => {
		const scrollTarget = document.getElementById('scrollContainer') || window;
		let ticking = false;

		const clamp = (v: number, min = 0, max = 1) => v < min ? min : v > max ? max : v;

		function update() {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const vh = window.innerHeight;
			// progress spans from when bottom hits viewport bottom (0) until fully scrolled past (1)
			const visible = vh - rect.top;
			const total = vh + rect.height;
			setProgress(clamp(visible / total));
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

	const clamp = (v: number, min = 0, max = 1) => v < min ? min : v > max ? max : v;

	return (
		<div ref={containerRef} className="relative h-[40vw] w-full overflow-hidden select-none pointer-events-none">
			{layers.current.map((layer, i) => {
				// Per-layer local progress with delayed start
				let local = (progress - layer.startOffset) / (1 - layer.startOffset);
				local = clamp(local);
				// Easing to emphasize mid portion
				const eased = Math.pow(local, 1.22);
				const shiftPct = -eased * layer.maxShiftPct; // translate up
				return (
					<div
						key={layer.src}
						className="absolute left-0 w-full will-change-transform"
						style={{
							transform: `translate3d(0, ${shiftPct}%, 0)`,
							willChange: 'transform',
							zIndex: 10 + i,
							top: layer.top || '0px',
						}}
					>
						<Image
							width={1920}
							height={1080}
							src={layer.src}
							alt="Decorative parallax layer"
							priority={i === 0}
							loading={i === 0 ? 'eager' : 'lazy'}
							decoding={i === 0 ? 'sync' : 'async'}
							className="w-full h-auto select-none pointer-events-none"
							draggable={false}
						/>
					</div>
				);
			})}
		</div>
	);
}
