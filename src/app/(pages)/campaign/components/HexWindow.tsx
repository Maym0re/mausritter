'use client';
import React, { useEffect, useState } from 'react';
import { DraggableResizableWindow } from '@/components/ui/DraggableResizableWindow';
import { HexData, HEX_TYPES, COUNTRYSIDE_LANDMARKS, FOREST_LANDMARKS, RIVER_LANDMARKS, HUMAN_TOWN_LANDMARKS, LANDMARK_DETAILS } from '@/types/map';
import { generateSettlement } from '@/lib/mapUtils';
import { t } from '@/i18n';

interface HexWindowProps {
  mode: 'master' | 'player';
  hex: HexData;
  onSave: (data: Partial<HexData>) => void;
  onDelete?: () => void;
  onClose: () => void;
}

interface FormState {
  customName: string;
  hexTypeId: string;
  landmarkId: string;
  landmarkDetailId: string;
  hasSettlement: boolean;
  settlementName: string;
  settlementSize: 'farm' | 'crossroads' | 'hamlet' | 'village' | 'town' | 'city';
  notes: string;
  masterNotes: string;
  isRevealed: boolean;
}

function getLandmarksForType(typeId: string) {
  switch (typeId) {
    case 'countryside': return COUNTRYSIDE_LANDMARKS;
    case 'forest': return FOREST_LANDMARKS;
    case 'river': return RIVER_LANDMARKS;
    case 'human_town': return HUMAN_TOWN_LANDMARKS;
    default: return [];
  }
}

