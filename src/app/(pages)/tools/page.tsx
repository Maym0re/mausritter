'use client';
import React from 'react';
import { t } from '@/i18n';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-stone-900">{t('tools.title')}</h1>
          <p className="text-stone-600 text-sm">{t('tools.dicePanelInfo')}</p>
        </header>
        <section className="bg-white rounded-lg shadow p-4 md:p-6 space-y-3">
          <h2 className="text-xl font-semibold">{t('tools.diceSectionTitle')}</h2>
          <p className="text-sm text-stone-600">{t('tools.diceUsage')}</p>
        </section>
      </div>
    </div>
  );
}
