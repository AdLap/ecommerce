import { Suspense } from 'react';
import { Pagination } from '@/ui/organisms/pagination/Pagination';
import { ProductsList } from '@/ui/organisms/products/list/ProductsList';
import { type BasePageProductProps } from '@/ui/types/types';

export type CategoryProductPageProps = {
	params: {
		category: string;
	};
} & BasePageProductProps;

export default async function CategoryProductPage({
	params: { category, pageNumber, productsOnPage },
}: CategoryProductPageProps) {
	const productsOnPageNumber = Number(productsOnPage) || 2;

	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Wszystkie produkty</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList productsOnPage={productsOnPageNumber} currentPage={pageNumber} />
				<Pagination
					location={`categories/${category}`}
					currentPage={pageNumber}
					productsOnPage={productsOnPageNumber}
				/>
			</Suspense>
		</section>
	);
}

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	switch (params.category) {
		case 'Accessories':
			return [{ pageNumber: '1' }, { pageNumber: '2' }];
		case 'T-shirts':
			return [{ pageNumber: '1' }, { pageNumber: '2' }, { pageNumber: '3' }];
		case 'Hoodies':
			return [{ pageNumber: '1' }, { pageNumber: '2' }];
		default:
			return [{ pageNumber: '1' }];
	}
};
