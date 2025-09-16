"use client";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type ToastType = 'info' | 'success' | 'error' | 'warning';
export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  createdAt: number;
  duration: number; // ms
}

interface ToastContextValue {
  push: (message: string, opts?: { type?: ToastType; duration?: number }) => string;
  remove: (id: string) => void;
  info: (message: string, duration?: number) => string;
  success: (message: string, duration?: number) => string;
  error: (message: string, duration?: number) => string;
  warning: (message: string, duration?: number) => string;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const portalRef = useRef<HTMLElement | null>(null);

  // Initialize portal root
  useEffect(() => {
    let el = document.getElementById('toast-root') as HTMLElement | null;
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast-root';
      document.body.appendChild(el);
    }
    portalRef.current = el;
  }, []);

  const remove = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const push = useCallback((message: string, opts?: { type?: ToastType; duration?: number }) => {
    const id = crypto.randomUUID();
    const duration = opts?.duration ?? 4000;
    const type = opts?.type ?? 'info';
    setToasts(prev => [...prev, { id, type, message, createdAt: Date.now(), duration }]);
    return id;
  }, []);

  // Auto remove
  useEffect(() => {
    if (!toasts.length) return;
    const timers = toasts.map(t => {
      const remaining = t.createdAt + t.duration - Date.now();
      return setTimeout(() => remove(t.id), Math.max(remaining, 0));
    });
    return () => { timers.forEach(clearTimeout); };
  }, [toasts, remove]);

  const value: ToastContextValue = {
    push,
    remove,
    info: (m, d) => push(m, { type: 'info', duration: d }),
    success: (m, d) => push(m, { type: 'success', duration: d }),
    error: (m, d) => push(m, { type: 'error', duration: d }),
    warning: (m, d) => push(m, { type: 'warning', duration: d })
  };

  const colors: Record<ToastType, string> = {
    info: 'bg-blue-600',
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-amber-600'
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {portalRef.current && createPortal(
        <div className="fixed z-[9999] top-4 right-4 flex flex-col gap-2 w-80 max-w-full pointer-events-none">
          {toasts.map(t => (
            <div
              key={t.id}
              role="status"
              aria-live="polite"
              className={`pointer-events-auto shadow-lg rounded-md text-white px-4 py-3 text-sm flex items-start gap-3 animate-fade-in border border-black/10 ${colors[t.type]}`}
            >
              <div className="flex-1 whitespace-pre-wrap break-words">{t.message}</div>
              <button
                onClick={() => remove(t.id)}
                className="text-white/80 hover:text-white ml-1"
              >×</button>
            </div>
          ))}
        </div>,
        portalRef.current
      )}
    </ToastContext.Provider>
  );
};

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

// Simple fade-in animation via tailwind plugin-less approach
// Add minimal CSS if not present already.

