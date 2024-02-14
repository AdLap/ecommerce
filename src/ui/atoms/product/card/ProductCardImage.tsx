import Image from "next/image";

export type ProductCardImageProps = {
	src: string;
	alt: string;
};

export const ProductCardImage = ({ src, alt }: ProductCardImageProps) => {
	return (
		<div className="h-[300px] col-start-1 row-start-1">
			<Image
				src={src}
				alt={alt}
				width={250}
				height={300}
				className="h-full w-full object-contain hover:scale-110 transition-transform duration-100 ease-in-out cursor-pointer"
			/>
		</div>
	);
};
