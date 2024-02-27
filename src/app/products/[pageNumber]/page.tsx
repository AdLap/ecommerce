import { Suspense } from 'react';
import { ProductsList } from '@/organisms/products/list/ProductsList';
import { Pagination } from '@/ui/organisms/pagination/Pagination';
import { type BasePageProductProps } from '@/ui/types/types';

export type ProductsPageProps = {} & BasePageProductProps;

export default function ProductsPage({
	params: { pageNumber, productsOnPage },
}: ProductsPageProps) {
	const currentPage = pageNumber;
	const productsOnPageNumber = Number(productsOnPage) || 2;

	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Wszystkie produkty</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList productsOnPage={productsOnPageNumber} currentPage={currentPage} />
				<Pagination
					location={`products`}
					currentPage={currentPage}
					productsOnPage={productsOnPageNumber}
				/>
			</Suspense>
		</section>
	);
}

export const generateStaticParams = async () => {
	return [{ pageNumber: '1' }, { pageNumber: '2' }, { pageNumber: '3' }];
};
