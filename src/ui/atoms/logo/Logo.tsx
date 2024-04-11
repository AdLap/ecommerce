import Image from 'next/image';
import { Link } from '@/navigation';

export const Logo = () => {
	return (
		<Link className="group h-full" href="/">
			<Image
				className="duration-100 ease-in group-hover:translate-x-3 group-hover:translate-y-3"
				src="/logo.png"
				alt="logo"
				width={100}
				height={100}
			/>
		</Link>
	);
};
