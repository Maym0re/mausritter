'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import NextDynamic from 'next/dynamic';
const HexGridCanvas = NextDynamic(() => import('@/app/(pages)/campaign/components/HexGridCanvas').then(m => m.HexGridCanvas), { ssr: false });
import { CharacterManagerWindow } from '@/app/(pages)/campaign/components/CharacterManagerWindow';
import { DraggableResizableWindow } from '@/components/ui/DraggableResizableWindow';
import { t } from '@/i18n';
import FullscreenDiceLayer from '@/components/FullscreenDiceLayer';
import { useToast } from '@/components/ui/ToastProvider';
import { Tooltip } from '@/components/ui/Tooltip';
import DiceLogModal from '@/components/DiceLogModal';
import { createPortal } from 'react-dom';

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
  const [extraMenuOpen, setExtraMenuOpen] = useState(false); // bottom plus menu
  const [showDiceLog, setShowDiceLog] = useState(false);
  const toast = useToast();

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

  const copyInviteLink = useCallback(() => {
    if (!selectedCampaign) return;
    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const link = `${origin}/campaign/join/${selectedCampaign}`;
      navigator.clipboard?.writeText(link)
        .then(() => toast.success(t('campaign.inviteCopied')))
        .catch(() => {});
    } catch (e) {
      console.error('Copy invite link failed', e);
    }
  }, [selectedCampaign, toast]);

  useEffect(() => {
    if (!extraMenuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#campaign-bottom-menu')) setExtraMenuOpen(false);
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [extraMenuOpen]);

  const activeCampaignName = campaigns.find(c=>c.id===selectedCampaign)?.name;

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
    <div className="h-full w-screen overflow-hidden relative">
      {activeCampaignName && typeof document !== 'undefined' && document.getElementById('app-header-portal') && createPortal(
        <h2 className="text-stone-800 text-2xl">&nbsp;—&nbsp;{activeCampaignName}</h2>,
        document.getElementById('app-header-portal') as HTMLElement
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
          Work in progress...
        </DraggableResizableWindow>
      )}

      <FullscreenDiceLayer campaignId={selectedCampaign || undefined} />
      {showDiceLog && selectedCampaign && (
        <DiceLogModal campaignId={selectedCampaign} onClose={()=>setShowDiceLog(false)} />
      )}

      {/* Bottom menu */}
      <div id="campaign-bottom-menu" className="fixed left-1/2 -translate-x-1/2 bottom-4 bg-stone-900/90 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-3 z-[1100] border border-stone-700">
        {userRole==='master' && <button onClick={()=>setIsAddHexMode(m=>!m)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${isAddHexMode? 'bg-amber-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{isAddHexMode? t('menu.finishAdd'): t('menu.addHex')}</button>}
        {selectedCampaign && <button onClick={()=>setShowDiceLog(true)} className="text-xs px-3 py-1.5 rounded-full font-medium bg-stone-700 text-stone-200 hover:bg-stone-600">{t('menu.log')}</button>}
        {userRole==='master' && <button onClick={()=>setShowMarkersPanel(v=>!v)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${showMarkersPanel? 'bg-emerald-600 text-white':'bg-stone-700 text-stone-200 hover:bg-stone-600'}`}>{t('menu.markers')}</button>}
        {/* Disabled (in development) items now placed before plus menu */}
        <div className="flex items-center gap-2">
          {['characters','time'].map(key => (
            <Tooltip key={key} side="top" content={t('menu.inProgress')}>
              <button disabled className="text-xs px-3 py-1.5 rounded-full font-medium bg-stone-800 text-stone-500 opacity-70 select-none">
                {t(`menu.${key}`)}
              </button>
            </Tooltip>
          ))}
        </div>
        <div className="w-px h-6 bg-stone-700" />
        {/* Extra menu */}
        {userRole==='master' ? (
          <div className="relative">
            <button onClick={()=>setExtraMenuOpen(o=>!o)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${extraMenuOpen? 'bg-stone-700 text-white':'bg-stone-800 text-stone-300 hover:bg-stone-700'}`}>+</button>
            {extraMenuOpen && (
              <div className="absolute bottom-full mb-2 right-0 bg-stone-900/95 border border-stone-600 rounded-lg shadow-lg py-2 px-2 min-w-[160px] flex flex-col gap-1">
                <button onClick={()=>{copyInviteLink(); setExtraMenuOpen(false);}} className="text-left text-xs px-2 py-1 rounded-md text-stone-200 hover:bg-stone-700">{t('campaign.invite')}</button>
              </div>
            )}
          </div>
        ) : (
          <button disabled className="text-xs px-3 py-1.5 rounded-full bg-stone-800 text-stone-500 cursor-default">+</button>
        )}
      </div>
    </div>
  );
}
