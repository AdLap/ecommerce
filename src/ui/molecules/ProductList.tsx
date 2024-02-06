import { ProductItemList } from "@/ui/molecules/ProductItem";
import { type Product } from "@/ui/types";

export interface ProductListProps {
	products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul className="flex flex-wrap justify-center gap-6" data-testid="products-list">
			{products.map((product) => (
				<ProductItemList key={product.name} {...product} />
			))}
		</ul>
	);
};
