import { Suspense } from 'react';
import { ProductsList } from '@/organisms/product/ProductsList';
import { Pagination } from '@/ui/organisms/pagination/Pagination';
import { getProductsList } from '@/api/products';

export type ProductsPageProps = {
	params: {
		pageNumber: string;
		productsOnPage: string;
	};
};

export default async function ProductsPage({ params }: ProductsPageProps) {
	const pageNumber = Number(params.pageNumber);
	const productsOnPage = Number(params.productsOnPage) || 20;
	const productsList = await getProductsList();

	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Wszystkie produkty</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList products={productsList} productsNumber={productsOnPage} page={pageNumber} />
				<Pagination location={`products`} currentPage={pageNumber} productsNumber={productsOnPage} />
			</Suspense>
		</section>
	);
}

export const generateStaticParams = async () => {
	return [{ pageNumber: '1' }, { pageNumber: '2' }, { pageNumber: '3' }];
};
