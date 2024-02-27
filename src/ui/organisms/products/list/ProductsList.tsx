import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { ProductListItem } from '@/ui/molecules/product/list/ProductListItem';
import { getProductsList } from '@/api/products';

export type ProductsListProps = {
	isSidebar?: boolean;
	productsOnPage: string | number;
	currentPage: string | number;
};

export const ProductsList = async ({
	productsOnPage = 1,
	currentPage = 0,
	isSidebar,
}: ProductsListProps) => {
	const skip = Number(productsOnPage) * Number(currentPage);
	const productsList = await getProductsList(Number(productsOnPage), skip);
	return (
		<ul
			className={clsx(
				isSidebar
					? 'flex flex-col gap-4'
					: 'grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3',
			)}
			data-testid="products-list"
		>
			{productsList
				? productsList.map((product) => <ProductListItem key={product.id} {...product} />)
				: notFound()}
		</ul>
	);
};
