import { type BasePageLayoutProps } from "@/ui/types/types";

export const generateStaticParams = async () => {
	return [{ category: "Jewelery" }, { category: "Toys" }];
};

export default function CategotyProductLayout({ children }: BasePageLayoutProps) {
	return children;
}
