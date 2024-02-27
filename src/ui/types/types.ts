export type INavItem = {
	path: string;
	name: string;
};

export type BasePageLayoutProps = {
	children: React.ReactNode;
};

export type BasePageProductProps = {
	params: {
		pageNumber: string;
		productsOnPage: string;
	};
};
