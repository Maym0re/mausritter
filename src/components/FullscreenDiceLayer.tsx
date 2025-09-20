"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type DiceBox from '@3d-dice/dice-box';
import { t } from '@/i18n';
import { useSession } from 'next-auth/react';

// Helpers outside component to avoid changing references each render
interface NormalizedDie { type: string; value: number; sides?: number }
const isDieArray = (v: unknown): v is { value: number; type?: string; dieType?: string; sides?: number }[] => Array.isArray(v);
const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
const extractArray = (arr: { value: number; type?: string; dieType?: string; sides?: number }[]): NormalizedDie[] => arr
  .filter(d => typeof d?.value === 'number')
  .map(d => ({ type: d.type || d.dieType || (d.sides ? `d${d.sides}` : 'd?'), value: d.value, sides: d.sides }));
const normalizeResult = (raw: unknown): { dice: NormalizedDie[]; total: number; error?: string } => {
  if (isDieArray(raw)) {
    const dice = extractArray(raw);
    const total = dice.reduce((s,d)=>s+d.value,0);
    return { dice, total };
  }
  if (isRecord(raw)) {
    let dice: NormalizedDie[] = [];
    if (isDieArray((raw as Record<string, unknown>).rolls)) {
      dice = extractArray((raw as Record<string, unknown>).rolls as { value: number; type?: string; dieType?: string; sides?: number }[]);
    } else if (isDieArray((raw as Record<string, unknown>).results)) {
      dice = extractArray((raw as Record<string, unknown>).results as { value: number; type?: string; dieType?: string; sides?: number }[]);
    }
    const total = typeof (raw as Record<string, unknown>).total === 'number'
      ? (raw as Record<string, unknown>).total as number
      : dice.reduce((s,d)=>s+d.value,0);
    let error: string | undefined;
    const maybeError = (raw as Record<string, unknown>).error;
    if (typeof maybeError === 'string') error = maybeError;
    return { dice, total, error };
  }
  return { dice: [], total: 0 };
};

const ASSET_PATH = '/dice-assets/';

// Stable color options (outside component so hooks deps not needed)
const colorOptions: { id: string; filter: string; preview: string }[] = [
	{id: 'default', filter: 'none', preview: '#059669'},
	{id: 'amber', filter: 'hue-rotate(277deg) saturate(2)', preview: '#f59e0b'},
	{id: 'amethyst', filter: 'hue-rotate(115deg) saturate(1.35)', preview: '#7c3aed'},
	{id: 'sapphire', filter: 'hue-rotate(84deg) saturate(2)', preview: '#2563eb'},
	{id: 'black', filter: 'hue-rotate(0) saturate(0)', preview: '#1c1c1e'},
	{id: 'crimson', filter: 'hue-rotate(235deg) saturate(2)', preview: '#dc2626'},
];

