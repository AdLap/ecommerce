import { ProductList } from "@/organisms/product/ProductList";
import { products } from "@/utils/products-list";

export default function ProductsPage() {
	return (
		<section>
			<ProductList products={products} />
		</section>
	);
}
