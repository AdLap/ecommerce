export const priceFormatter = (price: number): string => {
	return new Intl.NumberFormat('pl-PL', {
		style: 'currency',
		currency: 'PLN',
	}).format(price);
};
