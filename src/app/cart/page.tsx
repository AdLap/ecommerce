import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { executeGraphQL } from '@/api/qraphqlApi';
import { CartGetByIdDocument } from '@/gql/graphql';
import { priceFormatter } from '@/utils/price-formatter';
import { ChangeQuantity } from '@/ui/atoms/button/change-quantity/ChangeQuantity';
import { RemoveButton } from '@/ui/atoms/button/remove-item/RemoveButton';

export default async function CartPage() {
	const cartId = cookies().get('cartId')?.value;
	if (!cartId) redirect('/');

	const { cart } = await executeGraphQL({ query: CartGetByIdDocument, variables: { id: cartId } });
	if (!cart) redirect('/');

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
		</div>
	);
}
