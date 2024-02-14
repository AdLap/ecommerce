"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
export interface ActiveLinkProps {
	href: string;
	children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === "/" ? pathname === href.slice(1) : pathname.startsWith(href);

	return (
		<Link
			className={clsx("flex-grow text-center leading-[80px]", { underline: isActive })}
			href={{ pathname: href }}
			aria-current={isActive && true}
		>
			{children}
		</Link>
	);
};
