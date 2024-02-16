import Link from "next/link";
import { ProductListItemDescription } from "@/atoms/product/list/ProductListItemDescription";
import { ProductListItemImage } from "@/atoms/product/list/ProductListItemImage";
import { type ProductItem } from "@/types/types";

export const ProductListItem = (product: ProductItem) => {
	return (
		<li
			className="flex flex-col rounded bg-gray-50 shadow-sm duration-100 ease-in hover:scale-105"
			title={product.description}
		>
			<Link href={`/product/${product.id}`} className="h-full w-full p-4">
				<ProductListItemImage {...product.image} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
