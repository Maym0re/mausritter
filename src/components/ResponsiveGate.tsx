"use client";
import React, { useEffect, useState } from 'react';
import { t } from '@/i18n';

// Simple gate component that blocks small screens (mobile) until user opts in.
export const ResponsiveGate: React.FC<{ children: React.ReactNode; minWidth?: number }> = ({children, minWidth = 900}) => {
	const [ready, setReady] = useState(false);
	const [allowMobile, setAllowMobile] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const stored = typeof window !== 'undefined' ? localStorage.getItem('allowMobile') === '1' : false;
		setAllowMobile(stored);
		const mq = window.matchMedia(`(max-width: ${minWidth - 1}px)`);
		const update = () => setIsMobile(mq.matches);
		update();
		mq.addEventListener('change', update);
		setReady(true);
		return () => mq.removeEventListener('change', update);
	}, [minWidth]);

	const enableAnyway = () => {
		localStorage.setItem('allowMobile', '1');
		setAllowMobile(true);
	};

	if (!ready) return null; // avoid flicker until hydration

	if (isMobile && !allowMobile) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center bg-neutral-50 text-neutral-800 gap-6">
				<div className="max-w-sm space-y-4">
					<h1 className="text-xl font-semibold">{t('responsive.blocked.title')}</h1>
					<p className="text-sm leading-relaxed opacity-80">{t('responsive.blocked.message')}</p>
					<button onClick={enableAnyway} className="mt-2 rounded bg-stone-800 text-white hover:bg-stone-700 text-sm font-medium px-4 py-2 transition-colors">{t('responsive.blocked.continue')}</button>
				</div>
				<div className="text-[10px] opacity-40">{t('responsive.blocked.beta')}</div>
			</div>
		);
	}

	return <>{children}</>;
};
