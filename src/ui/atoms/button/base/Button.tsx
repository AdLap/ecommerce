export type ButtonProps = {
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	isDisabled?: boolean;
	onClick?: () => void;
	children: string | React.ReactNode;
};

export const Button = ({
	className,
	type = 'button',
	isDisabled = false,
	onClick,
	children,
}: ButtonProps) => {
	return (
		<button className={className} type={type} onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
};
