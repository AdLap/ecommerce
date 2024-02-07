export interface ProductDescriptionProps {
	name: string;
	description: string;
	price: string;
}

export const ProductDescription = ({ name, description, price }: ProductDescriptionProps) => {
	return (
		<div className="mt-4 flex flex-col items-center">
			<h2 className="font-bold">{name}</h2>
			<p className="self-start">{description}</p>
			<p className="self-end">{price}</p>
		</div>
	);
};
