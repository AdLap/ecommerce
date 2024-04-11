'use client';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from '@/navigation';

export const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('');
	const [timeStamp, setTimeStamp] = useState(0);
	const timeout = 500;
	const router = useRouter();

	const executeSearch = useCallback(
		(query: string) => {
			if (query.length < 2) return;

			router.push(`/search?query=${query}`);
		},
		[router],
	);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		setTimeStamp(e.timeStamp);
	};

	useEffect(() => {
		const searchTimeOut = setTimeout(() => {
			if (timeStamp <= timeStamp + timeout) executeSearch(searchValue);
		}, timeout);

		return () => clearTimeout(searchTimeOut);
	}, [executeSearch, searchValue, timeStamp]);

	return (
		<div className="flex items-center justify-center">
			<form>
				<input
					type="text"
					className="h-12 w-full rounded-md border-2 border-slate-100 px-4"
					placeholder="Search..."
					value={searchValue}
					onChange={onChange}
				/>
			</form>
		</div>
	);
};
