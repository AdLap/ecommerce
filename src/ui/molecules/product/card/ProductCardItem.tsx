import { Suspense } from 'react';
import { revalidateTag } from 'next/cache';
import { ProductCardDescription } from '@/ui/atoms/product/card/ProductCardDescription';
import { ProductCardImage } from '@/ui/atoms/product/card/ProductCardImage';
import { type ProductListItemFragment } from '@/gql/graphql';
import { addProductToCart, getOrCreateCart } from '@/api/cart';
import { AddToCartButton } from '@/ui/atoms/button/add-item/AddToCartButton';

export const ProductCardItem = (product: ProductListItemFragment) => {
	const addProductToCartAction = async () => {
		'use server';

		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, product.id);

		revalidateTag('cart');
	};

	return (
		<section
			className="grid min-h-[50vh] grid-cols-2 grid-rows-2 gap-4 rounded bg-gray-50 p-4 shadow-sm"
			title={product.description}
		>
			<Suspense fallback={<p>Loading...</p>}>
				{product.images[0] && <ProductCardImage url={product.images[0].url} alt={product.name} />}
			</Suspense>
			<form action={addProductToCartAction}>
				<ProductCardDescription product={product} />
				<AddToCartButton className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white">
					Dodaj do koszyka
				</AddToCartButton>
			</form>
		</section>
	);
};
