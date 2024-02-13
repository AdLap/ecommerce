import Link from "next/link";

export default function HomePage() {
	return (
		<section className="flex min-h-[50vh] flex-col items-center justify-evenly">
			<h1 className="text-4xl font-bold">Home</h1>
			<Link href="/products" className="text-xl hover:scale-105">
				Products
			</Link>
		</section>
	);
}
