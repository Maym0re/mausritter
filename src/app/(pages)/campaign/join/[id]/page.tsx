'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { t } from '@/i18n'
import { useToast } from '@/components/ui/ToastProvider'

interface CampaignPreview {
  id: string
  name: string
  description?: string | null
  gm?: { id: string; name?: string | null; email?: string | null }
  players?: { userId: string; user?: { id: string; name?: string | null; email?: string | null } }[]
  _count?: { players: number; characters: number }
}

export default function CampaignJoinPage() {
  const params = useParams<{ id: string }>()
  const campaignId = params?.id
  const { data: session, status } = useSession()
  const router = useRouter()
  const toast = useToast()

  const [campaign, setCampaign] = useState<CampaignPreview | null>(null)
  const [loading, setLoading] = useState(true)
  const [joining, setJoining] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadCampaign = useCallback(async () => {
    if (!campaignId || !session?.user?.id) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/campaigns/${campaignId}`)
      if (!res.ok) {
        setError(t('campaign.join.errorLoad'))
      } else {
        const data = await res.json()
        setCampaign(data)
      }
    } catch (e) {
      setError(t('campaign.join.errorLoad'))
    } finally {
      setLoading(false)
    }
  }, [campaignId, session?.user?.id])

  useEffect(() => {
    if (session?.user?.id && campaignId) {
      loadCampaign()
    }
  }, [session?.user?.id, campaignId, loadCampaign])

  const isAlreadyPlayer = !!campaign?.players?.some(p => p.userId === session?.user?.id) || campaign?.gm?.id === session?.user?.id

  const handleJoin = async () => {
    if (!campaignId) return
    setJoining(true)
    try {
      const res = await fetch(`/api/campaigns/${campaignId}/join`, { method: 'POST' })
      if (res.ok) {
        toast.success(t('campaign.join.successToast'))
        router.push(`/campaign?campaign=${campaignId}`)
      } else {
        const data = await res.json().catch(()=>null)
        toast.error(data?.error || t('campaign.join.errorToast'))
      }
    } catch (e) {
      toast.error(t('campaign.join.errorToast'))
    } finally {
      setJoining(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen bg-stone-50">
        <p className="text-stone-500 text-sm">{t('campaign.join.loading')}</p>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen px-4 bg-stone-50">
        <div className="max-w-md w-full bg-white border border-stone-200 rounded-xl p-6 text-center shadow-sm">
          <h1 className="text-xl font-semibold text-stone-900 mb-3">{t('auth.loginRequiredTitle')}</h1>
          <p className="text-stone-600 mb-4">{t('campaign.join.loginRequired')}</p>
          <button onClick={()=>router.push('/login')} className="px-4 py-2 rounded-md bg-stone-900 text-white text-sm font-medium hover:bg-black transition">
            {t('auth.login.signIn')}
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-stone-50">
        <p className="text-stone-500 text-sm animate-pulse">{t('campaign.join.loading')}</p>
      </div>
    )
  }

  if (error || !campaign) {
    return (
      <div className="flex items-center justify-center h-screen px-4 bg-stone-50">
        <div className="max-w-md w-full bg-white border border-stone-200 rounded-xl p-6 text-center shadow-sm">
          <h1 className="text-lg font-semibold text-stone-900 mb-3">{t('common.error')}</h1>
          <p className="text-stone-600 mb-4">{error || t('campaign.join.errorLoad')}</p>
          <button onClick={()=>router.push('/campaign')} className="px-4 py-2 rounded-md bg-white border border-stone-300 text-stone-700 text-sm hover:bg-stone-100 transition">
            {t('campaign.join.back')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex items-center justify-center px-4 py-10 bg-stone-50">
      <div className="w-full max-w-lg bg-white border border-stone-200 rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">{t('campaign.join.title')}</h1>
          <p className="text-stone-600 text-sm">{t('campaign.join.question')}</p>
        </div>
        {/* Campaign info */}
        <div className="mb-6 space-y-2">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">{campaign.name}</h2>
            {campaign.description && <p className="text-stone-600 text-sm mt-1 whitespace-pre-line">{campaign.description}</p>}
          </div>
          <p className="text-stone-500 text-xs">
            <span className="font-medium text-stone-700">{t('campaign.join.gm')}</span> {campaign.gm?.name || campaign.gm?.email || '—'}
          </p>
          <p className="text-stone-500 text-xs">
            <span className="font-medium text-stone-700">{t('campaign.join.players')}</span> {campaign._count?.players ?? (campaign.players?.length || 0)}
          </p>
        </div>
        {isAlreadyPlayer ? (
          <div className="mb-6 text-emerald-600 text-sm font-medium">{t('campaign.join.alreadyPlayer')}</div>
        ) : (
          <div className="mb-6 text-stone-600 text-sm">{t('campaign.join.confirmHint')}</div>
        )}
        <div className="flex gap-3">
          <button
            onClick={()=>router.push(`/campaign${isAlreadyPlayer ? `?campaign=${campaignId}`:''}`)}
            className="flex-1 px-4 py-2 rounded-md bg-white border border-stone-300 text-stone-700 text-sm hover:bg-stone-100 transition"
          >
            {t('campaign.join.cancel')}
          </button>
          {!isAlreadyPlayer && (
            <button
              onClick={handleJoin}
              disabled={joining}
              className="flex-1 px-4 py-2 rounded-md bg-stone-900 text-white text-sm font-medium hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {joining ? t('campaign.join.joining') : t('campaign.join.confirm')}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
