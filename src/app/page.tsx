'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FullCampaign } from "@/types/character";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<FullCampaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCampaignName, setNewCampaignName] = useState('');
  const [newCampaignDescription, setNewCampaignDescription] = useState('');

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/login');
      return;
    }

    fetchCampaigns();
  }, [session, status, router]);

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('/api/campaigns');
      if (response.ok) {
        const data = await response.json();
        setCampaigns(data);
      }
    } catch (error) {
      console.error('Ошибка загрузки кампаний:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createCampaign = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newCampaignName,
          description: newCampaignDescription,
        }),
      });

      if (response.ok) {
        const newCampaign = await response.json();
        setCampaigns([...campaigns, newCampaign]);
        setShowCreateModal(false);
        setNewCampaignName('');
        setNewCampaignDescription('');
      }
    } catch (error) {
      console.error('Ошибка создания кампании:', error);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🐭</div>
          <div className="text-lg text-stone-600">Загрузка...</div>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Основное содержимое без локального хедера (используется глобальный AppHeader) */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-stone-900">Мои кампании</h2>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-stone-600 hover:bg-stone-700 text-white px-4 py-2 rounded-md font-medium"
            >
              Создать кампанию
            </button>
          </div>

          {campaigns.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏰</div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">
                У вас пока нет кампаний
              </h3>
              <p className="text-stone-600 mb-6">
                Создайте новую кампанию, чтобы начать приключения в мире Mausritter
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-stone-600 hover:bg-stone-700 text-white px-6 py-3 rounded-md font-medium"
              >
                Создать первую кампанию
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-stone-900">
                      {campaign.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.gm?.id === session.user?.id
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {campaign.gm?.id === session.user?.id ? 'Мастер' : 'Игрок'}
                    </span>
                  </div>

                  {campaign.description && (
                    <p className="text-stone-600 mb-4 text-sm">
                      {campaign.description}
                    </p>
                  )}

                  <div className="text-sm text-stone-500 mb-4">
                    <div>Игроков: {campaign.players?.length || 0}</div>
                    <div>Персонажей: {campaign._count?.characters || 0}</div>
                    <div>Сезон: {campaign.season}</div>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      href={`/campaign?campaign=${campaign.id}`}
                      className="flex-1 text-center bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Открыть
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Быстрые ссылки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link
            href="/tools"
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
          >
            <div className="text-4xl mb-3">⚒️</div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Инструменты</h3>
            <p className="text-stone-600 text-sm">
              Генераторы персонажей, инвентарь и другие полезные инструменты
            </p>
          </Link>

          <Link
            href="/campaign"
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
          >
            <div className="text-4xl mb-3">🗺️</div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Кампания / Карта</h3>
            <p className="text-stone-600 text-sm">
              Откройте выбранную кампанию и её карту
            </p>
          </Link>

          <a
            href="https://mausritter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Правила</h3>
            <p className="text-stone-600 text-sm">
              Официальные правила Mausritter и дополнительные материалы
            </p>
          </a>
        </div>
      </main>

      {/* Модальное окно создания кампании */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">
              Создать новую кампанию
            </h3>

            <form onSubmit={createCampaign} className="space-y-4">
              <div>
                <label htmlFor="campaignName" className="block text-sm font-medium text-gray-700">
                  Название кампании
                </label>
                <input
                  id="campaignName"
                  type="text"
                  required
                  value={newCampaignName}
                  onChange={(e) => setNewCampaignName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
                  placeholder="Например: Приключения в Мышином королевстве"
                />
              </div>

              <div>
                <label htmlFor="campaignDescription" className="block text-sm font-medium text-gray-700">
                  Описание (необязательно)
                </label>
                <textarea
                  id="campaignDescription"
                  value={newCampaignDescription}
                  onChange={(e) => setNewCampaignDescription(e.target.value)}
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
                  placeholder="Краткое описание вашей кампании..."
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setNewCampaignName('');
                    setNewCampaignDescription('');
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-stone-600 hover:bg-stone-700 text-white rounded-md"
                >
                  Создать
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
