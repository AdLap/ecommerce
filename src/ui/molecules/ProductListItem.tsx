import { ProductListItemDescription } from "@/atoms/ProductListItemDescription";
import { ProductListItemImage } from "@/atoms/ProductListItemImage";
import { type ProductItem } from "@/types/interfaces";

export const ProductListItem = (product: ProductItem) => {
	return (
		<li
			className="cursor-pointer rounded bg-gray-50 p-4 shadow-sm duration-100 ease-in hover:scale-105"
			title={product.description}
		>
			<a href={`/product/${product.id}`} className="">
				<ProductListItemImage {...product.image} />
				<ProductListItemDescription product={product} />
			</a>
		</li>
	);
};
