'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { HexGridCanvas } from './components/HexGridCanvas';
import { MapManager } from './components/MapManager';
import { CharacterManagerWindow } from './components/CharacterManagerWindow';
import { DraggableResizableWindow } from '@/components/ui/DraggableResizableWindow';
import { TimeTracker } from '@/components/TimeTracker';

export default function MapPage() {
  const { data: session } = useSession();
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [userRole, setUserRole] = useState<'master' | 'player' | null>(null);
  const [showCharacters, setShowCharacters] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [isAddHexMode, setIsAddHexMode] = useState(false);

  useEffect(() => {
    if (session?.user?.id) {
      fetchCampaigns();
    }
  }, [session]);

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('/api/campaigns');
      if (response.ok) {
        const data = await response.json();
        setCampaigns(data);

        // Автоматически выбираем первую кампанию, если есть
        if (data.length > 0) {
          setSelectedCampaign(data[0].id);
          setUserRole(data[0].gmId === session?.user?.id ? 'master' : 'player');
        }
      }
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
    }
  };

  const handleCampaignSelect = (campaignId: string) => {
    setSelectedCampaign(campaignId);
    const campaign = campaigns.find(c => c.id === campaignId);
    if (campaign) {
      setUserRole(campaign.gmId === session?.user?.id ? 'master' : 'player');
    }
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Вход требуется</h2>
          <p className="text-gray-600">Пожалуйста, войдите в систему для доступа к картам.</p>
        </div>
      </div>
    );
  }

  if (campaigns.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Нет доступных кампаний</h2>
          <p className="text-gray-600">Создайте или присоединитесь к кампании для работы с картами.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Карта */}
      {selectedCampaign && userRole && (
        <HexGridCanvas
          mode={userRole}
          campaignId={selectedCampaign}
          isAddHexMode={isAddHexMode}
          onAddHexModeChange={setIsAddHexMode}
        />
      )}

      {/* Floating Windows */}
      {showCharacters && selectedCampaign && session?.user?.id && (
        <CharacterManagerWindow
          campaignId={selectedCampaign}
          currentUserId={session.user.id}
          onClose={() => setShowCharacters(false)}
        />
      )}
      {showTime && (
        <DraggableResizableWindow
          id="time-tracker"
          title="Тайм-трекер"
          initialX={200}
          initialY={140}
          initialWidth={640}
          initialHeight={620}
          onClose={() => setShowTime(false)}
        >
          <TimeTracker />
        </DraggableResizableWindow>
      )}

      {/* Bottom Toolbar */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4 bg-stone-900/90 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-3 z-[1100] border border-stone-700">
        <button onClick={()=>setShowCharacters(s=>!s)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${showCharacters? 'bg-purple-500 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>Персонажи</button>
        <button onClick={()=>setShowTime(s=>!s)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${showTime? 'bg-blue-500 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>Время</button>
        {userRole==='master' && <button onClick={()=>setIsAddHexMode(m=>!m)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${isAddHexMode? 'bg-amber-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{isAddHexMode? 'Finish Add':'Add Hex'}</button>}
        <div className="w-px h-6 bg-stone-700" />
        <button disabled className="text-xs px-3 py-1.5 rounded-full bg-stone-800 text-stone-500 cursor-default">+</button>
      </div>
    </div>
  );
}