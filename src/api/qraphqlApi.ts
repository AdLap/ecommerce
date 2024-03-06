import { type TypedDocumentString } from '@/gql/graphql';

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphQL = async <TResult, TVariables>(
	{
		query,
		variables,
		next,
		cache,
		headers,
	}: {
		query: TypedDocumentString<TResult, TVariables>;
		variables: TVariables;
		next?: NextFetchRequestConfig | undefined;
		cache?: RequestCache;
		headers?: HeadersInit;
	} /*& (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables })*/,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error('GraphQL URL is not defined');
	}

	const response = await fetch(process.env.GRAPHQL_URL, {
		method: 'POST',
		body: JSON.stringify({
			query,
			variables,
		}),
		next,
		cache,
		headers: { ...headers, 'Content-Type': 'application/json' },
	});
	const result = (await response.json()) as GraphQLResponse<TResult>;

	if (result.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: result.errors,
		});
	}

	return result.data;
};
