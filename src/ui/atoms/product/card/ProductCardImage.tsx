import Image from 'next/image';

export type ProductCardImageProps = {
	src: string;
	alt: string;
};

export const ProductCardImage = ({ src, alt }: ProductCardImageProps) => {
	return (
		<div className="col-start-1 row-start-1 h-[300px]">
			<Image
				src={src}
				alt={alt}
				width={250}
				height={300}
				className="h-full w-full cursor-pointer object-contain transition-transform duration-100 ease-in-out hover:scale-110"
			/>
		</div>
	);
};
