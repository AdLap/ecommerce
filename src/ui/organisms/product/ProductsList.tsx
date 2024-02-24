import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { ProductListItem } from '@/ui/molecules/product/list/ProductListItem';
import { type ProductItem } from '@/ui/types/types';

export type ProductsListProps = {
	products: ProductItem[];
	isSidebar?: boolean;
	productsNumber?: number;
	page?: number;
};

export const ProductsList = async ({
	/*productsNumber, page,*/ products,
	isSidebar,
}: ProductsListProps) => {
	return (
		<ul
			className={clsx(
				isSidebar
					? 'flex flex-col gap-4'
					: 'grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3',
			)}
			data-testid="products-list"
		>
			{products
				? products.map((product) => <ProductListItem key={product.id} {...product} />)
				: notFound()}
		</ul>
	);
};
