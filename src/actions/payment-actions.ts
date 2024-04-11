'use server';
import { cookies } from 'next/headers';
import Stripe from 'stripe';
import { redirect } from '@/navigation';
import { getCartFromCookies } from '@/api/cart';

export const handlePaymentAction = async () => {
	if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY not set');

	const cart = await getCartFromCookies();
	if (!cart) throw new Error('Cart not found');

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: '2023-10-16',
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ['card', 'blik'],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map((item) => ({
			price_data: {
				currency: 'pln',
				product_data: {
					name: item.product.name,
					// images: [item.product.image],
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: 'payment',
		success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/cancel`,
	});

	if (!checkoutSession.url) throw new Error('No checkout session url');

	cookies().delete('cartId');
	redirect(checkoutSession.url);
};
