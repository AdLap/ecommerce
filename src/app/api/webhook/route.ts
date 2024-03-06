import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export const POST = async (request: NextRequest): Promise<Response> => {
  const body: unknown = await request.json();

  if (typeof body === 'object' && body && 'productId' in body && typeof body.productId === 'string') {
    console.log(`Revalidating /product/${body.productId}`);
    revalidatePath(`/product/${body.productId}`);

    console.log(`Revalidating /api/products`);
    revalidatePath('/api/products');

    return new Response( null, { status: 204 } );
  } else {
    return new Response( null, { status: 400 } );
  }
}