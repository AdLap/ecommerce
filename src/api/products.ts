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
export const getProductsList = async (take: number = 2, skip: number = 0) => {
	const response = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: { take, skip },
	});

	return response.products.data;
};

export const getProductById = async (id: string) => {
	const response = await executeGraphQL({ query: ProductGetByIdDocument, variables: { id } });

	return response.product;
};

export const getProductsByCategory = async (slug: string) => {
	const response = await executeGraphQL({
		query: ProductsGetByCategorySlugDocument,
		variables: { slug },
	});
	if (!response.category) throw new Error('Category not found');

	return response.category.products;
};

export const getProductsByCollection = async (slug: string) => {
	const response = await executeGraphQL({
		query: ProductsGetByCollectionSlugDocument,
		variables: { slug },
	});
	if (!response.collection) throw new Error('Collection not found');

	return response.collection.products;
};
export const getRelatedProductsList = async () => {};

export const searchProducts = async (query: string) => {
	const response = await executeGraphQL({
		query: ProductsGetByQueryDocument,
		variables: { query },
	});

	return response.products.data;
};
