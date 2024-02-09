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
			<body className={`${inter.className} min-h-screen`}>
				<Header />
				<main className="mx-auto w-full px-4 md:max-w-4xl lg:max-w-7xl">{children}</main>
				<footer className="py-8 text-center">
					<p>
						© {new Date().getFullYear()}{" "}
						<a
							href="https://github.com/AdLap"
							target="_blank"
							rel="noopener noreferrer"
						>{`<AdLap />`}</a>
					</p>
				</footer>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
