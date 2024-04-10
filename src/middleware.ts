import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: [
		'/',
		'/search',
		'/cart',
		'/categories',
		'/categories/(.*)',
		'/collections',
		'/collections/(.*)',
		'/product',
		'/product/(.*)',
		'/products',
		'/products(.*)',
	],
});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
