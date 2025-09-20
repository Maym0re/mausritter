'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { FullCharacter } from '@/types/character';
import { DraggableResizableWindow } from '@/components/ui/DraggableResizableWindow';
import { t } from '@/i18n';

interface CharacterManagerWindowProps {
  campaignId: string;
  currentUserId: string;
  onClose: () => void;
}

interface EditState {
  [id: string]: Partial<FullCharacter>;
}

export function CharacterManagerWindow({ campaignId, currentUserId, onClose }: CharacterManagerWindowProps) {
  const [characters, setCharacters] = useState<FullCharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editState, setEditState] = useState<EditState>({});
  const [saving, setSaving] = useState<{[id:string]: boolean}>({});
  const [expanded, setExpanded] = useState<{[id:string]: boolean}>({});

  const load = useCallback(async () => {
    setLoading(true); setError(null);
    try {
      const r = await fetch(`/api/characters?campaignId=${campaignId}`);
      if (!r.ok) {
        setError(t('characters.loadError'));
        return;
      }
      const data: FullCharacter[] = await r.json();
      data.sort((a, b) => (a.playerId === currentUserId ? -1 : 1) - (b.playerId === currentUserId ? -1 : 1));
      setCharacters(data);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg || t('common.error'));
    } finally {
      setLoading(false);
    }
  }, [campaignId, currentUserId]);

  useEffect(() => { load(); }, [load]);

  const startEdit = (ch: FullCharacter) => {
    setExpanded(p => ({...p, [ch.id]: !p[ch.id]}));
    setEditState(p => ({...p, [ch.id]: p[ch.id] || {...ch}}));
  };

  // Generic typed field updater
  const updateField = <K extends keyof FullCharacter>(id: string, field: K, value: FullCharacter[K]) => {
    setEditState(p => ({...p, [id]: {...p[id], [field]: value}}));
  };

  // Helper for numeric fields to parse safely
  const updateNumberField = <K extends keyof FullCharacter>(id: string, field: K, raw: string, fallback: number) => {
    const parsed = parseInt(raw, 10);
    updateField(id, field, (isNaN(parsed) ? fallback : parsed) as FullCharacter[K]);
  };

  const saveCharacter = async (id: string) => {
    const data = editState[id];
    if (!data) return;
    setSaving(s => ({...s, [id]: true}));
    try {
      const r = await fetch(`/api/characters/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ characterData: data })
      });
      if (!r.ok) {
        alert(t('characters.saveFailed'));
        return;
      }
      const upd: FullCharacter = await r.json();
      setCharacters(list => list.map(c => c.id === id ? upd : c));
      setEditState(p => ({...p, [id]: upd}));
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert(msg || t('characters.saveFailed'));
    } finally {
      setSaving(s => ({...s, [id]: false}));
    }
  };

  return (
    <DraggableResizableWindow id="characters" title={t('characters.title')} initialX={150} initialY={80} initialWidth={600} initialHeight={560} onClose={onClose}>
      {loading && <div className="text-sm text-stone-500">{t('characters.loading')}</div>}
      {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
      <div className="space-y-2">
        {characters.map(ch => {
          const es = editState[ch.id];
          const isExpanded = expanded[ch.id];
          return (
            <div key={ch.id} className="border border-stone-200 rounded-md">
              <div className="flex items-center justify-between px-3 py-2 bg-stone-100">
                <div className="flex items-center gap-3">
                  <button onClick={() => startEdit(ch)} className="text-xs bg-stone-300 hover:bg-stone-400 px-2 py-1 rounded">
                    {isExpanded ? '-' : '+'}
                  </button>
                  <span className="font-medium text-sm">{ch.name}</span>
                  <span className="text-xs text-stone-500">Lvl {ch.level}</span>
                  <span className="text-xs text-stone-500">{ch.hp}/{ch.maxHp} HP</span>
                  <span className="text-xs text-stone-500">{ch.player?.name || ch.player?.email}</span>
                </div>
                {isExpanded && <button disabled={saving[ch.id]} onClick={() => saveCharacter(ch.id)} className="text-xs bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-700 disabled:bg-stone-400">{saving[ch.id] ? '...' : t('characters.save')}</button>}
              </div>
              {isExpanded && es && (
                <div className="p-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="block mb-1">{t('characters.name')}</label>
                    <input value={es.name ?? ''} onChange={e=>updateField(ch.id,'name',e.target.value)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1">{t('characters.level')}</label>
                    <input type="number" value={es.level ?? ''} onChange={e=>updateNumberField(ch.id,'level',e.target.value,1)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1">STR</label>
                    <input type="number" value={es.str ?? ''} onChange={e=>updateNumberField(ch.id,'str',e.target.value,1)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1">DEX</label>
                    <input type="number" value={es.dex ?? ''} onChange={e=>updateNumberField(ch.id,'dex',e.target.value,1)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1">WIL</label>
                    <input type="number" value={es.wil ?? ''} onChange={e=>updateNumberField(ch.id,'wil',e.target.value,1)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1">HP</label>
                    <input type="number" value={es.hp ?? ''} onChange={e=>updateNumberField(ch.id,'hp',e.target.value,0)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1">Max HP</label>
                    <input type="number" value={es.maxHp ?? ''} onChange={e=>updateNumberField(ch.id,'maxHp',e.target.value,1)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1">XP</label>
                    <input type="number" value={es.xp ?? ''} onChange={e=>updateNumberField(ch.id,'xp',e.target.value,0)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1">Pips</label>
                    <input type="number" value={es.pips ?? ''} onChange={e=>updateNumberField(ch.id,'pips',e.target.value,0)} className="w-full border rounded px-2 py-1" />
                  </div>
                  <div className="col-span-2 md:col-span-4">
                    <label className="block mb-1">{t('characters.notes')}</label>
                    <textarea value={es.notes ?? ''} onChange={e=>updateField(ch.id,'notes',e.target.value)} className="w-full border rounded px-2 py-1 h-20" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {!loading && characters.length === 0 && <div className="text-xs text-stone-500">{t('characters.none')}</div>}
      </div>
    </DraggableResizableWindow>
  );
}
