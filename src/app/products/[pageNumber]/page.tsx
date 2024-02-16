import { Suspense } from "react";
import { ProductsList } from "@/organisms/product/ProductsList";
import { Pagination } from "@/ui/organisms/pagination/Pagination";

export type ProductsPageProps = {
	params: {
		pageNumber: string;
		productsOnPage: string;
	};
};

export default async function ProductsPage({ params }: ProductsPageProps) {
	const pageNumber = Number(params.pageNumber);
	const productsOnPage = Number(params.productsOnPage) || 20;
	console.log("productsOnPage", productsOnPage, typeof productsOnPage);

	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Wszystkie produkty</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList productsNumber={productsOnPage} page={pageNumber} />
				<Pagination currentPage={pageNumber} productsNumber={productsOnPage} />
			</Suspense>
		</section>
	);
}
