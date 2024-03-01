import { notFound } from "next/navigation";
import { searchProducts } from "@/api/products";

export type SearchPageProps = {
  searchParams: Record<string, string>;
};

export default async function SearchPage({ searchParams: { query } }: SearchPageProps) {
  if (!query) return notFound();

  const products = await searchProducts(query);
  return (
    <>
      <h2>Search Page</h2>
      {products && products.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  )
}
