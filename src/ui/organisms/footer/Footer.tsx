import { Link } from '@/navigation';

export const Footer = () => {
	return (
		<footer className="py-8 text-center">
			<p>
				© {new Date().getFullYear()}{' '}
				<Link
					href="https://github.com/AdLap"
					target="_blank"
					rel="noopener noreferrer"
				>{`<AdLap />`}</Link>
			</p>
		</footer>
	);
};
