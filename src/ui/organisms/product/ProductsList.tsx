import clsx from "clsx";
import { notFound } from "next/navigation";
import { getAllProducts } from "@/api/products";
import { ProductListItem } from "@/molecules/product/ProductListItem";

export type ProductsListProps = {
	isSidebar?: boolean;
	page: number;
};

export const ProductsList = async ({ page, isSidebar }: ProductsListProps) => {
	const products = await getAllProducts(page);

	return (
		<ul
			className={clsx(
				isSidebar
					? "flex flex-col gap-4"
					: "grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3",
			)}
			data-testid="products-list"
		>
			{products
				? products.map((product) => <ProductListItem key={product.id} {...product} />)
				: notFound()}
		</ul>
	);
};
