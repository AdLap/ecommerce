// import NextImage from 'next/image';
import { ImageResponse } from 'next/og';
import { getProductById } from '@/api/products';

export type ogProps = {
	params: {
		productId: string;
	};
};

export const runtime = 'edge';

export const alt = 'next13 masters sklep';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default async function og({ params: { productId } }: ogProps) {
	const product = await getProductById(productId);
	console.dir(product);
	if (!product) return null;
	const url = product.images[0]?.url || '';

	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
				style={{
					background: `
				    linear-gradient(
				      90deg,
				      rgb(6,172,214) 0%,
				      rgb(0,0,0) 20%,
				      rgb(0,0,0) 80%,
				      rgb(6,71,255) 100%
				    )`,
				}}
			>
				{/* <NextImage src={url} alt={''} width={1200} height={630} /> */}
				<img src={url} alt={product.name} width={1200} height={630} />
				<p tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">{product.name}</p>
				<p tw="font-serif m-0 p-0 font-black">{product.description}</p>
				<p tw="m-0 mt-2">{url}</p>
			</div>
		),
	);
}
