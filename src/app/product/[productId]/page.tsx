import { getProductById } from "@/api/products";
import { ProductCardItem } from "@/ui/molecules/product/card/ProductCardItem";

export interface ProductPageProps {
	params: {
		productId: string;
	};
	searchParams: Record<string, string | string[]>;
}

export default async function ProductPage({ params }: ProductPageProps) {
	const product = await getProductById(params.productId);

	return (
		<section className="mx-auto max-w-3xl">
			<h1 className="mb-4 text-4xl font-bold">{product?.name}</h1>
			{product !== undefined ? <ProductCardItem {...product} /> : <p>Product not found</p>}
		</section>
	);
}
