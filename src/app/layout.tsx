import type { Metadata } from "next";
import { Geist, Geist_Mono, Pirata_One } from "next/font/google";
import "./../../styles/globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { AppHeader } from '@/components/ui/AppHeader';
import { ToastProvider } from '@/components/ui/ToastProvider';
import { ContextMenuProvider } from '@/components/ui/ContextMenu';
import { ResponsiveGate } from '@/components/ResponsiveGate';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const pirataOne = Pirata_One({
	variable: "--font-pirata-one",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Mausritter App",
	description: "Helpful tools for the Mausritter RPG",
};

export default function RootLayout({children}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
		<body
			className={`${geistSans.variable} ${geistMono.variable} ${pirataOne.variable} antialiased h-full m-0 p-0 overflow-auto`}>
		<ToastProvider>
			<ContextMenuProvider>
				<AuthProvider>
					<div className="flex flex-col h-full">
						<div className="flex flex-shrink-0">
							<AppHeader/>
						</div>
						<div className="flex-1 overflow-auto bg-stone-50">
							<ResponsiveGate>
								{children}
							</ResponsiveGate>
						</div>
					</div>
				</AuthProvider>
			</ContextMenuProvider>
		</ToastProvider>
		</body>
		</html>
	);
}
