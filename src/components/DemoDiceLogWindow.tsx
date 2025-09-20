"use client";
import React from 'react';
import { DraggableResizableWindow } from '@/components/ui/DraggableResizableWindow';

export interface DemoDiceLogEntry {
  id: string;
  notation: string;
  total: number;
  createdAt: string; // ISO
  entries: { id: string; order: number; type: string; value: number; sides: number | null }[];
}

interface Props {
  logs: DemoDiceLogEntry[];
  onClose: () => void;
  onClear: () => void;
}

export function DemoDiceLogWindow({ logs, onClose, onClear }: Props) {
  return (
    <DraggableResizableWindow
      id="demo-dice-log"
      title="Dice Log"
      initialX={60}
      initialY={90}
      initialWidth={360}
      initialHeight={480}
      minWidth={320}
      minHeight={300}
      onClose={onClose}
      footer={<div className="flex w-full justify-between items-center text-[11px]">
        <span className="text-stone-400">{logs.length} rolls</span>
        <button
          onClick={onClear}
          disabled={!logs.length}
          className="px-2 py-1 rounded bg-stone-200 hover:bg-stone-300 text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs"
        >Clear</button>
      </div>}
    >
      <div className="flex flex-col gap-2 text-xs">
        {logs.length === 0 && <div className="text-stone-500 italic">No rolls yet.</div>}
        {logs.map(log => (
          <div key={log.id} className="border border-stone-200 rounded p-2 bg-white/80 shadow-sm">
            <div className="flex justify-between items-baseline">
              <span className="font-medium text-stone-700">{log.notation}</span>
              <span className="text-[10px] text-stone-400 ml-2">{new Date(log.createdAt).toLocaleTimeString()}</span>
            </div>
            <div className="mt-1 flex flex-wrap gap-2 items-center">
              <span className="text-stone-600">= <b>{log.total}</b></span>
              <span className="text-stone-400">[{log.entries.map(e => e.value).join(', ')}]</span>
            </div>
          </div>
        ))}
      </div>
    </DraggableResizableWindow>
  );
}

