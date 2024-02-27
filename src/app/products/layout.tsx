import { type BasePageLayoutProps } from '@/ui/types/types';
import { RelatedProducts } from '@/ui/organisms/products/related/RelatedProducts';

export default async function ProductsLayout({ children }: BasePageLayoutProps) {
	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 ">
			<RelatedProducts productsNumber={4} />
			<main className="col-span-9 px-8 text-neutral-900">{children}</main>
		</div>
	);
}
