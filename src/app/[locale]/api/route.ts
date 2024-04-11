import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (_request: NextRequest): Promise<Response> => {
	console.log('request GET');

	return NextResponse.json({ message: 'Hello, World!' });
};
