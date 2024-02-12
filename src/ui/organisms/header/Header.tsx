import { Nav } from "@/molecules/nav/Nav";
import { type INavItem } from "@/types/interfaces";
import { Logo } from "@/atoms/logo/Logo";

export const Header = () => {
	const routes: INavItem[] = [
		{ path: "products", name: "Nie klikaj" },
		{ path: "privacy-policy", name: "..." },
		{ path: "contact", name: "@" },
	];

	return (
		<header className="fixed left-0 top-0 z-10 flex h-20 w-full justify-center bg-slate-50  px-4">
			<div className="flex h-full w-full items-center justify-between px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
				<Logo />
				<Nav routes={routes} />
			</div>
		</header>
	);
};
