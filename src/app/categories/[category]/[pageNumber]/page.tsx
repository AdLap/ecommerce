import { Suspense } from 'react';
import { getProductsByCategory } from '@/api/products';
import { Pagination } from '@/ui/organisms/pagination/Pagination';
import { ProductsList } from '@/ui/organisms/product/ProductsList';

export type CategoryProductPageProps = {
	params: {
		category: string;
		pageNumber: string;
		productsOnPage: string;
	};
};

export default async function CategoryProductPage({ params }: CategoryProductPageProps) {
	const pageNumber = Number(params.pageNumber);
	const productsOnPage = Number(params.productsOnPage) || 20;
	const productsList = await getProductsByCategory(params.category);

	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Wszystkie produkty</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList products={productsList} productsNumber={productsOnPage} page={pageNumber} />
				<Pagination currentPage={pageNumber} productsNumber={productsOnPage} />
			</Suspense>
		</section>
	);
}

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	switch (params.category) {
		case 'Accessories':
			return [{ pageNumber: '1' }];
		case 'T-shirts':
			return [{ pageNumber: '1' }, { pageNumber: '2' }];
		default:
			return [];
	}
};
