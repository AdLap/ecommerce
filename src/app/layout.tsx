import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/organisms/header/Header";
import "./globals.css";
import { Footer } from "@/ui/organisms/footer/Footer";

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
			<body className={`${inter.className} min-h-screen overflow-x-hidden`}>
				<Header />
				<main className="mx-auto w-full px-4 md:max-w-4xl lg:max-w-7xl">{children}</main>
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
