import { getCartFromCookies } from '@/api/cart';
import { NavItem } from '@/atoms/nav-item/NavItem';
import type { INavItem } from '@/types/types';
import { ActiveLink } from '@/ui/atoms/link/ActiveLink';

export type NavProps = {
	routes: INavItem[];
};

export const Nav = async ({ routes }: NavProps) => {
	const cart = await getCartFromCookies();
	const count = cart?.items.length ?? 0;
	return (
		<nav>
			<ul className="flex gap-6">
				{routes.map((route) => (
					<NavItem key={route.path} route={route} />
				))}
				<li className="flex w-20 cursor-pointer items-center justify-center duration-100 ease-in hover:scale-75">
					<ActiveLink href="/cart" exact={false}>
						@ {count}
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
