'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { HexGridCanvas } from './components/HexGridCanvas';
import { MapManager } from './components/MapManager';

export default function MapPage() {
  const { data: session } = useSession();
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [userRole, setUserRole] = useState<'master' | 'player' | null>(null);

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
      {/* Выбор кампании */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Кампания:</label>
            <select
              value={selectedCampaign || ''}
              onChange={(e) => handleCampaignSelect(e.target.value)}
              className="block w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            >
              {campaigns.map((campaign) => (
                <option key={campaign.id} value={campaign.id}>
                  {campaign.name} ({campaign.gmId === session?.user?.id ? 'Мастер' : 'Игрок'})
                </option>
              ))}
            </select>
          </div>

          {userRole === 'master' && selectedCampaign && (
            <MapManager campaignId={selectedCampaign} />
          )}
        </div>
      </div>

      {/* Карта */}
      {selectedCampaign && userRole && (
        <HexGridCanvas
          mode={userRole}
          campaignId={selectedCampaign}
        />
      )}
    </div>
  );
}