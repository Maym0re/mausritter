'use client';
import React, { useState, useEffect } from 'react';
import { GameTimeManager, rollWeather, rollSeasonalEvent, getTimeOfDay, performRest, applyRestResults } from '@/lib/timeUtils';
import { MouseCharacter } from '@/types/character';
import { WeatherEntry, RestType } from '@/types/time';

interface TimeTrackerProps {
  characters?: MouseCharacter[];
  onCharacterUpdate?: (characterId: string, character: MouseCharacter) => void;
}

export function TimeTracker({ characters = [], onCharacterUpdate }: TimeTrackerProps) {
  const [timeManager] = useState(() => new GameTimeManager());
  const [currentTime, setCurrentTime] = useState(timeManager.getCurrentTime());
  const [currentWeather, setCurrentWeather] = useState<WeatherEntry | null>(null);
  const [todaysEvent, setTodaysEvent] = useState<string | null>(null);
  const [showRestModal, setShowRestModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

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
    setShowRestModal(false);
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
        <h2 className="text-3xl font-bold text-stone-900 mb-2">⏰ Time & Travel Tracker</h2>
        <p className="text-stone-700">Manage game time, weather, and character rest</p>
      </div>

      {/* Текущее время */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-stone-200 text-center">
          <h3 className="font-bold text-stone-900 mb-2">Current Time</h3>
          <p className="text-lg text-stone-800">{timeManager.getFormattedTime()}</p>
          <p className="text-sm text-stone-600">{timeOfDay}</p>
        </div>

        <div className="bg-white rounded-lg p-4 border border-stone-200 text-center">
          <h3 className="font-bold text-stone-900 mb-2">Season</h3>
          <p className="text-lg text-stone-800 capitalize">{season}</p>
          <p className="text-sm text-stone-600">Day {currentTime.days + 1}</p>
        </div>

        <div className="bg-white rounded-lg p-4 border border-stone-200 text-center">
          <h3 className="font-bold text-stone-900 mb-2">Weather</h3>
          {currentWeather ? (
            <>
              <p className={`text-lg ${currentWeather.isPoorCondition ? 'text-red-600' : 'text-green-600'}`}>
                {currentWeather.weather}
              </p>
              {currentWeather.isPoorCondition && (
                <p className="text-xs text-red-500">⚠️ Poor conditions</p>
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
              Roll Weather
            </button>
          )}
        </div>
      </div>

      {/* Добавление времени */}
      <div className="bg-white rounded-lg p-6 border border-stone-200 mb-6">
        <h3 className="font-bold text-stone-900 mb-4">Add Time</h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <h4 className="font-medium text-stone-700 mb-2">Rounds (Combat)</h4>
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
            <h4 className="font-medium text-stone-700 mb-2">Turns (Exploration)</h4>
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
            <h4 className="font-medium text-stone-700 mb-2">Watches (Travel)</h4>
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
                New Day
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Сезонное событие */}
      {todaysEvent && (
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-6">
          <h3 className="font-bold text-yellow-900 mb-2">📅 Today's Event</h3>
          <p className="text-yellow-800">{todaysEvent}</p>
          <button
            onClick={() => setTodaysEvent(null)}
            className="text-xs text-yellow-600 hover:text-yellow-800 mt-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Отдых персонажей */}
      {characters.length > 0 && (
        <div className="bg-white rounded-lg p-6 border border-stone-200">
          <h3 className="font-bold text-stone-900 mb-4">Character Rest</h3>

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
                    Conditions: {character.conditions.map(c => c.name).join(', ')}
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => handleRest(character.id, 'short')}
                    className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                  >
                    Short Rest
                  </button>
                  <button
                    onClick={() => handleRest(character.id, 'long')}
                    className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                  >
                    Long Rest
                  </button>
                  <button
                    onClick={() => handleRest(character.id, 'full')}
                    className="px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600"
                  >
                    Full Rest
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Справочная информация */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-2">Time Reference</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <strong>Round:</strong> Combat time (~1 minute)
          </div>
          <div>
            <strong>Turn:</strong> Exploration time (~10 minutes)
          </div>
          <div>
            <strong>Watch:</strong> Travel time (~6 hours)
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <strong>Short Rest:</strong> 1 Turn, d6+1 HP
          </div>
          <div>
            <strong>Long Rest:</strong> 1 Watch, all HP
          </div>
          <div>
            <strong>Full Rest:</strong> 1 Week, full recovery
          </div>
        </div>
      </div>
    </div>
  );
}
