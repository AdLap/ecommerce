import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/navigation';

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as (typeof locales)[number])) notFound(); // TODO: Fix this type issue

	return {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
