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

export const getAllProducts = async (productsNumber: number, page: number): Promise<ProductItem[]> => {
	try {
		const take = Number(productsNumber);
		const offset = take * (Number(page) - 1);
		console.log({offset})
		const response = await fetch(
			`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
		);
		const result = (await response.json()) as FetchedProductItem[];
		const products = result.map(fetchedProductToProductItem);

		return products;
	} catch (error) {
		console.error(error);
		throw new Error("Network response was not ok");
	}
};

export const getProductById = async (id: FetchedProductItem["id"]): Promise<ProductItem> => {
	try {
		const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
		const result = (await response.json()) as FetchedProductItem;

		return fetchedProductToProductItem(result);
	} catch (error) {
		console.error(error);
		throw new Error("Network response was not ok");
	}
};
