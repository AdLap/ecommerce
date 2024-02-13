import { getAllProducts, getProductById } from "@/api/products";
import { ProductCardItem } from "@/ui/molecules/product/card/ProductCardItem";
import { type ProductItem } from "@/ui/types/types";

export type ProductPageProps = {
	params: {
		productId: string;
	};
	searchParams: Record<string, string | string[]>;
};

export const generateStaticParams = async (): Promise<{productId: string}[]> => {
	const products = await getAllProducts(1);
	return products.map((product: ProductItem) => ({
		productId: product.id,
	})).slice(0, 3);
}

export default async function ProductPage({ params }: ProductPageProps) {
	const product = await getProductById(params.productId);

	return (
		<section className="mx-auto max-w-3xl pt-32">
			<h1 className="mb-4 text-4xl font-bold">{product?.name}</h1>
			{product ? <ProductCardItem {...product} /> : <p>Produktu nie znalazłem</p>}
		</section>
	);
}
