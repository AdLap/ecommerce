import { executeGraphQL } from '@/api/qraphqlApi';
import { CollectionsGetListDocument } from '@/gql/graphql';

export const getCollectionsList = async () => {
	const response = await executeGraphQL({
		query: CollectionsGetListDocument,
		variables: {},
		next: { revalidate: 60 * 60 * 24 },
	});
	if (!response.collections) throw new Error('Collections not found');

	return response.collections.data;
};
