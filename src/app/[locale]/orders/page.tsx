import { currentUser } from '@clerk/nextjs';
import { executeGraphQL } from '@/api/qraphqlApi';
import { OrdersGetByEmailDocument } from '@/gql/graphql';

export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;

	if (!email) {
		return <p>Nie znaleziono adresu email</p>;
	}

	const {
		orders: { data: orders },
	} = await executeGraphQL({
		query: OrdersGetByEmailDocument,
		variables: { email },
	});

	return (
		<div>
			<h1>{user.firstName} Zamówienia</h1>
			<ul>
				{orders.map((order) => (
					<li key={order.id}>
						<p>{order.id}</p>
						<p>{order.status}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
