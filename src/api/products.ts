import { executeGraphQLQuery } from '@/api/qraphqlApi';
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from '@/gql/graphql';

export const getProductsList = async () => {
	const response = await executeGraphQLQuery(ProductsGetListDocument, {});

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
