import { NavItem } from '@/atoms/nav-item/NavItem';
import type { INavItem } from '@/types/types';

export type NavProps = {
	routes: INavItem[];
};

export const Nav = ({ routes }: NavProps) => {
	return (
		<nav>
			<ul className="flex gap-6">
				{routes.map((route) => (
					<NavItem key={route.path} route={route} />
				))}
			</ul>
		</nav>
	);
};
