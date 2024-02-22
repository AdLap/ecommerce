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

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: product?.name ?? 'Produkt',
		description: product?.description ?? 'Super produkt',
	};
};

export default async function ProductPage({ params }: ProductPageProps) {
	const product = await getProductById(params.productId);

	return (
		<section className="mx-auto max-w-4xl">
			<h1 className="mb-4 text-4xl font-bold">{product?.name}</h1>
			{product ? <ProductCardItem {...product} /> : notFound()}
		</section>
	);
}
