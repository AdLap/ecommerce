import NextImage from 'next/image';

export type ProductListItemImageProps = {
	url: string;
	alt: string;
};

export const ProductListItemImage = ({ url, alt }: ProductListItemImageProps) => {
	return (
		<div className="h-[300px]">
			<NextImage
				src={url}
				alt={alt}
				width={250}
				height={300}
				className="h-full w-full object-contain"
			/>
		</div>
	);
};
