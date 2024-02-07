import Image from "next/image";

export interface ProductListItemImageProps {
	src: string;
	alt: string;
}

export const ProductListItemImage = ({ src, alt }: ProductListItemImageProps) => {
	return (
		<div className="">
			<Image src={src} alt={alt} width={250} height={300} />
		</div>
	);
};
