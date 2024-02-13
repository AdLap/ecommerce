export type ProductItem = {
	id: string;
	name: string;
	description: string;
	category: string;
	price: number;
	image: {
		src: string;
		alt: string;
	};
};

export type INavItem = {
	path: string;
	name: string;
};

export type FetchedProductItem = {
	id: string;
	title: string;
	description: string;
	category: string;
	price: number;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
	longDescription: string;
};
