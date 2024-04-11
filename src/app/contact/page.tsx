import { ContactForm } from '@/app/contact/ContactForm';

export default async function ContactPage() {
	return (
		<section className="mx-auto w-full max-w-sm p-8">
			<h1>Contact</h1>
			<ContactForm />
		</section>
	);
}
