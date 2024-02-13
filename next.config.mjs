import nextMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const withMDX = nextMdx({
	extension: /\.mdx?$/,
	options: {
		// remarkPlugins: [],
		// rehypePlugins: [],
	},
});

const nextConfig = withMDX({
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
			},
		],
	},
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
});

export default nextConfig;
