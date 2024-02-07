import { ProductList } from "@/ui/molecules/ProductList";
import { products } from "@/utils/products-list";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} />
		</main>
	);
}
