'use client';
import React, { useEffect, useState } from 'react';
import { t } from '@/i18n';

interface CampaignModalProps {
  mode: 'create' | 'edit';
  open: boolean;
  initialName?: string;
  initialDescription?: string;
  saving?: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; description: string }) => Promise<void> | void;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({
  mode,
  open,
  initialName = '',
  initialDescription = '',
  saving = false,
  onClose,
  onSubmit
}) => {
  // Local state so we can reset on open
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);

  useEffect(() => {
    if (open) {
      setName(initialName);
      setDescription(initialDescription);
    }
  }, [open, initialName, initialDescription]);

  if (!open) return null;

  const title = mode === 'create' ? t('home.modal.createTitle') : t('campaign.editTitle');
  const submitLabel = mode === 'create' ? t('home.modal.submit') : t('campaign.editSave');

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-stone-900 mb-4">{title}</h3>
        <form
          onSubmit={async e => {
            e.preventDefault();
            if (!name.trim()) return;
            await onSubmit({ name: name.trim(), description });
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="campaignNameUnified" className="block text-sm font-medium text-gray-700">
              {t('home.modal.nameLabel')}
            </label>
            <input
              id="campaignNameUnified"
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
              placeholder={t('home.modal.namePlaceholder')}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="campaignDescUnified" className="block text-sm font-medium text-gray-700">
              {t('home.modal.descriptionLabel')}
            </label>
            <textarea
              id="campaignDescUnified"
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
              placeholder={t('home.modal.descriptionPlaceholder')}
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => { if (!saving) onClose(); }}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled={saving}
            >
              {t('home.modal.cancel')}
            </button>
            <button
              type="submit"
              disabled={saving}
              className={`flex-1 px-4 py-2 rounded-md text-white font-medium ${saving ? 'bg-stone-400 cursor-wait' : 'bg-stone-900 hover:bg-black'}`}
            >
              {saving ? (mode === 'create' ? t('map.manager.creating') : t('campaign.editSaving')) : submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

