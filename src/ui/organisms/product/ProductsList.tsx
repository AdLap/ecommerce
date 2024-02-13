import clsx from "clsx";
import { getAllProducts } from "@/api/products";
import { ProductListItem } from "@/molecules/product/ProductListItem";

export interface ProductsListProps {
	isSidebar?: boolean;
	page: number;
}

export const ProductsList = async ({ page, isSidebar }: ProductsListProps) => {
	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	const products = (await getAllProducts(page)) ?? [];

	await sleep(5000 * Math.random());

	return (
		<ul
			className={clsx(
				isSidebar
					? "flex flex-col"
					: "grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
			)}
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} {...product} />
			))}
		</ul>
	);
};