export function HexWindow({ mode, hex, onSave, onDelete, onClose }: HexWindowProps) {
  const isGM = mode === 'master';
  const [form, setForm] = useState<FormState>(() => ({
    customName: hex.customName || '',
    hexTypeId: hex.hexType.id,
    landmarkId: hex.landmark?.id || '',
    landmarkDetailId: hex.landmarkDetail?.id || '',
    hasSettlement: !!hex.settlement,
    settlementName: hex.settlement?.name || '',
    settlementSize: hex.settlement?.size || 'hamlet',
    notes: hex.notes || '',
    masterNotes: hex.masterNotes || '',
    isRevealed: hex.isRevealed,
  }));

  useEffect(() => {
    setForm({
      customName: hex.customName || '',
      hexTypeId: hex.hexType.id,
      landmarkId: hex.landmark?.id || '',
      landmarkDetailId: hex.landmarkDetail?.id || '',
      hasSettlement: !!hex.settlement,
      settlementName: hex.settlement?.name || '',
      settlementSize: hex.settlement?.size || 'hamlet',
      notes: hex.notes || '',
      masterNotes: hex.masterNotes || '',
      isRevealed: hex.isRevealed,
    });
  }, [hex]);

  const landmarks = getLandmarksForType(form.hexTypeId);

  const handleChange = (field: keyof FormState, value: unknown) => {
    setForm(f => ({ ...f, [field]: value }));
  };

  const handleGenerateSettlement = () => {
    const s = generateSettlement();
    setForm(f => ({ ...f, hasSettlement: true, settlementName: s.name, settlementSize: s.size }));
  };

  const handleSave = () => {
    if (!isGM) {
      onSave({ notes: form.notes });
      return;
    }
    const hexType = HEX_TYPES.find(t => t.id === form.hexTypeId)!;
    const landmark = landmarks.find(l => l.id === form.landmarkId);
    const landmarkDetail = LANDMARK_DETAILS.find(d => d.id === form.landmarkDetailId);
    const settlement = form.hasSettlement ? {
      ...(hex.settlement || generateSettlement()),
      name: form.settlementName,
      size: form.settlementSize,
    } : undefined;
    onSave({
      customName: form.customName || undefined,
      hexType,
      landmark,
      landmarkDetail,
      settlement,
      notes: form.notes,
      masterNotes: form.masterNotes,
      isRevealed: form.isRevealed,
    });
  };

  return (
    <DraggableResizableWindow
      id={`hex-${hex.q}-${hex.r}`}
      initialX={80}
      initialY={100}
      initialWidth={480}
      initialHeight={620}
      onClose={onClose}
      footer={<div className="flex gap-2 justify-end">
        {onDelete && <button onClick={() => { if (confirm(t('hex.deleteConfirm'))) onDelete(); }} className="px-3 py-1.5 text-xs bg-black text-white rounded hover:bg-gray-700">{t('hex.delete')}</button>}
        <button onClick={handleSave} className="px-3 py-1.5 text-xs bg-amber-600 text-white rounded hover:bg-amber-700">{t('hex.save')}</button>
      </div>}
    >
      <div className="space-y-4 text-xs">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block mb-1 font-medium">{t('hex.name')}</label>
            <input value={form.customName} onChange={e=>handleChange('customName', e.target.value)} className="w-full border rounded px-2 py-1 disabled:bg-gray-100" readOnly={!isGM} />
          </div>
          <div>
            <label className="block mb-1 font-medium">{t('hex.type')}</label>
            <select value={form.hexTypeId} onChange={e=>handleChange('hexTypeId', e.target.value)} className="w-full border rounded px-2 py-1 disabled:bg-gray-100" disabled={!isGM}>
              {HEX_TYPES.map(ti=> <option key={ti.id} value={ti.id}>{ti.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">{t('hex.landmark')}</label>
            <select value={form.landmarkId} onChange={e=>handleChange('landmarkId', e.target.value)} className="w-full border rounded px-2 py-1 disabled:bg-gray-100" disabled={!isGM}>
              <option value="">{t('hex.none')}</option>
              {landmarks.map(l=> <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">{t('hex.landmarkDetail')}</label>
            <select value={form.landmarkDetailId} onChange={e=>handleChange('landmarkDetailId', e.target.value)} className="w-full border rounded px-2 py-1 disabled:bg-gray-100" disabled={!isGM}>
              <option value="">{t('hex.none')}</option>
              {LANDMARK_DETAILS.map(d=> <option key={d.id} value={d.id}>{d.description.substring(0,45)}...</option>)}
            </select>
          </div>
          <div className="col-span-2 flex items-center gap-3">
            <label className="flex items-center gap-1 opacity-{!isGM?50:100}"><input type="checkbox" checked={form.isRevealed} onChange={e=>handleChange('isRevealed', e.target.checked)} disabled={!isGM} /> <span>{t('hex.revealed')}</span></label>
            <label className="flex items-center gap-1"><input type="checkbox" checked={form.hasSettlement} onChange={e=>handleChange('hasSettlement', e.target.checked)} disabled={!isGM} /> <span>{t('hex.settlement')}</span></label>
            {form.hasSettlement && <button type="button" disabled={!isGM} onClick={handleGenerateSettlement} className="ml-auto px-2 py-1 bg-blue-500 disabled:bg-blue-300 text-white rounded hover:bg-blue-600">🎲</button>}
          </div>
          {form.hasSettlement && (
            <>
              <div>
                <label className="block mb-1 font-medium">{t('hex.settlementName')}</label>
                <input value={form.settlementName} onChange={e=>handleChange('settlementName', e.target.value)} className="w-full border rounded px-2 py-1 disabled:bg-gray-100" readOnly={!isGM} />
              </div>
              <div>
                <label className="block mb-1 font-medium">{t('hex.settlementSize')}</label>
                <select value={form.settlementSize} onChange={e=>handleChange('settlementSize', e.target.value)} className="w-full border rounded px-2 py-1 disabled:bg-gray-100" disabled={!isGM}>
                  <option value="farm">Farm</option>
                  <option value="crossroads">Crossroads</option>
                  <option value="hamlet">Hamlet</option>
                  <option value="village">Village</option>
                  <option value="town">Town</option>
                  <option value="city">City</option>
                </select>
              </div>
            </>
          )}
          <div className="col-span-2">
            <label className="block mb-1 font-medium">{t('hex.notes')}</label>
            <textarea value={form.notes} onChange={e=>handleChange('notes', e.target.value)} className="w-full border rounded px-2 py-1 h-20" />
          </div>
          {isGM && (
            <div className="col-span-2">
              <label className="block mb-1 font-medium">{t('hex.gmNotes')}</label>
              <textarea value={form.masterNotes} onChange={e=>handleChange('masterNotes', e.target.value)} className="w-full border rounded px-2 py-1 h-24" />
            </div>
          )}
        </div>
      </div>
    </DraggableResizableWindow>
  );
}
