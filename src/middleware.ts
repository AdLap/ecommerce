import { authMiddleware } from '@clerk/nextjs';
import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales, pathnames } from '@/navigation';

const intlMiddleware = createMiddleware({
	locales,
	defaultLocale,
	pathnames,
	localePrefix,
});

export default authMiddleware({
	beforeAuth(req) {
		return intlMiddleware(req);
	},
	publicRoutes: [
		'/',
		'/:locale',
		'/search',
		'/:locale/search',
		'/cart',
		'/:locale/cart',
		'/categories',
		'/:locale/categories',
		'/categories/(.*)',
		'/:locale/categories/(.*)',
		'/collections',
		'/:locale/collections',
		'/collections/(.*)',
		'/:locale/collections/(.*)',
		'/product',
		'/:locale/product',
		'/product/(.*)',
		'/:locale/product/(.*)',
		'/products',
		'/:locale/products',
		'/products(.*)',
		'/:locale/products(.*)',
		'/contact',
		'/:locale/contact',
		'/kontakt',
		'/:locale/kontakt',
	],
});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
