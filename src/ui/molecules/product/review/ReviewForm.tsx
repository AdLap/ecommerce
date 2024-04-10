export type ReviewFormProps = {
	productId: string;
};
// @TODO: implement ReviewForm
export const ReviewForm = ({ productId }: ReviewFormProps) => {
	return (
		<form data-testid="add-review-form" className="flex flex-col">
			add review dla produktu o id: {productId}
			<label>
				headline / tytuł recenzji
				<input type="text" />
			</label>
			<label>
				content / treść
				<input type="text" />
			</label>
			<label>
				rating / ocena
				<input type="text" />
			</label>
			<label>
				name / nazwa użytkownika
				<input type="text" />
			</label>
			<label>
				email
				<input type="text" />
			</label>
			<button type="submit">dodaj recenzję</button>
		</form>
	);
};
