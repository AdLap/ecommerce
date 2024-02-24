export type ProductItem = {
	id: string;
	name: string;
	description: string;
	category: string;
	price: number;
	image?: {
		url: string;
		alt: string;
	};
};

export type INavItem = {
	path: string;
	name: string;
};

export type BasePageLayoutProps = {
	children: React.ReactNode;
};
