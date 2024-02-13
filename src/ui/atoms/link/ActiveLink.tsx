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
	const isActive = pathname === href;

	return (
		<Link
			className={clsx("flex-grow text-center leading-[80px]", { underline: isActive })}
			href={{ pathname: href }}
		>
			{children}
		</Link>
	);
};
