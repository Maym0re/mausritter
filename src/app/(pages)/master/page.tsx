'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Campaign } from '@/types/character';
import { TimeTracker } from '@/components/TimeTracker';
import { GameTime, WeatherEntry } from '@/types/time';
import Link from 'next/link';

export default function MasterPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const campaignId = searchParams.get('campaign');

  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'time' | 'map' | 'players'>('overview');

  const fetchCampaign = useCallback(async () => {
    if (!campaignId) return;

    try {
      const response = await fetch(`/api/campaigns/${campaignId}`);
      if (response.ok) {
        const data = await response.json();
        setCampaign(data);
      } else if (response.status === 404) {
        router.push('/');
      }
    } catch (error) {
      console.error('Ошибка загрузки кампании:', error);
    } finally {
      setIsLoading(false);
    }
  }, [campaignId, router]);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/login');
      return;
    }

    if (!campaignId) {
      router.push('/');
      return;
    }

    fetchCampaign();
  }, [session, status, campaignId, router, fetchCampaign]);

  const updateCampaignTime = async (
    newTime: GameTime,
    season: string,
    weather?: WeatherEntry | null,
    event?: string | null
  ) => {
    if (!campaign) return;

    try {
      const response = await fetch(`/api/campaigns/${campaign.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentTime: newTime,
          currentSeason: season,
          currentWeather: weather,
          todaysEvent: event,
        }),
      });

      if (response.ok) {
        const updatedCampaign = await response.json();
        setCampaign(updatedCampaign);
      }
    } catch (error) {
      console.error('Ошибка обновления времени:', error);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🐭</div>
          <div className="text-lg text-stone-600">Загрузка кампании...</div>
        </div>
      </div>
    );
  }

  if (!session || !campaign) {
    return null;
  }

  // Проверяем, что пользователь - мастер этой кампании
  if (campaign.gm?.id !== session.user.id) {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Хедер */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-stone-600 hover:text-stone-800">
                ← Назад
              </Link>
              <h1 className="text-2xl font-bold text-stone-900">
                🎭 {campaign.name}
              </h1>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                Мастер
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-stone-600">
                Игроков: {campaign.players.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Навигация по вкладкам */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { key: 'overview' as const, label: 'Обзор', icon: '📊' },
              { key: 'time' as const, label: 'Время и погода', icon: '⏰' },
              { key: 'map' as const, label: 'Карта', icon: '🗺️' },
              { key: 'players' as const, label: 'Игроки', icon: '👥' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Основное содержимое */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-stone-900 mb-4">
                Информация о кампании
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">Основное</h3>
                  <div className="space-y-2 text-sm text-stone-600">
                    <div>Название: {campaign.name}</div>
                    {campaign.description && (
                      <div>Описание: {campaign.description}</div>
                    )}
                    <div>Создана: {new Date(campaign.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-stone-900 mb-2">Игровое состояние</h3>
                  <div className="space-y-2 text-sm text-stone-600">
                    <div>Сезон: {campaign.season}</div>
                    <div>День: {(campaign.currentTime as GameTime)?.days + 1 || 1}</div>
                    <div>Игроков: {campaign.players.length}</div>
                    <div>Персонажей: {campaign.characters?.length || 0}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-stone-900 mb-4">
                Последние события
              </h2>
            </div>
          </div>
        )}

        {activeTab === 'time' && (
          <div className="space-y-6">
            <TimeTracker
              characters={campaign.characters ?? []}
              onTimeUpdate={updateCampaignTime}
              initialTime={campaign.currentTime as GameTime}
              initialSeason={campaign.season}
              initialWeather={campaign.weather as WeatherEntry | null}
              initialEvent={campaign.todaysEvent}
            />
          </div>
        )}

        {activeTab === 'map' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              Редактор карты
            </h2>
            <p className="text-stone-600 mb-4">
              Здесь будет редактор гексагональной карты для вашей кампании.
            </p>
            <Link
              href={`/map?campaign=${campaign.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Открыть редактор карты
            </Link>
          </div>
        )}

        {activeTab === 'players' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-stone-900 mb-4">
                Игроки кампании
              </h2>

              <div className="space-y-4">
                {campaign.players.map((player) => (
                  <div key={player.id} className="flex justify-between items-center p-4 border border-stone-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-stone-900">
                        {player.user?.name || player.user?.email}
                      </h3>
                      <p className="text-sm text-stone-600">
                        {player.user?.email}
                      </p>
                      <p className="text-xs text-stone-500">
                        Присоединился: {new Date(player.joinedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-stone-50 rounded-lg">
                <h3 className="font-medium text-stone-900 mb-2">
                  Пригласить игрока
                </h3>
                <p className="text-sm text-stone-600 mb-3">
                  Поделитесь этой ссылкой с игроками для присоединения к кампании:
                </p>
                <div className="flex items-center space-x-2">
                  <code className="flex-1 bg-white px-3 py-2 border border-stone-300 rounded text-sm">
                    {window.location.origin}/player?campaign={campaign.id}
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`${window.location.origin}/player?campaign=${campaign.id}`);
                    }}
                    className="bg-stone-600 hover:bg-stone-700 text-white px-3 py-2 rounded text-sm"
                  >
                    Копировать
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
