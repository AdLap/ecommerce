'use server';

import { contactSchema, type ContactFormData } from './contactForm.schema';

export const contactAction = async (data: ContactFormData) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	await contactSchema.parseAsync(data);
	console.log('contactAction', { data });
};
