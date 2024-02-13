import { ProductListItemDescription } from "@/ui/atoms/product/list/ProductListItemDescription";
import { ProductListItemImage } from "@/ui/atoms/product/list/ProductListItemImage";
import type { ProductItem } from "@/ui/types/types";

export const ProductCardItem = (product: ProductItem) => {
	return (
		<section className="flex flex-col rounded bg-gray-50 p-4 shadow-sm" title={product.description}>
			<ProductListItemImage {...product.image} />
			<ProductListItemDescription product={product} />
		</section>
	);
};
