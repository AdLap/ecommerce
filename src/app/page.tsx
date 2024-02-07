import { ProductList } from "@/organisms/ProductList";
import { products } from "@/utils/products-list";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen w-full p-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
			<ProductList products={products} />
		</main>
	);
}

//flex min-h-screen flex-col items-center justify-between p-24
