import { cookies } from 'next/headers';
import { redirect } from '@/navigation';
import { executeGraphQL } from '@/api/qraphqlApi';
import { CartGetByIdDocument } from '@/gql/graphql';
import { priceFormatter } from '@/utils/price-formatter';
import { ChangeQuantity } from '@/ui/atoms/button/change-quantity/ChangeQuantity';
import { RemoveButton } from '@/ui/atoms/button/remove-item/RemoveButton';
import { handlePaymentAction } from '@/actions/payment-actions';

export default async function CartPage() {
	const cartId = cookies().get('cartId')?.value;
	if (!cartId) return redirect('/');

	const { cart } = await executeGraphQL({ query: CartGetByIdDocument, variables: { id: cartId } });
	if (!cart) return redirect('/');

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>
									<ChangeQuantity
										cartId={cart.id}
										itemId={item.product.id}
										quantity={item.quantity}
									/>
								</td>
								<td>{priceFormatter(item.product.price)}</td>
								<td>
									<RemoveButton cartId={cart.id} productId={item.product.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<form action={handlePaymentAction} className="ml-auto">
				<button
					className="rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
					type="submit"
				>
					Płatność
				</button>
			</form>
		</div>
	);
}
