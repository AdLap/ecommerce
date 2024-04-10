import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Nav } from '@/molecules/nav/Nav';
import { type INavItem } from '@/types/types';
import { Logo } from '@/atoms/logo/Logo';
import { SearchBar } from '@/ui/molecules/search-bar/SearchBar';

export const Header = () => {
	const routes: INavItem[] = [
		{ path: '/', name: 'Home' },
		{ path: '/products', name: 'All' },
		{ path: '/categories/t-shirts', name: 'T-Shirts' },
		{ path: '/categories/hoodies', name: 'Bluzy' },
		{ path: '/categories/accessories', name: 'Akcesoria' },
		{ path: '/collections', name: 'Kolekcje' },
		// { path: '/polityka-prywatnosci', name: '...' },
		// { path: '/cart', name: '@' },
	];

	return (
		<header className="fixed left-0 top-0 z-10 flex h-20 w-full justify-center bg-slate-50  px-4 shadow-md">
			<div className="flex w-full items-center justify-between px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
				<Logo />
				<Nav routes={routes} />
				<SearchBar />
				<div>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton />
					</SignedOut>
				</div>
			</div>
		</header>
	);
};
