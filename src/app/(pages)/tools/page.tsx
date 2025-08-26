'use client';
import React from 'react';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-stone-900">Инструменты</h1>
          <p className="text-stone-600 text-sm">Полноэкранные 3D кубы доступны на всех страницах (панель управления внизу справа).</p>
        </header>
        <section className="bg-white rounded-lg shadow p-4 md:p-6 space-y-3">
          <h2 className="text-xl font-semibold">3D Кубы</h2>
          <p className="text-sm text-stone-600">Используй панель «Кубы» в правом нижнем углу для бросков. Нажми D для быстрого d20, Esc — чтобы скрыть/показать панель.</p>
        </section>
      </div>
    </div>
  );
}
