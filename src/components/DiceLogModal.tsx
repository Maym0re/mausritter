"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { t } from '@/i18n';
import { DraggableResizableWindow } from './ui/DraggableResizableWindow';

interface DiceRollLogItem {
  id: string;
  campaignId: string;
  notation: string;
  total: number;
  createdAt: string;
  user: { id: string; name: string | null; email: string | null };
  entries: { id: string; order: number; type: string; value: number; sides: number | null }[];
}

export default function DiceLogModal({ campaignId, onClose }: { campaignId: string; onClose: () => void }) {
  const [logs, setLogs] = useState<DiceRollLogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const resp = await fetch(`/api/campaigns/${campaignId}/dice-rolls`);
      if (!resp.ok) throw new Error('load');
      const data: DiceRollLogItem[] = await resp.json();
      setLogs(data);
    } catch (e) {
      setError(t('dice.log.loadError'));
    } finally {
      setLoading(false);
    }
  }, [campaignId]);

  useEffect(() => { load(); }, [load]);

  // Live update via custom event
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as DiceRollLogItem | undefined;
      if (detail && detail.campaignId === campaignId) {
        setLogs(prev => [detail, ...prev.filter(l => l.id !== detail.id)].slice(0,50));
      }
    };
    window.addEventListener('diceRollLogged', handler as EventListener);
    return () => window.removeEventListener('diceRollLogged', handler as EventListener);
  }, [campaignId]);

  return (
    <DraggableResizableWindow
      id="dice-log-window"
      title={t('dice.log.title')}
      initialX={80}
      initialY={80}
      initialWidth={360}
      initialHeight={480}
      minWidth={320}
      minHeight={320}
      onClose={onClose}
      footer={<div className="flex w-full justify-between items-center">
        <button onClick={load} className="px-2 py-1 text-xs rounded bg-stone-200 hover:bg-stone-300 text-stone-700" disabled={loading}>↻</button>
        <span className="text-[10px] text-stone-400">{logs.length} / 50</span>
      </div>}
    >
      <div className="flex flex-col gap-2">
        {loading && <div className="text-stone-500 text-xs">...</div>}
        {error && <div className="text-red-600 text-xs">{error}</div>}
        {!loading && !error && logs.length === 0 && (
          <div className="text-stone-500 italic text-xs">{t('dice.log.empty')}</div>
        )}
        {!loading && !error && logs.map(log => {
          return (
            <div key={log.id} className="border border-stone-200 rounded p-2 bg-white/70">
              <div className="flex justify-between">
                <span className="font-medium text-stone-700 truncate max-w-[140px]" title={log.user?.name || log.user?.email || ''}>{log.user?.name || log.user?.email || '—'}</span>
                <span className="text-stone-400 ml-2 shrink-0">{new Date(log.createdAt).toLocaleTimeString()}</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-2 items-center">
                <span className="px-1.5 py-0.5 rounded bg-stone-800 text-white text-[10px]">{log.notation}</span>
                <span className="text-stone-600">= <b>{log.total}</b></span>
                <span className="text-stone-400">[{log.entries.map(e=>e.value).join(', ')}]</span>
              </div>
            </div>
          );
        })}
      </div>
    </DraggableResizableWindow>
  );
}
