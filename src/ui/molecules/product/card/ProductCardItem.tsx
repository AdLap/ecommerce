import { ProductCardDescription } from "@/ui/atoms/product/card/ProductCardDescription";
import { ProductCardImage } from "@/ui/atoms/product/card/ProductCardImage";
import type { ProductItem } from "@/ui/types/types";

export const ProductCardItem = (product: ProductItem) => {
	return (
		<section className="grid grid-rows-2 grid-cols-2 gap-4 rounded bg-gray-50 p-4 shadow-sm min-h-[50vh]" title={product.description}>
			<ProductCardImage {...product.image} />
			<ProductCardDescription product={product} />
		</section>
	);
};
