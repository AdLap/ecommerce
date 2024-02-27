import { type BasePageLayoutProps } from '@/ui/types/types';

export default function CollectionsLayout({ children }: BasePageLayoutProps) {
	return children;
}

export const generateStaticParams = async () => {
	return [
		{ collection: 'Summer Vibes' },
		{ collection: 'New Arrivals' },
		{ collection: 'Elegant Extras' },
	];
};
