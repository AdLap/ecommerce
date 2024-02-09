import { ProductListItemDescription } from "@/atoms/product/ProductListItemDescription";
import { ProductListItemImage } from "@/atoms/product/ProductListItemImage";
import { type ProductItem } from "@/types/interfaces";

export const ProductListItem = (product: ProductItem) => {
	return (
		<li
			className="flex w-max flex-col rounded bg-gray-50 p-4 shadow-sm duration-100 ease-in hover:scale-105"
			title={product.description}
		>
			<a href={`/product/${product.id}`} className="">
				<ProductListItemImage {...product.image} />
				<ProductListItemDescription product={product} />
			</a>
		</li>
	);
};
