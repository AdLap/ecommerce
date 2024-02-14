import { type ProductItem } from "@/types/types";
import { priceFormatter } from "@/utils/price-formatter";

export type ProductCardDescriptionProps = {
	product: ProductItem;
};

export const ProductCardDescription = ({
	product: { description, price, category },
}: ProductCardDescriptionProps) => {
	return (
		<article className="relative flex gap-4 flex-col items-center text-neutral-800 row-start-2 col-start-1">
			<span className="absolute -top-4 left-0 text-xs font-light text-gray-400">{category}</span>
			<p className="self-end">Cena: <span className="font-semibold">{priceFormatter(price)}</span></p>
			<p className="mt-10">{description}</p>
		</article>
	);
};
