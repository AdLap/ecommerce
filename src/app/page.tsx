import { ProductList } from "@/ui/molecules/ProductList";

const products = [
	{
		name: "Metro",
		description: "Stacje metra",
		category: "Podróże",
		price: 100.99,
		image: {
			src: "https://picsum.photos/id/345/250/300",
			alt: "Product 1",
		},
	},
	{
		name: "Tory",
		description: "Objazdówka pociągiem",
		category: "Podróże",
		price: 290.77,
		image: {
			src: "https://picsum.photos/id/233/250/300",
			alt: "Product 2",
		},
	},
	{
		name: "Pole",
		description: "Dożynki",
		category: "Wycieczki",
		price: 3000,
		image: {
			src: "https://picsum.photos/id/98/250/300",
			alt: "Product 3",
		},
	},
	{
		name: "Plaża",
		description: "Utopce",
		category: "Wycieczki",
		price: 630.07,
		image: {
			src: "https://picsum.photos/id/100/250/300",
			alt: "Product 4",
		},
	},
	{
		name: "Most",
		description: "Oszukać przeznaczenie",
		category: "Podróże",
		price: 547.0,
		image: {
			src: "https://picsum.photos/id/84/250/300",
			alt: "Product 5",
		},
	},
	{
		name: "Szpilki",
		description: "Takie tam gadżety",
		category: "Dodatki",
		price: 89.4,
		image: {
			src: "https://picsum.photos/id/21/250/300",
			alt: "Product 6",
		},
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} />
		</main>
	);
}

// flex min-h-screen flex-col items-center justify-between p-24
