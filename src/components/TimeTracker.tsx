'use client';
import React, { useState, useEffect } from 'react';
import { GameTimeManager, rollWeather, rollSeasonalEvent, getTimeOfDay, performRest, applyRestResults } from '@/lib/timeUtils';
import { GameTime, GameTimeCore, RestType, WeatherEntryLight } from "@/types/time";
import { FullCharacter } from "@/types/character";
import { t } from '@/i18n';

interface TimeTrackerProps {
  characters?: FullCharacter[];
  onCharacterUpdate?: (characterId: string, character: FullCharacter) => void;
  onTimeUpdate?: (newTime: GameTimeCore, season: string, weather?: WeatherEntryLight | null, event?: string | null) => void;
  initialTime?: GameTime | null;
  initialSeason?: string;
  initialWeather?: WeatherEntryLight | null;
  initialEvent?: string | null;
}

export function TimeTracker({
  characters = [],
  onCharacterUpdate,
  onTimeUpdate,
  initialTime,
  initialSeason = 'spring',
  initialWeather,
  initialEvent
}: TimeTrackerProps) {
  const [timeManager] = useState(() => {
    const tm = new GameTimeManager();
    if (initialTime) {
      // Используем новый метод setTime
      tm.setTime(initialTime);
    }
    return tm;
  });
  const [currentTime, setCurrentTime] = useState(initialTime || timeManager.getCurrentTime());
  const [currentWeather, setCurrentWeather] = useState<WeatherEntryLight | null>(initialWeather || null);
  const [todaysEvent, setTodaysEvent] = useState<string | null>(initialEvent || null);

  // Обновляем время каждую секунду для отображения
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(timeManager.getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeManager]);

  // Генерируем погоду при новом дне
  useEffect(() => {
    if (currentTime.days > 0 && !currentWeather) {
      const season = timeManager.getCurrentSeason();
      const weather = rollWeather(season);
      setCurrentWeather(weather);

      // Генерируем сезонное событие с шансом 1 из 6
      if (Math.random() < 1/6) {
        const event = rollSeasonalEvent(season);
        setTodaysEvent(event);
      }
    }
  }, [currentTime.days, timeManager, currentWeather]);

  const addTime = (type: 'rounds' | 'turns' | 'watches', amount: number) => {
    switch (type) {
      case 'rounds':
        timeManager.addRounds(amount);
        break;
      case 'turns':
        timeManager.addTurns(amount);
        break;
      case 'watches':
        timeManager.addWatches(amount);
        break;
    }
    setCurrentTime(timeManager.getCurrentTime());

    // При новом дне сбрасываем погоду
    if (type === 'watches' && amount >= 4) {
      setCurrentWeather(null);
      setTodaysEvent(null);
    }

    // Вызываем коллбэк обновления времени
    if (onTimeUpdate) {
      onTimeUpdate(timeManager.getCurrentTime(), timeManager.getCurrentSeason(), currentWeather, todaysEvent);
    }
  };

  const handleRest = (characterId: string, restType: RestType) => {
    const character = characters.find(c => c.id === characterId);
    if (!character || !onCharacterUpdate) return;

    const restResult = performRest(character, restType);
    const updatedCharacter = applyRestResults(character, restResult);

    onCharacterUpdate(characterId, updatedCharacter);

    // Добавляем время отдыха
    switch (restType) {
      case 'short':
        timeManager.addTurns(1);
        break;
      case 'long':
        timeManager.addWatches(1);
        break;
      case 'full':
        timeManager.addWatches(28); // Неделя = 28 периодов
        break;
    }

    setCurrentTime(timeManager.getCurrentTime());
  };

  const newDay = () => {
    addTime('watches', 4);
    setCurrentWeather(null);
    setTodaysEvent(null);
  };

  const season = timeManager.getCurrentSeason();
  const timeOfDay = getTimeOfDay(currentTime.watches);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-stone-50 rounded-lg border-2 border-stone-200">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-stone-900 mb-2">⏰ {t('timeTracker.title')}</h2>
        <p className="text-stone-700">{t('timeTracker.subtitle')}</p>
      </div>

      {/* Текущее время */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-stone-200 text-center">
          <h3 className="font-bold text-stone-900 mb-2">{t('timeTracker.currentTime')}</h3>
          <p className="text-lg text-stone-800">{timeManager.getFormattedTime()}</p>
          <p className="text-sm text-stone-600">{timeOfDay}</p>
        </div>

        <div className="bg-white rounded-lg p-4 border border-stone-200 text-center">
          <h3 className="font-bold text-stone-900 mb-2">{t('timeTracker.season')}</h3>
          <p className="text-lg text-stone-800 capitalize">{season}</p>
          <p className="text-sm text-stone-600">{t('timeTracker.day', { day: currentTime.days + 1 })}</p>
        </div>

        <div className="bg-white rounded-lg p-4 border border-stone-200 text-center">
          <h3 className="font-bold text-stone-900 mb-2">{t('timeTracker.weather')}</h3>
          {currentWeather ? (
            <>
              <p className={`text-lg ${currentWeather.isPoorCondition ? 'text-red-600' : 'text-green-600'}`}>\n                {currentWeather.weather}\n              </p>
              {currentWeather.isPoorCondition && (
                <p className="text-xs text-red-500">⚠️ {t('timeTracker.poorConditions')}</p>
              )}
            </>
          ) : (
            <button
              onClick={() => {
                const weather = rollWeather(season);
                setCurrentWeather(weather);
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            >
              {t('timeTracker.rollWeather')}
            </button>
          )}
        </div>
      </div>

      {/* Добавление времени */}
      <div className="bg-white rounded-lg p-6 border border-stone-200 mb-6">
        <h3 className="font-bold text-stone-900 mb-4">{t('timeTracker.addTime')}</h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <h4 className="font-medium text-stone-700 mb-2">{t('timeTracker.rounds')}</h4>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => addTime('rounds', 1)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                +1
              </button>
              <button
                onClick={() => addTime('rounds', 5)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                +5
              </button>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-medium text-stone-700 mb-2">{t('timeTracker.turns')}</h4>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => addTime('turns', 1)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                +1
              </button>
              <button
                onClick={() => addTime('turns', 6)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                +6
              </button>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-medium text-stone-700 mb-2">{t('timeTracker.watches')}</h4>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => addTime('watches', 1)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                +1
              </button>
              <button
                onClick={newDay}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {t('timeTracker.newDay')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Сезонное событие */}
      {todaysEvent && (
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-6">
          <h3 className="font-bold text-yellow-900 mb-2">📅 {t('timeTracker.todayEvent')}</h3>
          <p className="text-yellow-800">{todaysEvent}</p>
          <button
            onClick={() => setTodaysEvent(null)}
            className="text-xs text-yellow-600 hover:text-yellow-800 mt-2"
          >
            {t('timeTracker.dismiss')}
          </button>
        </div>
      )}

      {/* Отдых персонажей */}
      {characters.length > 0 && (
        <div className="bg-white rounded-lg p-6 border border-stone-200">
          <h3 className="font-bold text-stone-900 mb-4">{t('timeTracker.characterRest')}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {characters.map(character => (
              <div key={character.id} className="p-3 border border-gray-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{character.name}</span>
                  <span className="text-sm text-gray-600">
                    {character.hp}/{character.maxHp} HP
                  </span>
                </div>

                {character.conditions.length > 0 && (
                  <div className="text-xs text-red-600 mb-2">
                    {t('timeTracker.conditions')} {character.conditions.map(c => c.name).join(', ')}
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => handleRest(character.id, 'short')}
                    className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                  >
                    {t('timeTracker.shortRest')}
                  </button>
                  <button
                    onClick={() => handleRest(character.id, 'long')}
                    className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                  >
                    {t('timeTracker.longRest')}
                  </button>
                  <button
                    onClick={() => handleRest(character.id, 'full')}
                    className="px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600"
                  >
                    {t('timeTracker.fullRest')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Справочная информация */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-2">{t('timeTracker.reference')}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <strong>{t('timeTracker.roundLabel')}</strong> {t('timeTracker.roundDesc')}
          </div>
          <div>
            <strong>{t('timeTracker.turnLabel')}</strong> {t('timeTracker.turnDesc')}
          </div>
          <div>
            <strong>{t('timeTracker.watchLabel')}</strong> {t('timeTracker.watchDesc')}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <strong>{t('timeTracker.shortRestLabel')}</strong> {t('timeTracker.shortRestDesc')}
          </div>
          <div>
            <strong>{t('timeTracker.longRestLabel')}</strong> {t('timeTracker.longRestDesc')}
          </div>
          <div>
            <strong>{t('timeTracker.fullRestLabel')}</strong> {t('timeTracker.fullRestDesc')}
          </div>
        </div>
      </div>
    </div>
  );
}
