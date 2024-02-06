import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { type Product } from "@/ui/types";
import { priceFormater } from "@/utils/price-formater";

export const ProductItemList = (product: Product) => {
	return (
		<li className="cursor-pointer rounded bg-gray-50 p-4 shadow-sm duration-75 hover:scale-105">
			<ProductImage src={product.image.src} alt={product.image.alt} />
			<ProductDescription
				name={product.name}
				description={product.description}
				price={priceFormater(product.price)}
			/>
		</li>
	);
};
