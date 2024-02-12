import { ProductList } from "@/organisms/product/ProductList";
import { products } from "@/utils/products-list";

export default function Home() {
	return (
		<section>
			<ProductList products={products} />
		</section>
	);
}
