import type { FetchedProductItem, ProductItem } from "@/types/types";

export const fetchedProductToProductItem = (product: FetchedProductItem): ProductItem => {
	return {
		id: product.id,
		name: product.title,
		description: product.description,
		category: product.category,
		price: product.price,
		image: {
			src: product.image,
			alt: product.title,
		},
	};
};

export const getAllProducts = async (page: number): Promise<ProductItem[] | undefined> => {
	try {
		const take = 10;
		const offset = 10 * (page - 1);
		const response = await fetch(
			`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const result = (await response.json()) as FetchedProductItem[];
		const products = result.map(fetchedProductToProductItem);

		return products;
	} catch (error) {
		console.error(error);
	}
};

export const getProductById = async (
	id: FetchedProductItem["id"],
): Promise<ProductItem | undefined> => {
	try {
		const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const result = (await response.json()) as FetchedProductItem;

		return fetchedProductToProductItem(result);
	} catch (error) {
		console.error(error);
	}
};
