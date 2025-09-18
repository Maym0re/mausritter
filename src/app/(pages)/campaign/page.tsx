'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { HexGridCanvas } from '@/app/(pages)/campaign/components/HexGridCanvas';
import { CharacterManagerWindow } from '@/app/(pages)/campaign/components/CharacterManagerWindow';
import { DraggableResizableWindow } from '@/components/ui/DraggableResizableWindow';
import { TimeTracker } from '@/components/TimeTracker';
import { t } from '@/i18n';
import FullscreenDiceLayer from '@/components/FullscreenDiceLayer';

interface CampaignListItem { id: string; name: string; gmId: string }

export default function CampaignPage() {
  const { data: session } = useSession();
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [campaigns, setCampaigns] = useState<CampaignListItem[]>([]);
  const [userRole, setUserRole] = useState<'master' | 'player' | null>(null);
  const [showCharacters, setShowCharacters] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [isAddHexMode, setIsAddHexMode] = useState(false);
  const [showMarkersPanel, setShowMarkersPanel] = useState(false);

  const fetchCampaigns = useCallback(async () => {
    try {
      const response = await fetch('/api/campaigns');
      if (response.ok) {
        const data: CampaignListItem[] = await response.json();
        setCampaigns(data);
        if (data.length > 0 && !selectedCampaign) {
          setSelectedCampaign(data[0].id);
          setUserRole(data[0].gmId === session?.user?.id ? 'master' : 'player');
        }
      }
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
    }
  }, [selectedCampaign, session?.user?.id]);

  useEffect(() => {
    if (session?.user?.id) {
      fetchCampaigns();
    }
  }, [session?.user?.id, fetchCampaigns]);

  useEffect(() => {
    // If there is a campaign param in URL select it
    const searchParams = new URLSearchParams(window.location.search);
    const campaignParam = searchParams.get('campaign');
    if (campaignParam && campaigns.length > 0) {
      const exists = campaigns.find(c => c.id === campaignParam);
      if (exists) {
        setSelectedCampaign(campaignParam);
        setUserRole(exists.gmId === session?.user?.id ? 'master' : 'player');
      }
    }
  }, [campaigns, session?.user?.id]);

  const handleCampaignSelect = (campaignId: string) => {
    setSelectedCampaign(campaignId);
    const campaign = campaigns.find(c => c.id === campaignId);
    if (campaign) {
      setUserRole(campaign.gmId === session?.user?.id ? 'master' : 'player');
      const url = new URL(window.location.href);
      url.searchParams.set('campaign', campaignId);
      window.history.replaceState({}, '', url.toString());
    }
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('auth.loginRequiredTitle')}</h2>
          <p className="text-gray-600">{t('auth.loginRequiredHint')}</p>
        </div>
      </div>
    );
  }

  if (campaigns.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('campaign.noneTitle')}</h2>
          <p className="text-gray-600">{t('campaign.noneHint')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-56px)] w-screen overflow-hidden relative">{/* 56px = header height */}
      {/* Campaign selector if multiple */}
      {campaigns.length > 1 && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[1100] flex gap-2 bg-stone-900/80 px-3 py-1.5 rounded-full border border-stone-700">
          {campaigns.map(c => (
            <button key={c.id} onClick={() => handleCampaignSelect(c.id)} className={`text-xs px-3 py-1 rounded-full font-medium ${selectedCampaign===c.id? 'bg-amber-500 text-stone-900':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{c.name}</button>
          ))}
        </div>
      )}

      {/* Map */}
      {selectedCampaign && userRole && (
        <HexGridCanvas
          mode={userRole}
          campaignId={selectedCampaign}
          isAddHexMode={isAddHexMode}
          onAddHexModeChange={setIsAddHexMode}
          markersPanelOpen={showMarkersPanel}
          onMarkersPanelOpenChange={setShowMarkersPanel}
        />
      )}

      {/* Windows */}
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
          title={t('time.tracker')}
          initialX={200}
          initialY={140}
          initialWidth={640}
          initialHeight={620}
          onClose={() => setShowTime(false)}
        >
          <TimeTracker />
        </DraggableResizableWindow>
      )}

      <FullscreenDiceLayer />

      {/* Bottom menu */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4 bg-stone-900/90 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-3 z-[1100] border border-stone-700">
        <button onClick={()=>setShowCharacters(s=>!s)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${showCharacters? 'bg-purple-500 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{t('menu.characters')}</button>
        <button onClick={()=>setShowTime(s=>!s)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${showTime? 'bg-blue-500 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{t('menu.time')}</button>
        {userRole==='master' && <button onClick={()=>setIsAddHexMode(m=>!m)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${isAddHexMode? 'bg-amber-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{isAddHexMode? t('menu.finishAdd'): t('menu.addHex')}</button>}
        {userRole==='master' && <button onClick={()=>setShowMarkersPanel(v=>!v)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${showMarkersPanel? 'bg-emerald-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{t('menu.markers')}</button>}
        <div className="w-px h-6 bg-stone-700" />
        <button disabled className="text-xs px-3 py-1.5 rounded-full bg-stone-800 text-stone-500 cursor-default">+</button>
      </div>
    </div>
  );
}
