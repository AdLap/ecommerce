import { notFound } from 'next/navigation';

export default async function StaticContentPage({ params }: { params: { filename: string } }) {
	const StaticPage = await import(`./${params.filename}.mdx`).then(
		(module: { default: React.ComponentType }) => module.default,
		() => notFound(),
	);

	return (
		<article className="prose prose-lg">
			<StaticPage />
		</article>
	);
}
