export interface ProductPageProps {
  params: {
    productId: string;
  }
  searchParams: Record<string, string | string[]>;
}

export default function ProductPage({ params, searchParams }: ProductPageProps) {
  const query = searchParams.q?.toString() ?? '';
  return (
    <section>
      <h1 className="text-4xl font-bold">Product</h1>
      <p className="text-2xl">
        {params.productId} - {query}
      </p>
    </section>
  );
}
