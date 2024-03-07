'use client';

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<html lang="pl">
			<body>
				<div>
					<h2>There was an error!</h2>
					<button onClick={() => reset()}>Reset</button>
				</div>
			</body>
		</html>
	);
}
