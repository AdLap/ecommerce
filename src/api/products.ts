import { executeGraphQL } from '@/api/qraphqlApi';
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetByQueryDocument,
	ProductsGetListDocument,
} from '@/gql/graphql';

export const getProductTotalNumber = async () => {
	const response = await executeGraphQL({ query: ProductsGetListDocument, variables: {} });

	return response.products.meta;
};
export const getProductsList = async (take: number = 5, skip: number = 0) => {
	const response = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: { take, skip },
		next: { revalidate: 60 * 60 * 24 },
	});

	return response.products.data;
};

export const getProductById = async (id: string) => {
	const response = await executeGraphQL({
		query: ProductGetByIdDocument,
		variables: { id },
		next: { revalidate: 1 },
	});

	return response.product;
};

export const getProductsByCategory = async (slug: string) => {
	const response = await executeGraphQL({
		query: ProductsGetByCategorySlugDocument,
		variables: { slug },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});
	if (!response.category) throw new Error('Category not found');

	return response.category.products;
};

export const getProductsByCollection = async (slug: string) => {
	const response = await executeGraphQL({
		query: ProductsGetByCollectionSlugDocument,
		variables: { slug },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});
	if (!response.collection) throw new Error('Collection not found');

	return response.collection.products;
};

export const getRelatedProductsList = async () => { };

export const searchProducts = async (query: string) => {
	const response = await executeGraphQL({
		query: ProductsGetByQueryDocument,
		variables: { query },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return response.products.data;
};
