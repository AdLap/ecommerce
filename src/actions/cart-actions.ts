'use server';

import { revalidateTag } from 'next/cache';
import { CartRemoveProductDocument, CartSetProductQuantityDocument } from '@/gql/graphql';
import { executeGraphQL } from '@/api/qraphqlApi';

export const changeItemQuantity = (cartId: string, productId: string, quantity: number) => {
	if (quantity < 1) {
		revalidateTag('cart');
		return removeItem(cartId, productId);
	}

	revalidateTag('cart');
	return executeGraphQL({
		query: CartSetProductQuantityDocument,
		variables: { cartId, productId, quantity },
	});
};

export const removeItem = (cartId: string, productId: string) => {
	return executeGraphQL({ query: CartRemoveProductDocument, variables: { cartId, productId } });
};
