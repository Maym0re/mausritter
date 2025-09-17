'use client';
import React, { useState, useRef, useCallback } from 'react';

interface DraggableResizableWindowProps {
  id: string;
  title?: string;
  initialX?: number;
  initialY?: number;
  initialWidth?: number;
  initialHeight?: number;
  minWidth?: number;
  minHeight?: number;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function DraggableResizableWindow({
  id,
  initialX = 120,
  initialY = 120,
  initialWidth = 480,
  initialHeight = 520,
  minWidth = 300,
  minHeight = 200,
	title = '',
  onClose,
  children,
  footer,

}: DraggableResizableWindowProps) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ w: initialWidth, h: initialHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ w: 0, h: 0, x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      setPos({ x: e.clientX - dragOffset.current.x, y: e.clientY - dragOffset.current.y });
    } else if (isResizing) {
      const dx = e.clientX - resizeStart.current.x;
      const dy = e.clientY - resizeStart.current.y;
      setSize({
        w: Math.max(minWidth, resizeStart.current.w + dx),
        h: Math.max(minHeight, resizeStart.current.h + dy)
      });
    }
  }, [isDragging, isResizing, minWidth, minHeight]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  const beginDrag = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('[data-no-drag]')) return;
    setIsDragging(true);
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };

  const beginResize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    resizeStart.current = { w: size.w, h: size.h, x: e.clientX, y: e.clientY };
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <div
      ref={windowRef}
      className="fixed bg-white shadow-xl border border-stone-300 rounded-md flex flex-col overflow-hidden select-none"
      style={{ left: pos.x, top: pos.y, width: size.w, height: size.h, zIndex: 1000 }}
    >
      <div
        className={`cursor-move bg-stone-800 text-stone-100 px-3 py-2 flex items-center justify-between text-sm font-medium ${isDragging ? 'opacity-80' : ''}`}
        onMouseDown={beginDrag}
      >
        <span className="truncate pr-2">{title}</span>
        <div className="flex items-center gap-2" data-no-drag>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-3 text-sm" data-no-drag>
        {children}
      </div>
      {footer && (
        <div className="border-t border-stone-200 p-2 text-xs bg-stone-50" data-no-drag>
          {footer}
        </div>
      )}
      <div
        onMouseDown={beginResize}
        className="absolute w-4 h-4 bottom-0 right-0 cursor-se-resize bg-transparent"
        style={{
          backgroundImage: 'linear-gradient(135deg, transparent 0, transparent 40%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.15) 60%, transparent 60%, transparent 100%)'
        }}
      />
    </div>
  );
}

