import Link from 'next/link';
import { Overlay } from '@/ui/atoms/overlay/Overlay';
import { getCartFromCookies } from '@/api/cart';

export default async function ModalCart() {
	const cart = await getCartFromCookies();
	if (!cart) return null;

	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white">
				<Link href="/cart">Koszyk</Link>
				<ul>
					{cart.items.map((item) => (
						<li key={item.product.id}>{item.product.name}</li>
					))}
				</ul>
			</div>
		</>
	);
}
