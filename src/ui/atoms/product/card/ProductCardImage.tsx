import NextImage from 'next/image';
import Link from 'next/link';

export type ProductCardImageProps = {
	productId: string;
	url: string;
	alt: string;
};

export const ProductCardImage = ({ productId, url, alt }: ProductCardImageProps) => {
	return (
		<Link
			href={{ pathname: `/product/${productId}/opengraph-image` }}
			className="col-start-1 row-start-1 h-[300px]"
		>
			<NextImage
				src={url}
				alt={alt}
				width={250}
				height={300}
				className="h-full w-full cursor-pointer object-contain transition-transform duration-100 ease-in-out hover:scale-110"
			/>
		</Link>
	);
};
