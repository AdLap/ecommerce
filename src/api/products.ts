import { executeGraphQLQuery } from '@/api/qraphqlApi';
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetListDocument,
} from '@/gql/graphql';

export const getProductTotalNumber = async () => {
	const response = await executeGraphQLQuery(ProductsGetListDocument, {});

	return response.products.meta;
};
export const getProductsList = async (take: number = 2, skip: number = 0) => {
	const response = await executeGraphQLQuery(ProductsGetListDocument, { take, skip });

	return response.products.data;
};

export const getProductById = async (id: string) => {
	const response = await executeGraphQLQuery(ProductGetByIdDocument, { id });

	return response.product;
};

export const getProductsByCategory = async (slug: string) => {
	const response = await executeGraphQLQuery(ProductsGetByCategorySlugDocument, { slug });
	if (!response.category) throw new Error('Category not found');

	return response.category.products;
};

export const getProductsByCollection = async (slug: string) => {
	const response = await executeGraphQLQuery(ProductsGetByCollectionSlugDocument, { slug });
	if (!response.collection) throw new Error('Collection not found');

	return response.collection.products;
};
export const getRelatedProductsList = async () => {};
