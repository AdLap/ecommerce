// import { ChevronLeft } from "lucide-react";
import { ActiveLink } from '@/ui/atoms/link/ActiveLink';

export type PaginationProps = {
	location: string;
	currentPage: number;
	productsNumber: number;
};

// TODO: fix links, take products number from graphql
export const Pagination = async ({ location, currentPage, productsNumber }: PaginationProps) => {
	// const take = -1;
	const offset = productsNumber;
	// const response = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}`);
	// const result = (await response.json()) as FetchedProductItem[];
	const totalProductsNumber = 500;
	const pagesNumber = Math.ceil(totalProductsNumber / offset);

	return (
		<div className="mx-auto mt-4 flex w-[440px] justify-center" aria-label="pagination">
			{currentPage > 1 && (
				<>
					{currentPage > 3 && <ActiveLink href={`/${location}/1`}>Pierwsza</ActiveLink>}
					<ActiveLink href={`/${location}/${currentPage - 1}`}>Poprzednia</ActiveLink>
					{currentPage > 2 && (
						<ActiveLink href={`/${location}/${currentPage - 2}`}>{currentPage - 2}</ActiveLink>
					)}
					<ActiveLink href={`/${location}/${currentPage - 1}`}>{currentPage - 1}</ActiveLink>
				</>
			)}

			<ActiveLink href={`/${location}/${currentPage}`} isDisabled={true}>
				{currentPage}
			</ActiveLink>

			{currentPage < pagesNumber && (
				<>
					{currentPage < pagesNumber - 1 && (
						<ActiveLink href={`/${location}/${currentPage + 1}`}>{currentPage + 1}</ActiveLink>
					)}
					{currentPage < pagesNumber - 2 && (
						<ActiveLink href={`/${location}/${currentPage + 2}`}>{currentPage + 2}</ActiveLink>
					)}
					<ActiveLink href={`/${location}/${pagesNumber}`}>{pagesNumber}</ActiveLink>
					<ActiveLink href={`/${location}/${currentPage + 1}`}>Natępna</ActiveLink>
				</>
			)}
		</div>
	);
};
