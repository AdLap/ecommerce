import Image from 'next/image';

export type ProductListItemImageProps = {
	src: string;
	alt: string;
};

export const ProductListItemImage = ({ src, alt }: ProductListItemImageProps) => {
	return (
		<div className="h-[300px]">
			<Image
				src={src}
				alt={alt}
				width={250}
				height={300}
				className="h-full w-full object-contain"
			/>
		</div>
	);
};
