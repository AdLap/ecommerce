'use client';

import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { contactAction } from '@/app/contact/contactActions';
import { useTypeSafeFormState } from '@/app/contact/useTypeSafeForm';
import { contactSchema } from '@/app/contact/contactForm.schema';

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [state, action] = useTypeSafeFormState(contactSchema, async (data) => {
		await contactAction(data);
		formRef.current?.reset();
	});

	return (
		<form action={action} ref={formRef} className="mt-2 flex flex-col gap-y-2">
			<label>
				<span className="block text-xs text-gray-700">Name:</span>
				<input type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300" />
				{state?.errors.name && <p className="text-red-600">{state.errors.name}</p>}
			</label>
			<label>
				<span className="block text-xs text-gray-700">Email:</span>
				<input type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300" />
				{state?.errors.email && <p className="text-red-600">{state?.errors.email}</p>}
			</label>
			<label>
				<span className="block text-xs text-gray-700">Message:</span>
				<textarea
					name="message"
					rows={5}
					className="mt-1 block max-h-48 min-h-[2.5rem] w-full rounded-md border-gray-300"
				></textarea>
				{state?.errors.message && <p className="text-red-600">{state?.errors.message}</p>}
			</label>
			<SubmitButton />
		</form>
	);
};

const SubmitButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="mt-2 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white disabled:cursor-wait disabled:bg-gray-500"
			disabled={pending}
		>
			Submit
		</button>
	);
};
