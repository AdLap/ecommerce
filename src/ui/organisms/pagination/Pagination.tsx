// import { ChevronLeft } from "lucide-react";
import { getProductTotalNumber } from '@/api/products';
import { ActiveLink } from '@/ui/atoms/link/ActiveLink';

export type PaginationProps = {
	location: string;
	currentPage: string | number;
	productsOnPage: string | number;
};

export const Pagination = async ({ location, currentPage, productsOnPage }: PaginationProps) => {
	const { total } = await getProductTotalNumber();
	const currentPageNumber = Number(currentPage);
	const pagesNumber = Math.ceil(total / Number(productsOnPage));

	return (
		<div className="mx-auto mt-4 flex w-[440px] justify-center" aria-label="pagination">
			{currentPageNumber > 1 && (
				<>
					{currentPageNumber > 3 && <ActiveLink href={`/${location}/1`}>Pierwsza</ActiveLink>}
					<ActiveLink href={`/${location}/${currentPageNumber - 1}`}>Poprzednia</ActiveLink>
					{currentPageNumber > 2 && (
						<ActiveLink href={`/${location}/${currentPageNumber - 2}`}>
							{currentPageNumber - 2}
						</ActiveLink>
					)}
					<ActiveLink href={`/${location}/${currentPageNumber - 1}`}>
						{currentPageNumber - 1}
					</ActiveLink>
				</>
			)}

			<ActiveLink href={`/${location}/${currentPage}`} isDisabled={true}>
				{currentPage}
			</ActiveLink>

			{currentPageNumber < pagesNumber && (
				<>
					{currentPageNumber < pagesNumber - 1 && (
						<ActiveLink href={`/${location}/${currentPageNumber + 1}`}>
							{currentPageNumber + 1}
						</ActiveLink>
					)}
					{currentPageNumber < pagesNumber - 2 && (
						<ActiveLink href={`/${location}/${currentPageNumber + 2}`}>
							{currentPageNumber + 2}
						</ActiveLink>
					)}
					<ActiveLink href={`/${location}/${pagesNumber}`}>{pagesNumber}</ActiveLink>
					<ActiveLink href={`/${location}/${currentPageNumber + 1}`}>Natępna</ActiveLink>
				</>
			)}
		</div>
	);
};
