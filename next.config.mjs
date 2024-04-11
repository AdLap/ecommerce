import nextMdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const withMDX = nextMdx({
	extension: /\.mdx?$/,
	options: {
		// remarkPlugins: [],
		// rehypePlugins: [],
	},
});
const withNextIntl = createNextIntlPlugin();

const nextConfig = withMDX({
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	// output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
			{
				protocol: 'https',
				hostname: 'naszsklep-api.vercel.app',
			},
			{
				protocol: 'https',
				hostname: 'static-ourstore.hyperfunctor.com',
			},
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects() {
		return [
			{
				source: '/products',
				destination: '/products/1',
				permanent: false,
			},
			{
				source: '/categories/:category',
				destination: '/categories/:category/1',
				permanent: false,
			},
		];
	},
});

export default withNextIntl(nextConfig);