export default function FullscreenDiceLayer({campaignId, onLoggedAction}: {campaignId?: string; onLoggedAction?: (log: unknown)=>void}) {
	const containerId = 'dice-fullscreen-layer';
	const boxRef = useRef<DiceBox | null>(null);
	const [notation, setNotation] = useState('2d6');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [rolling, setRolling] = useState(false);
	const [open, setOpen] = useState(true);
	const [diceColor, setDiceColor] = useState<string>('default');
	const [autoClear, setAutoClear] = useState(true);
	const clearTimeoutRef = useRef<number | null>(null);
	const [mounted, setMounted] = useState(false); // prevent hydration mismatch
	const [prefsLoaded, setPrefsLoaded] = useState(false); // ensure we restore settings (color) before init
	const createdByThisRef = useRef(false); // whether this instance created the DOM container
	const lastAppliedColorRef = useRef<string>('default'); // last color actually applied to canvas
	const [hasActiveDice, setHasActiveDice] = useState(false); // whether dice currently displayed

	useEffect(() => {
		setMounted(true);
	}, []);

	// LocalStorage persistence
	const LS_KEY = 'dicePrefs_v1';
	useEffect(() => {
		if (!mounted) return; // ensure browser APIs available
		try {
			const raw = localStorage.getItem(LS_KEY);
			if (raw) {
				const parsed = JSON.parse(raw) as Partial<{
					notation: string;
					diceColor: string;
					autoClear: boolean;
					open: boolean;
				}>;
				if (parsed.notation) setNotation(parsed.notation);
				if (parsed.diceColor) {
					setDiceColor(parsed.diceColor);
					lastAppliedColorRef.current = parsed.diceColor; // apply saved color as baseline (no active dice yet)
				}
				if (typeof parsed.autoClear === 'boolean') setAutoClear(parsed.autoClear);
				if (typeof parsed.open === 'boolean') setOpen(parsed.open);
			}
		} catch { /* ignore */
		} finally {
			setPrefsLoaded(true);
		}
	}, [mounted]);
	useEffect(() => {
		if (!mounted) return;
		try {
			localStorage.setItem(LS_KEY, JSON.stringify({notation, diceColor, autoClear, open}));
		} catch { /* ignore */
		}
	}, [notation, diceColor, autoClear, open, mounted]);

	const normalizeNotation = (input: string): string => input.replace(/(^|[^0-9a-z])d(%|[0-9]+)/gi, (full, p1: string, p2: string) => `${p1}1d${p2}`);

	// Init DiceBox once
	useEffect(() => {
		if (!mounted || !prefsLoaded) return; // wait for settings load
		let cancelled = false;
		let resizeHandler: (() => void) | null = null;
		const applySize = () => {
			const container = document.getElementById(containerId);
			if (!container) return;
			container.style.position = 'fixed';
			container.style.top = '0';
			container.style.left = '0';
			container.style.width = '100vw';
			container.style.height = '100vh';
			container.style.pointerEvents = 'none';
			const canvas = container.querySelector('canvas') as HTMLCanvasElement | null;
			if (canvas) {
				canvas.style.width = '100vw';
				canvas.style.height = '100vh';
				canvas.style.pointerEvents = 'none';
			}
		};
		const adjustResolution = () => {
			const canvas = document.querySelector(`#${containerId} canvas`) as HTMLCanvasElement | null;
			if (!canvas) return;
			try {
				const dpr = window.devicePixelRatio || 1;
				const w = Math.floor(window.innerWidth * dpr);
				const h = Math.floor(window.innerHeight * dpr);
				if (canvas.width !== w || canvas.height !== h) {
					canvas.width = w;
					canvas.height = h;
				}
			} catch { /* ignore */
			}
		};
		const applyColor = () => {
			const canvas = document.querySelector(`#${containerId} canvas`) as HTMLCanvasElement | null;
			if (!canvas) return;
			const opt = colorOptions.find(o => o.id === lastAppliedColorRef.current);
			canvas.style.filter = opt ? opt.filter : 'none';
		};
		(async () => {
			setLoading(true);
			try {
				// Ensure container exists in DOM
				let container = document.getElementById(containerId);
				if (!container) {
					container = document.createElement('div');
					container.id = containerId;
					container.className = 'fixed top-0 left-0 w-screen h-screen z-[400]';
					container.style.background = 'transparent';
					document.body.appendChild(container);
					createdByThisRef.current = true; // mark ownership
				}
				applySize();
				const {default: DiceBoxLib} = await import('@3d-dice/dice-box');
				if (cancelled) return;
				const instance: DiceBox = new DiceBoxLib(`#${containerId}`, {
					assetPath: ASSET_PATH,
					theme: 'default',
					scale: 4,
					gravity: 9.8,
					mass: 1,
					friction: 0.5,
					lightIntensity: 1.1,
					throwForce: 4,
					offscreen: false
				});
				await instance.init();
				if (cancelled) {
					instance.destroy();
					return;
				}
				boxRef.current = instance;
				applySize();
				adjustResolution();
				applyColor(); // apply with restored diceColor
				resizeHandler = () => {
					applySize();
					adjustResolution();
				};
				window.addEventListener('resize', resizeHandler);
				setLoading(false);
			} catch (e: unknown) {
				if (!cancelled) {
					setError(e instanceof Error ? e.message : String(e));
					setLoading(false);
				}
			}
		})();
		return () => {
			cancelled = true;
			if (resizeHandler) window.removeEventListener('resize', resizeHandler);
			if (clearTimeoutRef.current) {
				window.clearTimeout(clearTimeoutRef.current);
				clearTimeoutRef.current = null;
			}
			try {
				boxRef.current?.destroy();
			} catch { /* ignore */
			}
			boxRef.current = null;
			if (createdByThisRef.current) {
				const el = document.getElementById(containerId);
				if (el?.parentNode) el.parentNode.removeChild(el);
				createdByThisRef.current = false;
			}
		};
	}, [mounted, prefsLoaded]);

	const { data: session } = useSession();

	const roll = useCallback(async (n?: string) => {
		const expr = normalizeNotation((n || notation).trim());
		if (!expr || !boxRef.current) return;
		// If there are active dice and color changed, auto-clear old dice first (they keep old color visually until cleared)
		if (hasActiveDice && lastAppliedColorRef.current !== diceColor) {
			try {
				boxRef.current.clear();
			} catch { /* ignore */
			}
			setHasActiveDice(false);
			// Apply new color to canvas now (only future dice)
			const canvas = document.querySelector(`#${containerId} canvas`) as HTMLCanvasElement | null;
			if (canvas) {
				const opt = colorOptions.find(o => o.id === diceColor);
				canvas.style.filter = opt ? opt.filter : 'none';
				lastAppliedColorRef.current = diceColor;
			}
			// Cancel any pending auto-clear from previous roll
			if (clearTimeoutRef.current) {
				window.clearTimeout(clearTimeoutRef.current);
				clearTimeoutRef.current = null;
			}
		}
		// If no active dice (either none before or just auto-cleared) and color changed, apply immediately
		if (!hasActiveDice && lastAppliedColorRef.current !== diceColor) {
			const canvas = document.querySelector(`#${containerId} canvas`) as HTMLCanvasElement | null;
			if (canvas) {
				const opt = colorOptions.find(o => o.id === diceColor);
				canvas.style.filter = opt ? opt.filter : 'none';
				lastAppliedColorRef.current = diceColor;
			}
		}
		setRolling(true);
		setError(null);
		try {
			const raw = await boxRef.current.roll(expr);
			const normalized = normalizeResult(raw);
			if (normalized.error) setError(normalized.error);
			setHasActiveDice(true);
			if (autoClear) {
				if (clearTimeoutRef.current) window.clearTimeout(clearTimeoutRef.current);
				clearTimeoutRef.current = window.setTimeout(() => {
					try { boxRef.current?.clear(); } catch { /* ignore */ }
					setHasActiveDice(false);
				}, 8000);
			}
			if (!normalized.error && campaignId && session?.user?.id) {
				try {
					const payload = { notation: expr, total: normalized.total, rolls: normalized.dice.map(d => ({ type: d.type, value: d.value, sides: d.sides })) };
					const resp = await fetch(`/api/campaigns/${campaignId}/dice-rolls`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
					if (resp.ok) {
						const created = await resp.json();
						onLoggedAction?.(created);
						window.dispatchEvent(new CustomEvent('diceRollLogged', { detail: created }));
					}
				} catch { /* ignore network/log errors */ }
			} else if (!campaignId && onLoggedAction) {
				const localLog = {
					id: `demo-${Date.now()}`,
					notation: expr,
					total: normalized.total,
					entries: normalized.dice.map((d, idx) => ({ id: `e-${idx}`, order: idx, type: d.type, value: d.value, sides: d.sides ?? null })),
					createdAt: new Date().toISOString()
				};
				onLoggedAction(localLog);
				window.dispatchEvent(new CustomEvent('diceRollLogged', { detail: localLog }));
			}
		} catch (e: unknown) {
			setError(e instanceof Error ? e.message : String(e));
		} finally {
			setRolling(false);
		}
	}, [notation, autoClear, diceColor, hasActiveDice, campaignId, session?.user?.id, onLoggedAction]);

	if (!mounted) return null; // render nothing server-side & until mounted

	return (
		<div className="fixed bottom-4 right-4 z-[450] flex flex-col items-end gap-2">
			<button onClick={() => setOpen(o => !o)}
			        className="px-3 py-1 rounded-md text-xs font-medium bg-stone-700 text-white hover:bg-stone-600 shadow">{open ? t('dice.toggle.open') : t('dice.toggle.closed')}</button>
			{open && (
				<div className="w-60 p-3 rounded-lg bg-white/90 backdrop-blur shadow border border-stone-200 space-y-2">
					<div className="flex gap-2 flex-wrap">
						{['d6', '2d6', 'd12', 'd20', 'd100'].map(p => (
							<button key={p} type="button" onClick={e => {
								setNotation(p);
								if (e.shiftKey) roll(p);
							}} className="px-2 py-1 text-xs rounded bg-stone-200 hover:bg-stone-300 relative group">{p}</button>
						))}
					</div>
					<div className="space-y-1">
						<div className="text-xs font-medium text-stone-600 flex items-center justify-between">
							<span>{t('dice.colors.title')}</span>
						</div>
						<div className="flex flex-wrap gap-2">
							{colorOptions.map(opt => (
								<button
									key={opt.id}
									type="button"
									aria-label={t(`dice.colors.${opt.id}`)}
									onClick={() => setDiceColor(opt.id)}
									className={`w-6 h-6 rounded-full border flex items-center justify-center relative transition ring-offset-1 ${diceColor === opt.id ? 'ring-2 ring-stone-600 border-stone-700' : 'border-stone-300 hover:border-stone-500'}`}
									style={{background: opt.preview}}
								>
									{diceColor === opt.id && <span className="w-2 h-2 bg-white rounded-full"/>}
								</button>
							))}
						</div>
					</div>
					<div className="flex items-center gap-2 text-xs">
						<label className="flex items-center gap-1 cursor-pointer select-none">
							<input type="checkbox" className="rounded border-stone-300" checked={autoClear}
							       onChange={e => setAutoClear(e.target.checked)}/>
							{t('dice.autoclear')}
						</label>
						{!autoClear && <span className="text-[10px] text-stone-400">{t('dice.manualClear')}</span>}
					</div>
					<div className="space-y-1">
						<label className="text-xs font-medium text-stone-600">{t('dice.notation')}</label>
						<input value={notation} onChange={e => setNotation(e.target.value)} onKeyDown={e => {
							if (e.key === 'Enter') roll();
						}} className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-stone-500"
						       placeholder="2d6+1"/>
					</div>
					<div className="flex gap-2">
						<button disabled={loading || rolling} onClick={() => roll()}
						        className="flex-1 px-3 py-1 rounded bg-stone-600 text-white text-sm disabled:opacity-50">{rolling ? '...' : t('dice.roll')}</button>
						<button
							disabled={loading}
							onClick={() => {
								try {
									boxRef.current?.clear();
								} catch { /* ignore */
								}
								if (clearTimeoutRef.current) {
									window.clearTimeout(clearTimeoutRef.current);
									clearTimeoutRef.current = null;
								}
								setRolling(false);
								setHasActiveDice(false);
								// Apply pending color immediately after manual clear if user changed it while dice were active
								if (lastAppliedColorRef.current !== diceColor) {
									const canvas = document.querySelector(`#${containerId} canvas`) as HTMLCanvasElement | null;
									if (canvas) {
										const opt = colorOptions.find(o => o.id === diceColor);
										canvas.style.filter = opt ? opt.filter : 'none';
										lastAppliedColorRef.current = diceColor;
									}
								}
							}}
							className="px-3 py-1 rounded bg-stone-200 text-stone-800 text-sm disabled:opacity-50"
						>{t('dice.clear')}</button>
					</div>
					{loading && <div className="text-xs text-stone-500">{t('dice.initializing')}</div>}
					{error && <div className="text-xs text-red-600 break-all">{error}</div>}
				</div>
			)}
		</div>
	);
}
