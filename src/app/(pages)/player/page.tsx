'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { CharacterGenerator } from '@/components/CharacterGenerator';
import { InventoryManager } from '@/components/InventoryManager';
import Link from 'next/link';
import { CampaignPlayer, Character } from "@prisma/client";
import { FullCampaign, FullCharacter } from "@/types/character";

export default function PlayerPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const campaignId = searchParams.get('campaign');

  const [campaign, setCampaign] = useState<FullCampaign | null>(null);
  const [characters, setCharacters] = useState<FullCharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<FullCharacter | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'characters' | 'map'>('overview');
  const [showCharacterGenerator, setShowCharacterGenerator] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

  const fetchCampaign = useCallback(async () => {
    if (!campaignId) return;

    try {
      const response = await fetch(`/api/campaigns/${campaignId}`);
      if (response.ok) {
        const data = await response.json();
        setCampaign(data);

        // Проверяем, является ли пользователь участником кампании
        const isParticipant = data.players.some((p: CampaignPlayer) => p.userId === session?.user?.id);
        setHasJoined(isParticipant);
      } else if (response.status === 404) {
        router.push('/');
      }
    } catch (error) {
      console.error('Ошибка загрузки кампании:', error);
    } finally {
      setIsLoading(false);
    }
  }, [campaignId, router, session?.user?.id]);

  const fetchCharacters = useCallback(async () => {
    if (!campaignId) return;

    try {
      const response = await fetch(`/api/characters?campaignId=${campaignId}`);
      if (response.ok) {
        const data = await response.json();
        setCharacters(data);
        if (data.length > 0) {
          setSelectedCharacter(data[0]);
        }
      }
    } catch (error) {
      console.error('Ошибка загрузки персонажей:', error);
    }
  }, [campaignId]);

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
    fetchCharacters();
  }, [session, status, campaignId, router, fetchCampaign, fetchCharacters]);

  const joinCampaign = async () => {
    if (!campaign) return;

    try {
      const response = await fetch(`/api/campaigns/${campaign.id}/join`, {
        method: 'POST',
      });

      if (response.ok) {
        setHasJoined(true);
        await fetchCampaign();
      }
    } catch (error) {
      console.error('Ошибка присоединения к кампании:', error);
    }
  };

  const createCharacter = async (characterData: FullCharacter) => {
    if (!campaign) return;

    try {
      const response = await fetch('/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campaignId: campaign.id,
          characterData,
        }),
      });

      if (response.ok) {
        const newCharacter = await response.json();
        setCharacters([...characters, newCharacter]);
        setSelectedCharacter(newCharacter);
        setShowCharacterGenerator(false);
        setActiveTab('characters');
      }
    } catch (error) {
      console.error('Ошибка создания персонажа:', error);
    }
  };

  const updateCharacter = async (characterId: string, characterData: Character) => {
    try {
      const response = await fetch(`/api/characters/${characterId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ characterData }),
      });

      if (response.ok) {
        const updatedCharacter = await response.json();
        const updatedCharacters = characters.map(c =>
          c.id === updatedCharacter.id ? updatedCharacter : c
        );
        setCharacters(updatedCharacters);
        setSelectedCharacter(updatedCharacter);
      }
    } catch (error) {
      console.error('Ошибка обновления персонажа:', error);
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

  // Если пользователь не присоединился к кампании
  if (!hasJoined) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">
            🏰 {campaign.name}
          </h1>

          {campaign.description && (
            <p className="text-stone-600 mb-6">
              {campaign.description}
            </p>
          )}

          <div className="mb-6">
            <p className="text-stone-700 mb-2">
              Мастер: {campaign.gm?.name || campaign.gm?.email}
            </p>
            <p className="text-stone-600 text-sm">
              Игроков: {campaign.players.length}
            </p>
          </div>

          <button
            onClick={joinCampaign}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Присоединиться к кампании
          </button>

          <div className="mt-4">
            <Link
              href="/"
              className="text-stone-600 hover:text-stone-800 text-sm"
            >
              ← Вернуться к кампаниям
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Хедер */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-stone-600 hover:text-stone-800">
                ← Назад
              </Link>
              <h1 className="text-2xl font-bold text-stone-900">
                🎮 {campaign.name}
              </h1>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                Игрок
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-stone-600">
                Сезон: {campaign.season}
              </span>
              {selectedCharacter && (
                <span className="text-stone-600">
                  {selectedCharacter.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Навигация по вкладкам */}
      <nav className="bg-white border-b border-stone-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { key: 'overview' as const, label: 'Обзор', icon: '📊' },
              { key: 'characters' as const, label: 'Персонажи', icon: '🐭' },
              { key: 'map' as const, label: 'Карта', icon: '🗺️' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
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
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                    <div>Мастер: {campaign.gm?.name || campaign.gm?.email}</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-stone-900 mb-2">Игровое состояние</h3>
                  <div className="space-y-2 text-sm text-stone-600">
                    <div>Сезон: {campaign.season}</div>
                    <div>Игроков: {campaign.players.length}</div>
                    <div>Ваших персонажей: {characters.length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'characters' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-stone-900">Мои персонажи</h2>
              <button
                onClick={() => setShowCharacterGenerator(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
              >
                Создать персонажа
              </button>
            </div>

            {characters.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🐭</div>
                <h3 className="text-xl font-medium text-stone-900 mb-2">
                  У вас пока нет персонажей
                </h3>
                <p className="text-stone-600 mb-6">
                  Создайте персонажа, чтобы начать приключения
                </p>
                <button
                  onClick={() => setShowCharacterGenerator(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
                >
                  Создать первого персонажа
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Список персонажей */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-stone-900 mb-4">Персонажи</h3>
                  <div className="space-y-2">
                    {characters.map((character) => (
                      <button
                        key={character.id}
                        onClick={() => setSelectedCharacter(character)}
                        className={`w-full text-left p-3 rounded-md border ${
                          selectedCharacter?.id === character.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="font-medium text-stone-900">
                          {character.name}
                        </div>
                        <div className="text-sm text-stone-600">
                          {character.background.name}
                        </div>
                        <div className="text-xs text-stone-500">
                          HP: {character.hp}/{character.maxHp}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Детали выбранного персонажа */}
                {selectedCharacter && (
                  <div className="lg:col-span-2">
                    <InventoryManager
                      characters={[selectedCharacter]}
                      onCharacterUpdate={(characterId, updatedCharacter) => updateCharacter(characterId, updatedCharacter)}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'map' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              Карта мира
            </h2>
            <p className="text-stone-600 mb-4">
              Здесь будет отображаться карта кампании с открытыми для вас областями.
            </p>
            <div className="bg-stone-100 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-stone-500">Карта в разработке</p>
            </div>
          </div>
        )}
      </main>

      {/* Модальное окно генератора персонажей */}
      {showCharacterGenerator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-stone-900">
                  Создать нового персонажа
                </h3>
                <button
                  onClick={() => setShowCharacterGenerator(false)}
                  className="text-stone-400 hover:text-stone-600"
                >
                  ✕
                </button>
              </div>

              <CharacterGenerator
                onCancel={() => setShowCharacterGenerator(false)}
                onSave={createCharacter}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}