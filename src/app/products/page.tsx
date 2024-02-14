import { Suspense } from "react";
import { ProductsList } from "@/organisms/product/ProductsList";

export default async function ProductsPage() {
	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Ostatnio dodane</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList productsNumber={10} page={1} />
			</Suspense>
		</section>
	);
}
