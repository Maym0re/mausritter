import type { Metadata } from "next";
import { Geist, Geist_Mono, Pirata_One } from "next/font/google";
import "../../styles/globals.css";

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
		<html lang="en">
		<body
			className={`${geistSans.variable} ${geistMono.variable} ${pirataOne.variable} antialiased`}
		>
		{children}
		</body>
		</html>
	);
}
