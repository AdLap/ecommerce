import { Suspense } from 'react';
import { ProductsList } from '@/ui/organisms/products/list/ProductsList';

export type RelatedProductsProps = {
	productsNumber: number;
	page?: number;
	isAside?: boolean;
};

export const RelatedProducts = async ({ productsNumber, page = 1 }: RelatedProductsProps) => {
	return (
		<aside className="col-span-3 px-8" data-testid="related-products">
			<h2 className="mb-4 text-xl font-bold">Polecane produkty</h2>
			<Suspense fallback={<p>Ładowanie...</p>}>
				<ProductsList
					productsOnPage={Number(productsNumber)}
					currentPage={Number(page)}
					isSidebar={true}
				/>
			</Suspense>
		</aside>
	);
};
