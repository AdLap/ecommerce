import Image from "next/image";

export interface ProductImageProps {
	src: string;
	alt: string;
}

export const ProductImage = ({ src, alt }: ProductImageProps) => {
	return (
		<div className="">
			<Image src={src} alt={alt} width={250} height={250} />
		</div>
	);
};
