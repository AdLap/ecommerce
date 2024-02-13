import { NavItem } from "@/atoms/nav-item/NavItem";
import type { INavItem } from "@/types/types";

export interface NavProps {
	routes: INavItem[];
}

export const Nav = ({ routes }: NavProps) => {
	return (
		<nav className="h-full ">
			<ul className="flex h-full gap-6">
				{routes.map((route) => (
					<NavItem key={route.path} route={route} />
				))}
			</ul>
		</nav>
	);
};
