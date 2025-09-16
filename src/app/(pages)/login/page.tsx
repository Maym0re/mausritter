'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { t } from '@/i18n';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [isRegistering, setIsRegistering] = useState(false);
	const [name, setName] = useState('');
	const router = useRouter();

	const handleCredentialsSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		try {
			if (isRegistering) {
				const response = await fetch('/api/auth/register', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ name, email, password }),
				});

				if (!response.ok) {
					const data = await response.json();
					throw new Error(data.error || 'Registration error');
				}

				const result = await signIn('credentials', {
					email,
					password,
					redirect: false,
				});

				if (result?.error) {
					setError(t('auth.error.afterRegister'));
				} else {
					router.push('/');
				}
			} else {
				const result = await signIn('credentials', {
					email,
					password,
					redirect: false,
				});

				if (result?.error) {
					setError(t('auth.error.invalidCredentials'));
				} else {
					router.push('/');
				}
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Error');
		} finally {
			setIsLoading(false);
		}
	};

	const handleSocialLogin = async (provider: 'github' | 'google') => {
		setIsLoading(true);
		await signIn(provider, { callbackUrl: '/' });
	};

	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
				<div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
					<div className="w-32 text-white md:w-36">
						MAUSRITTER
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md p-8">
					<div className="space-y-3 mb-6">
						<button
							onClick={() => handleSocialLogin('github')}
							disabled={isLoading}
							className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
						>
							<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
							</svg>
							{t('auth.login.github')}
						</button>

						<button
							onClick={() => handleSocialLogin('google')}
							disabled={isLoading}
							className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
						>
							<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
								<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
								<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
								<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
								<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
							</svg>
							{t('auth.login.google')}
						</button>
					</div>

					<div className="relative mb-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300" />
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-white text-gray-500">{t('auth.login.or')}</span>
						</div>
					</div>

					<form onSubmit={handleCredentialsSubmit} className="space-y-4">
						{isRegistering && (
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700">
									{t('auth.register.name')}
								</label>
								<input
									id="name"
									type="text"
									required={isRegistering}
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
									placeholder={t('auth.register.namePlaceholder')}
								/>
							</div>
						)}

						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								id="email"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
								placeholder="your@email.com"
							/>
						</div>

						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">
								{t('auth.password')}
							</label>
							<input
								id="password"
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
								placeholder="••••••••"
							/>
						</div>

						{error && (
							<div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
								{error}
							</div>
						)}

						<button
							type="submit"
							disabled={isLoading}
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 disabled:opacity-50"
						>
							{isLoading ? t('auth.loading') : (isRegistering ? t('auth.register.createAccount') : t('auth.login.signIn'))}
						</button>
					</form>

					<div className="mt-6 text-center">
						<button
							onClick={() => {
								setIsRegistering(!isRegistering);
								setError('');
							}}
							className="text-stone-600 hover:text-stone-800 text-sm"
						>
							{isRegistering ? t('auth.register.haveAccount') : t('auth.register.noAccount')}
						</button>
					</div>

					<div className="mt-4 text-center">
						<Link
							href="/"
							className="text-stone-600 hover:text-stone-800 text-sm"
						>
							{t('auth.backHome')}
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}