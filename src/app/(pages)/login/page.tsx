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
	const [showPassword, setShowPassword] = useState(false);
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
					setError('Authentication error after registration.');
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
					setError('Invalid credentials');
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

	return (
		<main className="relative h-full w-full overflow-hidden bg-gray-50 text-stone-800">
			<div className="relative flex items-center justify-center px-4 py-12 pt-20">
				<div className="w-full max-w-md">
					<div className="mb-10 flex flex-col items-center text-center select-none">
						<h1 className="text-3xl font-semibold tracking-tight text-stone-900">{t('auth.login.appTitle')}</h1>
						<p className="mt-2 max-w-sm text-sm text-stone-600">{t('auth.login.subtitle')}</p>
					</div>

					<div className="relative rounded-2xl border border-stone-300 bg-white/95 backdrop-blur-sm shadow-xl">
						<div className="absolute inset-0 rounded-2xl bg-gray-50" />
						<div className="relative p-8">
							<div className="mb-6 flex items-center justify-between gap-2 text-sm font-medium">
								<button type="button" onClick={()=>{setIsRegistering(false); setError('');}} className={`flex-1 rounded-lg px-4 py-2 transition ${!isRegistering ? 'bg-stone-900 text-white shadow-md shadow-stone-900/40' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>{t('auth.login.tab.signIn')}</button>
								<button type="button" onClick={()=>{setIsRegistering(true); setError('');}} className={`flex-1 rounded-lg px-4 py-2 transition ${isRegistering ? 'bg-stone-900 text-white shadow-md shadow-stone-900/40' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>{t('auth.login.tab.register')}</button>
							</div>

							<form onSubmit={handleCredentialsSubmit} className="space-y-5">
								{isRegistering && (
									<div className="group">
										<label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-stone-600">{t('auth.register.name')}</label>
										<input id="name" type="text" required={isRegistering} value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 placeholder-stone-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200" placeholder={t('auth.register.namePlaceholder')} />
									</div>
								)}

								<div className="group">
									<label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-stone-600">Email</label>
									<input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 placeholder-stone-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200" placeholder={t('auth.emailPlaceholder')} />
								</div>

								<div className="group relative">
									<label htmlFor="password" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-stone-600">{t('auth.password')}</label>
									<input id="password" type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 pr-10 text-sm text-stone-800 placeholder-stone-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200" placeholder="••••••••" />
									<button type="button" onClick={()=>setShowPassword(p=>!p)} className="absolute right-2 top-[30px] text-stone-400 hover:text-stone-600 transition" aria-label={showPassword ? t('auth.password.hideLabel') : t('auth.password.showLabel')}>
										{showPassword ? (
											<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.5a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l12.544 12.544M17.772 17.772L21 21"/></svg>
										) : (
											<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1 1 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.01 9.964 7.178.07.207.07.437 0 .644C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.01-9.964-7.178z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
										)}
									</button>
								</div>

								{error && (
									<div className="rounded-lg border border-red-300 bg-red-50 p-3 text-xs text-red-600">
										{error}
									</div>
								)}

								<button type="submit" disabled={isLoading} className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-stone-950 to-stone-700 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-stone-700/40 outline-none transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60">
									{isLoading && (<span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />)}
									<span>{isLoading ? t('auth.processing') : (isRegistering ? t('auth.register.createAccount') : t('auth.login.signIn'))}</span>
								</button>
							</form>

							<div className="mt-6 text-center text-xs text-stone-600">
								<button onClick={() => { setIsRegistering(!isRegistering); setError(''); }} className="font-medium text-stone-800 hover:text-black transition">
									{isRegistering ? t('auth.register.haveAccount') : t('auth.register.noAccount')}
								</button>
							</div>

							<div className="mt-4 text-center">
								<Link href="/" className="text-xs font-medium text-stone-700 hover:text-stone-900 transition">
									{t('auth.backHome')}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}