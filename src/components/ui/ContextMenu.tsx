"use client";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

export interface ContextMenuItem {
  id: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
}

interface ContextMenuState {
  visible: boolean;
  x: number;
  y: number;
  items: ContextMenuItem[];
}

interface ContextMenuContextValue {
  open: (x: number, y: number, items: ContextMenuItem[]) => void;
  close: () => void;
}

const ContextMenuContext = createContext<ContextMenuContextValue | null>(null);

export const useContextMenu = (): ContextMenuContextValue => {
  const ctx = useContext(ContextMenuContext);
  if (!ctx) throw new Error('useContextMenu must be used inside ContextMenuProvider');
  return ctx;
};

export const ContextMenuProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<ContextMenuState>({ visible: false, x: 0, y: 0, items: [] });
  const menuRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setState(s => ({ ...s, visible: false })), []);

  const open = useCallback((x: number, y: number, items: ContextMenuItem[]) => {
    setState({ visible: true, x, y, items });
  }, []);

  useEffect(() => {
    const onGlobalClick = (e: MouseEvent) => {
      if (!state.visible) return;
      const target = e.target as Node | null;
      if (menuRef.current && target && menuRef.current.contains(target)) return;
      close();
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('mousedown', onGlobalClick);
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('mousedown', onGlobalClick);
      window.removeEventListener('keydown', onEsc);
    };
  }, [state.visible, close]);

  // Basic positioning correction so menu stays inside viewport
  const style: React.CSSProperties = {};
  if (state.visible) {
    const vw = typeof window !== 'undefined' ? window.innerWidth : 0;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 0;
    const estimatedWidth = 200; // rough width
    const estimatedHeight = (state.items.length * 32) + 8;
    let px = state.x;
    let py = state.y;
    if (px + estimatedWidth > vw) px = Math.max(0, vw - estimatedWidth - 4);
    if (py + estimatedHeight > vh) py = Math.max(0, vh - estimatedHeight - 4);
    style.left = px;
    style.top = py;
  }

  return (
    <ContextMenuContext.Provider value={{ open, close }}>
      {children}
      {state.visible && (
        <div
          ref={menuRef}
          className="fixed z-50 bg-neutral-800 text-neutral-100 shadow-lg rounded border border-neutral-700 py-1 text-sm select-none"
          style={style}
        >
          {state.items.map(item => (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => {
                if (item.disabled) return;
                item.onClick();
                close();
              }}
              className={[
                'block w-full text-left px-3 py-1.5 hover:bg-neutral-700 focus:bg-neutral-700 outline-none disabled:opacity-50 disabled:cursor-not-allowed',
                item.danger ? 'text-red-400 hover:text-red-300 focus:text-red-300' : ''
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </ContextMenuContext.Provider>
  );
};

