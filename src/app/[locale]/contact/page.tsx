import { getTranslations } from 'next-intl/server';
import { ContactForm } from './ContactForm';

export default async function ContactPage() {
	const t = await getTranslations('Contact');
	return (
		<section className="mx-auto w-full max-w-sm p-8">
			<h1>{t('title')}</h1>
			<ContactForm />
		</section>
	);
}
