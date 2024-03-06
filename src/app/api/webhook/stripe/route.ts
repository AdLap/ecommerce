/// <reference types='stripe-event-types' />
import { type NextRequest } from 'next/server';
import Stripe from 'stripe';

export const POST = async (req: NextRequest): Promise<Response> => {
	if (!process.env.STRIPE_SECRET_KEY) return new Response('No Stripe secret key', { status: 500 });
	if (!process.env.STRIPE_WEBHOOK_SECRET)
		return new Response('No Stripe webhook secret', { status: 500 });

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: '2023-10-16',
		typescript: true,
	});

	const signature = req.headers.get('stripe-signature');
	if (!signature) {
		return new Response('No signature', { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(
		await req.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case 'checkout.session.completed':
			console.log('Checkout session completed', event.data.object.metadata?.cartId);
			break;
		case 'payment_intent.succeeded':
			console.log('Payment intent succeeded', event.data.object);
			break;
		default:
			console.log('Unhandled event', event.type);
	}

	return new Response(null, { status: 204 });
};
