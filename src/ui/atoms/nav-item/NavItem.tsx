import Link from "next/link";
import type { INavItem } from "@/types/interfaces";

export interface NavItemProps {
	route: INavItem;
}

export const NavItem = ({ route: { path, name } }: NavItemProps) => {
	return (
		<li
			key={path}
			className="w flex h-full min-w-20 cursor-pointer items-center justify-center duration-100 ease-in hover:scale-75"
		>
			<Link href={`/${path}`}>{name}</Link>
		</li>
	);
};
