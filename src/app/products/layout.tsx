import { Suspense } from 'react';
import { ProductsList } from '@/ui/organisms/product/ProductsList';
import { type BasePageLayoutProps } from '@/ui/types/types';
import { getProductsList } from '@/api/products';

export default async function ProductsLayout({ children }: BasePageLayoutProps) {
	const productsList = await getProductsList();

	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 ">
			<aside className="col-span-3 px-8">
				<h2 className="mb-4 text-xl font-bold">Polecane produkty</h2>
				<Suspense fallback={<p>Ładowanie...</p>}>
					<ProductsList products={productsList} productsNumber={5} page={3} isSidebar={true} />
				</Suspense>
			</aside>
			<main className="col-span-9 px-8 text-neutral-900">{children}</main>
		</div>
	);
}
