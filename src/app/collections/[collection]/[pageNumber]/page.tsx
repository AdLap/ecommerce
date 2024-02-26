import { Suspense } from 'react';
import { Pagination } from '@/ui/organisms/pagination/Pagination';
import { ProductsList } from '@/ui/organisms/product/ProductsList';
import { getProductsByCollection } from '@/api/products';

export type CollectionsPageProps = {
	params: {
		collection: string;
		pageNumber: string;
		productsOnPage: string;
	};
};

export default async function CollectionPage({
	params: { collection, pageNumber, productsOnPage },
}: CollectionsPageProps) {
	const productsList = await getProductsByCollection(collection);
	console.log(productsList);
	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Kolekcja {collection}</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList
					products={productsList} /*productsNumber={productsOnPage} page={pageNumber}*/
				/>
				<Pagination
					location={`collections/${collection}`}
					currentPage={Number(pageNumber)}
					productsNumber={Number(productsOnPage) || 20}
				/>
			</Suspense>
		</section>
	);
}

export const generateStaticParams = async () => {
	return [{ pageNumber: '1' }];
};
