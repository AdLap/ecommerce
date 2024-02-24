import { ProductsGetListDocument, type TypedDocumentString } from '@/gql/graphql';
import type { FetchedProductItem, ProductItem } from '@/types/types';

export const fetchedProductToProductItem = (product: FetchedProductItem): ProductItem => {
	return {
		id: product.id,
		name: product.title,
		description: product.description,
		category: product.category,
		price: product.price,
		image: {
			url: product.image,
			alt: product.title,
		},
	};
};

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphQLQuery = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error('GraphQL URL is not defined');
	}

	const response = await fetch(process.env.GRAPHQL_URL, {
		method: 'POST',
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: { 'Content-Type': 'application/json' },
	});
	const result = (await response.json()) as GraphQLResponse<TResult>;

	if (result.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: result.errors,
		});
	}

	return result.data;
};

export const getProductsList = async (): Promise<ProductItem[]> => {
	const response = await executeGraphQLQuery(ProductsGetListDocument, {});
	return response.products.data.map((product) => {
		return {
			id: product.id,
			name: product.name,
			description: product.description,
			category: product.categories[0]?.name || '',
			price: product.price,
			image: product.images[0] && {
				url: product.images[0].url,
				alt: product.name,
			},
		};
	});
};

export const getProductById = async (id: FetchedProductItem['id']): Promise<ProductItem> => {
	try {
		const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
		const result = (await response.json()) as FetchedProductItem;

		return fetchedProductToProductItem(result);
	} catch (error) {
		console.error(error);
		throw new Error('Network response was not ok');
	}
};
