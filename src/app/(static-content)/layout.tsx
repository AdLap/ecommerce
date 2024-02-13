import { type BasePageLayoutProps } from "@/ui/types/types";

export default function StaticLayout({ children }: BasePageLayoutProps) {
	return <div className="mx-auto max-w-md pt-32 text-center">{children}</div>;
}
