import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Header } from '@/organisms/header/Header';
import { Footer } from '@/ui/organisms/footer/Footer';
import './globals.css';

const inter = Inter({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Podróż bez zwrotu',
	description: 'Niewyobrażalnie Niemożliwe',
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={`${inter.variable} min-h-screen overflow-x-hidden`}>
				<Header />
				<main className="mx-auto min-h-[calc(100vh_-_88px)] w-full px-4 pt-32 md:max-w-4xl lg:max-w-7xl ">
					{children}
				</main>
				<Footer />
				{modal}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
