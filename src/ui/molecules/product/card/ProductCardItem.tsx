import { Suspense } from 'react';
import { ProductCardDescription } from '@/ui/atoms/product/card/ProductCardDescription';
import { ProductCardImage } from '@/ui/atoms/product/card/ProductCardImage';
import { type ProductListItemFragment } from '@/gql/graphql';

export const ProductCardItem = (product: ProductListItemFragment) => {
	return (
		<section
			className="grid min-h-[50vh] grid-cols-2 grid-rows-2 gap-4 rounded bg-gray-50 p-4 shadow-sm"
			title={product.description}
		>
			<Suspense fallback={<p>Loading...</p>}>
				{product.images[0] && <ProductCardImage url={product.images[0].url} alt="" />}
			</Suspense>
			<ProductCardDescription product={product} />
		</section>
	);
};
