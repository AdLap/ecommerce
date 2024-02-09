import { ProductList } from "@/organisms/product/ProductList";
import { products } from "@/utils/products-list";

export default function Home() {
	return (
		<section className="pt-32">
			<ProductList products={products} />
		</section>
	);
}
