import { type BasePageLayoutProps } from '@/ui/types/types';

export default function CategotyProductLayout({ children }: BasePageLayoutProps) {
	return children;
}

export const generateStaticParams = async () => {
	return [{ category: 'Accessories' }, { category: 'T-shirts' }, { category: 'Hoodies' }];
};
