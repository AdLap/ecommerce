'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
export interface ActiveLinkProps {
	href: string;
	exact?: boolean;
	isDisabled?: boolean;
	children: React.ReactNode;
}

export const ActiveLink = ({
	href,
	exact = true,
	isDisabled = false,
	children,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = exact
		? pathname === href
		: href === '/'
			? pathname === href
			: (pathname === '/' && href === '/') || (href !== '/' && pathname.startsWith(href));

	return (
		<Link
			className={clsx('flex-grow text-center leading-[80px]', isDisabled && 'pointer-events-none', {
				underline: isActive,
			})}
			href={{ pathname: href }}
			aria-current={isActive && true}
			aria-disabled={isDisabled}
		>
			{children}
		</Link>
	);
};
