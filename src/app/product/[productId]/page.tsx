import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import { getProductById } from '@/api/products';
import { ProductCardItem } from '@/ui/molecules/product/card/ProductCardItem';

export type ProductPageProps = {
	params: {
		productId: string;
	};
	searchParams: Record<string, string | string[]>;
};

export default async function ProductPage({ params }: ProductPageProps) {
	const product = await getProductById(params.productId);

	if (!product) return notFound();

	return (
		<section className="mx-auto max-w-4xl">
			<h1 className="mb-4 text-4xl font-bold">{product.name}</h1>
			<ProductCardItem {...product} />
		</section>
	);
}

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	if (!product) return notFound();

	return {
		title: product.name,
		description: product.description,
	};
};
