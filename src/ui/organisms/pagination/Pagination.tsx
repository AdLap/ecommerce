// import { ChevronLeft } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/link/ActiveLink";
import { type FetchedProductItem } from "@/ui/types/types";

export type PaginationProps = {
	currentPage: number;
	productsNumber: number;
};

export const Pagination = async ({ currentPage, productsNumber }: PaginationProps) => {
	const take = -1;
	const offset = productsNumber;
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}`);
	const result = (await response.json()) as FetchedProductItem[];
	const totalProductsNumber = result.length;
	const pagesNumber = Math.ceil(totalProductsNumber / offset);

	return (
		<div className="mx-auto mt-4 flex w-[440px] justify-center" aria-label="pagination">
			{currentPage > 1 && (
				<>
					{currentPage > 3 && <ActiveLink href={`/products/1`}>Pierwsza</ActiveLink>}
					<ActiveLink href={`/products/${currentPage - 1}`}>Poprzednia</ActiveLink>
					{currentPage > 2 && (
						<ActiveLink href={`/products/${currentPage - 2}`}>{currentPage - 2}</ActiveLink>
					)}
					<ActiveLink href={`/products/${currentPage - 1}`}>{currentPage - 1}</ActiveLink>
					<ActiveLink href={`/products/${currentPage}`} isDisabled={true}>
						{currentPage}
					</ActiveLink>
				</>
			)}

			{currentPage < pagesNumber && (
				<>
					{currentPage < pagesNumber - 1 && (
						<ActiveLink href={`/products/${currentPage + 1}`}>{currentPage + 1}</ActiveLink>
					)}
					{currentPage < pagesNumber - 2 && (
						<ActiveLink href={`/products/${currentPage + 2}`}>{currentPage + 2}</ActiveLink>
					)}
					<ActiveLink href={`/products/${pagesNumber}`}>{pagesNumber}</ActiveLink>
					<ActiveLink href={`/products/${currentPage + 1}`}>Natępna</ActiveLink>
				</>
			)}
		</div>
	);
};
