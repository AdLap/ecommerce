import { redirect } from 'next/navigation';
import Stripe from 'stripe';

export type CartSuccessPageProps = {
	searchParams: {
		sessionId?: string;
	};
};

export default async function CartSuccessPage({
	searchParams: { sessionId },
}: CartSuccessPageProps) {
	if (!sessionId) redirect('/');
	if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY not set');

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: '2023-10-16',
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(sessionId);

	return (
		<div>
			<h1>Thank you for your purchase!</h1>
			<p>Your order number is: {stripeCheckoutSession.id}</p>
			<p>Payment status: {stripeCheckoutSession.payment_status}</p>

			<p>Status: {stripeCheckoutSession.status}</p>
		</div>
	);
}
