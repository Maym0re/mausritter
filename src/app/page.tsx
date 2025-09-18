'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FullCampaign } from "@/types/character";
import { t } from '@/i18n';

export default function HomePage() {
	const {data: session, status} = useSession();
	const router = useRouter();
	const [campaigns, setCampaigns] = useState<FullCampaign[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [newCampaignName, setNewCampaignName] = useState('');
	const [newCampaignDescription, setNewCampaignDescription] = useState('');

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

	const createCampaign = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/campaigns', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: newCampaignName,
					description: newCampaignDescription,
				}),
			});

			if (response.ok) {
				const newCampaign = await response.json();
				setCampaigns([...campaigns, newCampaign]);
				setShowCreateModal(false);
				setNewCampaignName('');
				setNewCampaignDescription('');
			}
		} catch (error) {
			console.error('Failed to create campaign:', error);
		}
	};

	if (status === 'loading') {
		return (
			<div className="min-h-screen bg-stone-50 flex items-center justify-center">
				<div className="text-center">
					<div className="text-4xl mb-4">🐭</div>
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
			{/* Main content without local header (global AppHeader used) */}
			<main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-3xl font-bold text-stone-900">{t('home.myCampaigns')}</h2>
						<div className="flex gap-3">
							<Link href="/demo"
							      className="px-4 py-2 rounded-md bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium">{t('home.landing.demo')}</Link>
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
							<div className="text-6xl mb-4">🏰</div>
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
									className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
								>
									<div className="flex justify-between items-start mb-4">
										<h3 className="text-xl font-semibold text-stone-900">
											{campaign.name}
										</h3>
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											campaign.gm?.id === session.user?.id
												? 'bg-purple-100 text-purple-800'
												: 'bg-blue-100 text-blue-800'
										}`}>
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

									<div className="flex space-x-2">
										<Link
											href={`/campaign?campaign=${campaign.id}`}
											className="flex-1 text-center bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 rounded-md text-sm font-medium"
										>
											{t('home.open')}
										</Link>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</main>

			{/* Create campaign modal */}
			{showCreateModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<div className="bg-white rounded-lg max-w-md w-full p-6">
						<h3 className="text-lg font-semibold text-stone-900 mb-4">
							{t('home.modal.createTitle')}
						</h3>

						<form onSubmit={createCampaign} className="space-y-4">
							<div>
								<label htmlFor="campaignName" className="block text-sm font-medium text-gray-700">
									{t('home.modal.nameLabel')}
								</label>
								<input
									id="campaignName"
									type="text"
									required
									value={newCampaignName}
									onChange={(e) => setNewCampaignName(e.target.value)}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
									placeholder={t('home.modal.namePlaceholder')}
								/>
							</div>

							<div>
								<label htmlFor="campaignDescription" className="block text-sm font-medium text-gray-700">
									{t('home.modal.descriptionLabel')}
								</label>
								<textarea
									id="campaignDescription"
									value={newCampaignDescription}
									onChange={(e) => setNewCampaignDescription(e.target.value)}
									rows={3}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
									placeholder={t('home.modal.descriptionPlaceholder')}
								/>
							</div>

							<div className="flex space-x-3 pt-4">
								<button
									type="button"
									onClick={() => {
										setShowCreateModal(false);
										setNewCampaignName('');
										setNewCampaignDescription('');
									}}
									className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
								>
									{t('home.modal.cancel')}
								</button>
								<button
									type="submit"
									className="flex-1 px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-md"
								>
									{t('home.modal.submit')}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
