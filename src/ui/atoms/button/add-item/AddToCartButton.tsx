'use client';

import { useFormStatus } from 'react-dom';

export type AddToCartButtonProps = {
	className?: string;
	children: string | React.ReactNode;
};

export const AddToCartButton = ({ className, children }: AddToCartButtonProps) => {
	const status = useFormStatus();

	return (
		<button className={className} type="submit" disabled={status.pending}>
			{children}
		</button>
	);
};
