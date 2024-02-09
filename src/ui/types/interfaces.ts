export interface ProductItem {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
	image: {
		src: string;
		alt: string;
	};
}

export interface INavItem {
	path: string;
	name: string;
}
