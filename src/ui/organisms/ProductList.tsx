import { ProductListItem } from "@/molecules/ProductListItem";
import { type ProductItem } from "@/types/interfaces";

export interface ProductListProps {
	products: ProductItem[];
}

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul className="flex flex-wrap justify-center gap-6" data-testid="products-list">
			{products.map((product) => (
				<ProductListItem key={product.id} {...product} />
			))}
		</ul>
	);
};
