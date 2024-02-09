import { ProductListItem } from "@/molecules/ProductListItem";
import { type ProductItem } from "@/types/interfaces";

export interface ProductListProps {
	products: ProductItem[];
}

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<section className="pt-32">
			<ul
				className="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem key={product.id} {...product} />
				))}
			</ul>
		</section>
	);
};
