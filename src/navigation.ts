import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'pl'] as const;
export const localePrefix = 'as-needed' as const;
export const defaultLocale = 'pl' as const;
export const pathnames = {
  '/contact': {
    en: '/contact',
    pl: '/kontakt',
  },
} as const;

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames,
});
