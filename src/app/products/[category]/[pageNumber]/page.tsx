export type CategoryProductPageProps = {
	params: {
		category: string;
		pageNumber: string;
	};
};

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	switch (params.category) {
		case "Toys":
			return [{ pageNumber: "1" }];
		case "Jewelery":
			return [{ pageNumber: "1" }, { pageNumber: "2" }];
		default:
			return [];
	}
};

export default function CategoryProductPage({ params }: CategoryProductPageProps) {
	return (
		<div>
			<h1>Page Number</h1>
			<p>
				{params.category}
				{params.pageNumber}
			</p>
		</div>
	);
}
