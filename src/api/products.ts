import { executeGraphQLQuery } from '@/api/qraphqlApi';
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from '@/gql/graphql';
import type { ProductItem } from '@/types/types';

// TODO: type FetchedProduct - find a better solution
type FetchedProduct = {
	id: string;
	name: string;
	description: string;
	categories: { name: string }[];
	price: number;
	images: { url: string }[];
};
export const fetchedProductToProductItem = (product: FetchedProduct): ProductItem => {
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
};

export const getProductsList = async (): Promise<ProductItem[]> => {
	const response = await executeGraphQLQuery(ProductsGetListDocument, {});

	return response.products.data.map(fetchedProductToProductItem);
};

export const getProductById = async (id: string): Promise<ProductItem> => {
	const response = await executeGraphQLQuery(ProductGetByIdDocument, { id });

	if (!response.product) throw new Error('Product not found');

	return fetchedProductToProductItem(response.product);
};

export const getProductsByCategory = async (slug: string): Promise<ProductItem[]> => {
	const response = await executeGraphQLQuery(ProductsGetByCategorySlugDocument, { slug });
	if (!response.category) throw new Error('Category not found');

	return response.category.products.map(fetchedProductToProductItem);
};
