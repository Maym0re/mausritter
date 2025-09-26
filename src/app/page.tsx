'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FullCampaign } from "@/types/character";
import { t } from '@/i18n';
import { CampaignModal } from '@/components/CampaignModal';
import { useToast } from '@/components/ui/ToastProvider';

export default function HomePage() {
	const {data: session, status} = useSession();
	const router = useRouter();
	const [campaigns, setCampaigns] = useState<FullCampaign[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [creating, setCreating] = useState(false);
	const [deletingId, setDeletingId] = useState<string | null>(null); // id of campaign being deleted
	const [openMenuId, setOpenMenuId] = useState<string | null>(null); // card id whose bottom actions menu is open
	const [editingId, setEditingId] = useState<string | null>(null); // campaign currently editing
	const [editName, setEditName] = useState('');
	const [editDescription, setEditDescription] = useState('');
	const [editSaving, setEditSaving] = useState(false);
	const toast = useToast();

	useEffect(() => {
		if (status === 'loading') return;
		if (!session) {
			setIsLoading(false);
			return;
		}
		fetchCampaigns();
	}, [session, status, router]);

	const fetchCampaigns = async () => {
		try {
			setIsLoading(true);
			const response = await fetch('/api/campaigns');
			if (response.ok) {
				const data = await response.json();
				setCampaigns(data);
			}
		} catch (error) {
			console.error('Failed to load campaigns:', error);
		} finally {
			setIsLoading(false);
		}
	};

	const createCampaign = async (data: { name: string; description: string }) => {
		if (creating) return;
		setCreating(true);
		try {
			const response = await fetch('/api/campaigns', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({name: data.name, description: data.description})
			});
			if (response.ok) {
				const newCampaign = await response.json();
				setCampaigns(prev => [...prev, newCampaign]);
				setShowCreateModal(false);
			}
		} catch (error) {
			console.error('Failed to create campaign:', error);
			alert(t('common.error'));
		} finally {
			setCreating(false);
		}
	};

	const deleteCampaign = async (id: string) => {
		if (deletingId || !session?.user?.id) return;
		if (!confirm(t('campaign.deleteConfirm'))) return;
		setDeletingId(id);
		try {
			const resp = await fetch(`/api/campaigns/${id}`, {method: 'DELETE'});
			if (!resp.ok) throw new Error('delete failed');
			setCampaigns(prev => prev.filter(c => c.id !== id));
		} catch (e) {
			console.error(e);
			alert(t('campaign.deleteError'));
		} finally {
			setDeletingId(null);
		}
	};

	const openEdit = (id: string) => {
		const c = campaigns.find(c => c.id === id);
		if (!c) return;
		setEditingId(id);
		setEditName(c.name || '');
		setEditDescription(c.description || '');
	};

	const submitEdit = async (data: { name: string; description: string }) => {
		if (!editingId || editSaving) return;
		setEditSaving(true);
		try {
			const resp = await fetch(`/api/campaigns/${editingId}`, {
				method: 'PATCH',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({name: data.name, description: data.description})
			});
			if (!resp.ok) throw new Error('failed');
			const updated = await resp.json();
			setCampaigns(prev => prev.map(c => c.id === updated.id ? {
				...c,
				name: updated.name,
				description: updated.description
			} : c));
			setEditingId(null);
		} catch (e) {
			console.error(e);
			alert(t('common.error'));
		} finally {
			setEditSaving(false);
		}
	};

	const copyInviteLink = (id: string) => {
		try {
			const origin = typeof window !== 'undefined' ? window.location.origin : '';
			const link = `${origin}/campaign/join/${id}`;
			navigator.clipboard?.writeText(link).then(()=>{
				toast.success(t('campaign.inviteCopied'));
			}).catch(()=>{});
		} catch (e) {
			console.error('Copy failed', e);
		}
	};

	useEffect(() => {
		// Close any open menu on outside click
		const handleDocClick = (e: MouseEvent) => {
			if (!openMenuId) return;
			const target = e.target as HTMLElement;
			if (!target.closest('[data-campaign-card]')) setOpenMenuId(null);
		};
		document.addEventListener('mousedown', handleDocClick);
		return () => document.removeEventListener('mousedown', handleDocClick);
	}, [openMenuId]);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-stone-50 flex items-center justify-center">
				<div className="text-center">
					<div className="text-lg text-stone-600">{t('home.loading')}</div>
				</div>
			</div>
		);
	}

	if (!session) {
		return (
			<div className="h-full bg-stone-50 flex items-center">
				<div className="w-full max-w-2xl mx-auto px-5 py-16">
					<h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6 text-center">
						{t('home.landing.title')}
					</h1>
					<p className="text-stone-600 text-lg leading-relaxed mb-10 text-center">
						{t('home.landing.subtitle')}
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
						<Link href="/login"
						      className="flex-1 sm:flex-none sm:min-w-[200px] text-center px-6 py-3 rounded-lg bg-stone-900 text-white font-medium shadow hover:bg-black transition">
							{t('home.landing.ctaPrimary')}
						</Link>
						<Link href="/demo"
						      className="flex-1 sm:flex-none sm:min-w-[200px] text-center px-6 py-3 rounded-lg bg-white text-stone-800 font-medium border border-stone-300 shadow-sm hover:bg-stone-100 transition">
							{t('home.landing.demo')}
						</Link>
					</div>
					<div className="space-y-4 mb-10">
						<div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
							<h3 className="font-semibold text-stone-800 mb-1">{t('home.landing.feature1.title')}</h3>
							<p className="text-stone-600 text-sm leading-snug">{t('home.landing.feature1.desc')}</p>
						</div>
						<div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
							<h3 className="font-semibold text-stone-800 mb-1">{t('home.landing.feature2.title')}</h3>
							<p className="text-stone-600 text-sm leading-snug">{t('home.landing.feature2.desc')}</p>
						</div>
						<div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
							<h3 className="font-semibold text-stone-800 mb-1">{t('home.landing.feature3.title')}</h3>
							<p className="text-stone-600 text-sm leading-snug">{t('home.landing.feature3.desc')}</p>
						</div>
						<div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
							<h3 className="font-semibold text-stone-800 mb-1">{t('home.landing.feature4.title')}</h3>
							<p className="text-stone-600 text-sm leading-snug">{t('home.landing.feature4.desc')}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="h-full bg-stone-50">
			<main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-3xl font-bold text-stone-900">{t('home.myCampaigns')}</h2>
						<div className="flex gap-3">
							<Link href="/demo"
							      className="px-4 py-2 rounded-md bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 font-medium">{t('home.landing.demo')}</Link>
							<button
								onClick={() => setShowCreateModal(true)}
								className="bg-stone-900 hover:bg-black text-white px-4 py-2 rounded-md font-medium"
							>
								{t('home.createCampaign')}
							</button>
						</div>
					</div>

					{campaigns.length === 0 ? (
						<div className="text-center py-12">
							<h3 className="text-xl font-medium text-stone-900 mb-2">
								{t('home.noCampaignsTitle')}
							</h3>
							<p className="text-stone-600 mb-6">
								{t('home.noCampaignsHint')}
							</p>
							<button
								onClick={() => setShowCreateModal(true)}
								className="bg-stone-900 hover:bg-black text-white px-6 py-3 rounded-md font-medium"
							>
								{t('home.createFirst')}
							</button>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{campaigns.map((campaign) => (
								<div
									key={campaign.id}
									className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 relative"
									data-campaign-card
								>
									{/* Card top bar */}
									<div className="flex justify-between items-start mb-4">
										<h3 className="text-xl font-semibold text-stone-900 break-words max-w-[75%]">
											{campaign.name}
										</h3>
										<span
											className={`px-2 py-1 rounded-full text-xs font-medium ${campaign.gm?.id === session.user?.id ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                      {campaign.gm?.id === session.user?.id ? t('home.role.gm') : t('home.role.player')}
                    </span>
									</div>

									{campaign.description && (
										<p className="text-stone-600 mb-4 text-sm">
											{campaign.description}
										</p>
									)}

									<div className="text-sm text-stone-500 mb-4">
										<div>{t('home.playersCount')} {campaign.players?.length || 0}</div>
										<div>{t('home.charactersCount')} {campaign._count?.characters || 0}</div>
										<div>{t('home.season')} {campaign.season}</div>
									</div>

									<div className="flex space-x-2 items-stretch relative">
										<Link
											href={`/campaign?campaign=${campaign.id}`}
											className="flex-1 text-center bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 rounded-md text-sm font-medium"
										>
											{t('home.open')}
										</Link>
										{campaign.gm?.id === session.user?.id && (
											<div className="relative">
												<button
													type="button"
													aria-label={t('campaign.menu')}
													onClick={(e) => {
														e.stopPropagation();
														setOpenMenuId(m => m === campaign.id ? null : campaign.id);
													}}
													className={`h-full px-3 py-2 rounded-md border text-sm font-medium transition-colors flex items-center gap-1 ${openMenuId === campaign.id ? 'border-stone-400 bg-stone-100 text-stone-800' : 'border-stone-300 text-stone-600 hover:bg-stone-100 hover:border-stone-400'}`}
												>
													<span className="leading-none">⋯</span>
												</button>
												{openMenuId === campaign.id && (
													<div className="absolute z-20 bottom-full mb-2 right-0 w-52 bg-white border border-stone-200 rounded-md shadow-lg py-1 text-sm">
													<button
														type="button"
														onClick={() => { setOpenMenuId(null); openEdit(campaign.id); }}
														className="w-full text-left px-3 py-2 hover:bg-stone-50 text-stone-700"
													>
														{t('campaign.edit')}
													</button>
													<button
														onClick={() => { setOpenMenuId(null); copyInviteLink(campaign.id); }}
														className="w-full text-left px-3 py-2 hover:bg-stone-50 text-stone-700"
														type="button"
													>
														{t('campaign.invite')}
													</button>
													<div className="my-1 h-px bg-stone-200" />
													<button
														onClick={() => { setOpenMenuId(null); deleteCampaign(campaign.id); }}
														disabled={deletingId === campaign.id}
														className={`w-full text-left px-3 py-2 hover:bg-red-50 ${deletingId === campaign.id ? 'text-red-400 cursor-wait' : 'text-red-600'}`}
													>
														{deletingId === campaign.id ? t('campaign.deleting') : t('campaign.delete')}
													</button>
												</div>
												)}
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</main>

			{/* Create campaign modal (unified) */}
			<CampaignModal
				mode="create"
				open={showCreateModal}
				initialName=""
				initialDescription=""
				saving={creating}
				onClose={() => !creating && setShowCreateModal(false)}
				onSubmit={createCampaign}
			/>
			{/* Edit campaign modal (unified) */}
			<CampaignModal
				mode="edit"
				open={!!editingId}
				initialName={editingId ? (campaigns.find(c => c.id === editingId)?.name || '') : ''}
				initialDescription={editingId ? (campaigns.find(c => c.id === editingId)?.description || '') : ''}
				saving={editSaving}
				onClose={() => {
					if (!editSaving) setEditingId(null);
				}}
				onSubmit={submitEdit}
			/>
		</div>
	);
}
