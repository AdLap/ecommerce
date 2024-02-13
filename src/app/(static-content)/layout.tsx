import { type BasePageLayoutProps } from "@/ui/types/types";

export default function StaticLayout({ children }: BasePageLayoutProps) {
	return <div className="mx-auto max-w-lg pt-32 text-center">{children}</div>;
}
