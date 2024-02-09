import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link className="h-full" href="/">
			<Image src="/logo.png" alt="logo" width={100} height={100} />
		</Link>
	);
};
