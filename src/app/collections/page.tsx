import Link from 'next/link';
import { Suspense } from 'react';
import { getCollectionsList } from '@/api/collections';

export default async function CollectionsPage() {
	const collectionsList = await getCollectionsList();
	return (
		<section>
			<h1 className="mb-4 text-4xl font-bold">Kolekcje</h1>
			<Suspense fallback={<p>Loading...</p>}>
				{collectionsList.map((collection) => (
					<>
						<Link href={`/collections/${collection.slug}/1`} key={collection.id}>
							{collection.name}
						</Link>
						<p>{collection.description}</p>
					</>
				))}
			</Suspense>
		</section>
	);
}
