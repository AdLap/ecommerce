/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
};

export default nextConfig;
