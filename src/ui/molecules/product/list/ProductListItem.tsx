import { Link } from '@/navigation';
import { ProductListItemDescription } from '@/atoms/product/list/ProductListItemDescription';
import { ProductListItemImage } from '@/atoms/product/list/ProductListItemImage';
import { type ProductListItemFragment } from '@/gql/graphql';

export const ProductListItem = (product: ProductListItemFragment) => {
	return (
		<li
			className="flex flex-col rounded bg-gray-50 shadow-sm duration-100 ease-in hover:scale-105"
			title={product.description}
		>
			<Link href={`/product/${product.id}`} className="h-full w-full p-4">
				{product.images[0] && <ProductListItemImage url={product.images[0].url} alt="" />}
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
