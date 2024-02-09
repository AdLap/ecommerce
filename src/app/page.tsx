import { Header } from "@/organisms/header/Header";
import { ProductList } from "@/organisms/product/ProductList";
import { products } from "@/utils/products-list";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen w-full px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
			<Header />
			<ProductList products={products} />
		</main>
	);
}
