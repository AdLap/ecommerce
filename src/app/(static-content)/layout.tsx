export default function StaticLayout({ children }: { children: React.ReactNode }) {
	return <div className="mx-auto max-w-md pt-32 text-center">{children}</div>;
}
