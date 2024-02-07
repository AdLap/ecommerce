import { type ProductItem } from "@/types/interfaces";
import { priceFormatter } from "@/utils/price-formatter";

export interface ProductListItemDescriptionProps {
	product: ProductItem;
}

export const ProductListItemDescription = ({
	product: { name, description, price, category },
}: ProductListItemDescriptionProps) => {
	return (
		<article className="relative mt-4 flex flex-col items-center text-neutral-800">
			<span className="absolute -top-4 left-0 text-xs font-light text-gray-400">{category}</span>
			<h2 className="font-bold">{name}</h2>
			<p className="self-start">{description}</p>
			<p className="self-end font-medium">{priceFormatter(price)}</p>
		</article>
	);
};
