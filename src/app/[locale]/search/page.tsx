import { notFound } from 'next/navigation';
import { Link } from '@/navigation';
import { searchProducts } from '@/api/products';

export type SearchPageProps = {
	searchParams: Record<string, string>;
};

export default async function SearchPage({ searchParams: { query } }: SearchPageProps) {
	if (!query) return notFound();

	const productsList = await searchProducts(query);
	return (
		<>
			<h1 className="mb-4 text-4xl font-bold">Znalezione produkty</h1>
			<ul>
				{productsList.map((product) => (
					<li key={product.id}>
						<Link href={`/product/${product.id}`} key={product.id}>
							{product.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
