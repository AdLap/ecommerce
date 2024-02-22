import type { INavItem } from '@/types/types';
import { ActiveLink } from '@/ui/atoms/link/ActiveLink';

export type NavItemProps = {
	route: INavItem;
};

export const NavItem = ({ route: { path, name } }: NavItemProps) => {
	return (
		<li
			key={path}
			className="flex w-20 cursor-pointer items-center justify-center duration-100 ease-in hover:scale-75"
		>
			<ActiveLink href={`/${path}`}>{name}</ActiveLink>
		</li>
	);
};
