import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/organisms/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Podróż bez zwrotu",
	description: "Niewyobrażalnie Niemożliwe",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<Header />
				<main className="mx-auto min-h-screen w-full px-4 md:max-w-4xl lg:max-w-7xl">
					{children}
				</main>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
