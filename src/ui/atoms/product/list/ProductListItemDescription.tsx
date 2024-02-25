import { type ProductListItemFragment } from '@/gql/graphql';
import { priceFormatter } from '@/utils/price-formatter';

export type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, description, price, categories },
}: ProductListItemDescriptionProps) => {
	return (
		<article className="relative mt-4 flex flex-col items-center text-neutral-800">
			<span className="absolute -top-4 left-0 text-xs font-light text-gray-400">
				{categories[0]?.name || ''}
			</span>
			<h2 className="font-bold">{name}</h2>
			<p className="self-start">{description}</p>
			<p className="self-end font-medium">{priceFormatter(price)}</p>
		</article>
	);
};
