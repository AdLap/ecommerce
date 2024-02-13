import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/product/ProductsList";

export type ProductsLayoutProps = {
	children: React.ReactNode;
};

export default async function ProductsLayout({ children }: ProductsLayoutProps) {
	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 bg-white pt-32">
			<aside className="col-span-3 px-8 py-4 shadow-xl">
				<h2 className="mb-4 text-xl font-bold">Polecane produkty</h2>
				<Suspense fallback={<p>Ładowanie...</p>}>
					<ProductsList page={3} isSidebar={true} />
				</Suspense>
			</aside>
			<main className="col-span-9 px-8 py-4 shadow-xl">{children}</main>
		</div>
	);
}
