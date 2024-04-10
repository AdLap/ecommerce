import { Suspense } from 'react';
import { Pagination } from '@/ui/organisms/pagination/Pagination';
import { ProductsList } from '@/ui/organisms/products/list/ProductsList';
import { type BasePageProductProps } from '@/ui/types/types';

export type CollectionsPageProps = {
	params: {
		collection: string;
	};
} & BasePageProductProps;

export default async function CollectionPage({
	params: { collection, pageNumber, productsOnPage },
}: CollectionsPageProps) {
	const productsOnPageNumber = Number(productsOnPage) || 4;

	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Kolekcja {collection}</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList productsOnPage={productsOnPage} currentPage={pageNumber} />
				<Pagination
					location={`collections/${collection}`}
					currentPage={Number(pageNumber)}
					productsOnPage={productsOnPageNumber}
				/>
			</Suspense>
		</section>
	);
}

export const generateStaticParams = async () => {
	return [{ pageNumber: '1' }];
};
