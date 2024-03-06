import { cookies } from 'next/headers';
import { executeGraphQL } from '@/api/qraphqlApi';
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from '@/gql/graphql';

export const getOrCreateCart = async () => {
	const cartId = cookies().get('cartId')?.value;
	if (cartId) {
		const { cart } = await executeGraphQL({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			next: { tags: ['cart'] },
			cache: 'no-store',
		});
		if (cart) return cart;
	}

	const { cartFindOrCreate: newCart } = await executeGraphQL({
		query: CartCreateDocument,
		variables: {
			id: '',
		},
		next: { tags: ['cart'] },
		cache: 'no-store',
	});
	if (!newCart) throw new Error('Failed to create cart');

	cookies().set('cartId', newCart.id, {
		maxAge: 60 * 60 * 24 * 365,
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: true,
	});
	console.log('newCart::', newCart);
	return newCart;
};

export const getCartFromCookies = async () => {
	const cartId = cookies().get('cartId')?.value;
	if (!cartId) return null;

	const { cart } = await executeGraphQL({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: { tags: ['cart'] },
		cache: 'no-store',
	});

	return cart;
};

export const addProductToCart = async (cartId: string, productId: string) => {
	'use server';
	const { product } = await executeGraphQL({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});
	if (!product) throw new Error('Product not found');

	await executeGraphQL({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			quantity: 1,
		},
		next: { tags: ['cart'] },
		cache: 'no-store',
	});
};
