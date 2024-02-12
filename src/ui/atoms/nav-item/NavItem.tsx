import type { INavItem } from "@/types/interfaces";
import { ActiveLink } from "@/ui/atoms/link/ActiveLink";

export interface NavItemProps {
	route: INavItem;
}

export const NavItem = ({ route: { path, name } }: NavItemProps) => {
	return (
		<li
			key={path}
			className="w flex h-full min-w-20 cursor-pointer items-center justify-center duration-100 ease-in hover:scale-75"
		>
			<ActiveLink href={`/${path}`}>{name}</ActiveLink>
		</li>
	);
};
