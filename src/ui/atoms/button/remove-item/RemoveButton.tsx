'use client';

import { useTransition } from 'react';
import { useRouter } from '@/navigation';
import { removeItem } from '@/actions/cart-actions';

export type RemoveButtonProps = {
	cartId: string;
	productId: string;
};

export const RemoveButton = ({ cartId, productId }: RemoveButtonProps) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:cursor-wait disabled:text-slate-400"
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(cartId, productId);
					router.refresh();
				})
			}
		>
			Remove
		</button>
	);
};
