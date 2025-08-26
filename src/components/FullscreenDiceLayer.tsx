"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type DiceBox from '@3d-dice/dice-box';

// Полноэкранный прозрачный слой с 3D кубами, доступен на всех страницах.
// Минималистичная панель управления в углу.

const ASSET_PATH = '/dice-assets/';

export default function FullscreenDiceLayer() {
  const containerId = 'dice-fullscreen-layer';
  const boxRef = useRef<DiceBox | null>(null);
  const [notation, setNotation] = useState('2d6');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rolling, setRolling] = useState(false);
  const [open, setOpen] = useState(true);

  const normalizeNotation = (input: string): string => {
    return input.replace(/(^|[^0-9a-z])d(%|[0-9]+)/gi, (full, p1: string, p2: string) => `${p1}1d${p2}`);
  };

  useEffect(() => {
    let cancelled = false;
    let onResize: (() => void) | null = null; // сохраняем ссылку для cleanup

    // Выносим applySize, чтобы был доступен в cleanup
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

    const adjustCanvasResolution = () => {
      const container = document.getElementById(containerId);
      if (!container) return;
      const canvas = container.querySelector('canvas') as HTMLCanvasElement | null;
      if (!canvas) return;
      // Если offscreen активен, изменение width/height бросит исключение — ловим и пропускаем.
      try {
        const dpr = window.devicePixelRatio || 1;
        const targetW = Math.floor(window.innerWidth * dpr);
        const targetH = Math.floor(window.innerHeight * dpr);
        if (canvas.width !== targetW || canvas.height !== targetH) {
          canvas.width = targetW; // повышаем внутреннее разрешение
          canvas.height = targetH;
        }
      } catch {
        // Offscreen режим – пропускаем.
      }
    };

    // Ставим размеры сразу до init
    applySize();

    (async () => {
      try {
        setLoading(true);
        const { default: DiceBoxLib } = await import('@3d-dice/dice-box');
        const instance: DiceBox = new DiceBoxLib(`#${containerId}`, {
          assetPath: ASSET_PATH,
          theme: 'default',
          scale: 4,
          gravity: 9.8,
          mass: 1,
          friction: 0.5,
          lightIntensity: 1.1,
          throwForce: 4,
          offscreen: false, // отключаем Offscreen чтобы можно было повысить DPI
        });
        await instance.init();
        applySize();
        adjustCanvasResolution();
        onResize = () => { applySize(); adjustCanvasResolution(); };
        window.addEventListener('resize', onResize);
        if (cancelled) {
          instance.destroy();
          return;
        }
        boxRef.current = instance;
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
      if (onResize) window.removeEventListener('resize', onResize);
      try { boxRef.current?.destroy(); } catch { /* ignore */ }
    };
  }, []);

  const roll = useCallback(async (n?: string) => {
    const expr = normalizeNotation((n || notation).trim());
    if (!expr || !boxRef.current) return;
    setRolling(true);
    setError(null);
    try {
      const res = await boxRef.current.roll(expr);
      if (res?.error) setError(res.error);
      // Автоочистка сцены через несколько секунд (опционально)
      setTimeout(() => { try { boxRef.current?.clear(); } catch {} }, 8000);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setRolling(false);
    }
  }, [notation]);

  // Горячие клавиши: D d20, Escape скрыть панель (убран повтор R)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (['INPUT','TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setNotation('d20');
        roll('d20');
      } else if (e.key === 'Escape') {
        setOpen(o => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [roll]);

  return (
    <>
      {/* Контейнер для canvas кубов */}
      <div
        id={containerId}
        className="fixed top-0 left-0 w-screen h-screen z-[400]" // pointer-events отключены стилем внутри
        style={{ background: 'transparent' }}
      />

      {/* Панель управления */}
      <div className="fixed bottom-4 right-4 z-[450] flex flex-col items-end gap-2">
        <button
          onClick={() => setOpen(o => !o)}
          className="px-3 py-1 rounded-md text-xs font-medium bg-stone-700 text-white hover:bg-stone-600 shadow"
        >{open ? 'Кубы ▼' : 'Кубы ▲'}</button>
        {open && (
          <div className="w-60 p-3 rounded-lg bg-white/90 backdrop-blur shadow border border-stone-200 space-y-2">
            <div className="flex gap-2 flex-wrap">
              {['d20','2d6','3d6','4d6kh3','d100'].map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => { setNotation(p); roll(p); }}
                  className="px-2 py-1 text-xs rounded bg-stone-200 hover:bg-stone-300"
                >{p}</button>
              ))}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-stone-600">Нотация</label>
              <input
                value={notation}
                onChange={e => setNotation(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') roll(); }}
                className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-stone-500"
                placeholder="2d6+1"
              />
            </div>
            <div className="flex gap-2">
              <button
                disabled={loading || rolling}
                onClick={() => roll()}
                className="flex-1 px-3 py-1 rounded bg-stone-600 text-white text-sm disabled:opacity-50"
              >{rolling ? '...' : 'Бросить'}</button>
              <button
                disabled={loading}
                onClick={() => { try { boxRef.current?.clear(); } catch {} }}
                className="px-3 py-1 rounded bg-stone-200 text-stone-800 text-sm disabled:opacity-50"
              >Очистить</button>
            </div>
            {loading && <div className="text-xs text-stone-500">Инициализация...</div>}
            {error && <div className="text-xs text-red-600 break-all">{error}</div>}
            <div className="text-[10px] text-stone-400 pt-1">D d20 • Esc скрыть</div>
          </div>
        )}
      </div>
    </>
  );
}
