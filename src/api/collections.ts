import { executeGraphQLQuery } from '@/api/qraphqlApi';
import { CollectionsGetListDocument } from '@/gql/graphql';

export const getCollectionsList = async () => {
	const response = await executeGraphQLQuery(CollectionsGetListDocument, {});
	if (!response.collections) throw new Error('Collections not found');

	return response.collections.data;
};
