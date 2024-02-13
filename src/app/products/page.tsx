import { Suspense } from "react";
import { ProductsList } from "@/organisms/product/ProductsList";

export default function ProductsPage() {
	return (
		<section>
			<Suspense fallback={<p>Loading...</p>}>
				<ProductsList page={1} />
			</Suspense>
		</section>
	);
}
