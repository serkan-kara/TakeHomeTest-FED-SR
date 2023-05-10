interface IButtonProps {
	text: string;
	className?: string;
	align?: "left" | "right";
}

const Button: React.FC<IButtonProps> = ({ text, className, align = "left" }) => {
	return (
		<div className={`flex ${align === "right" && "justify-end"}`}>
			<button className={`${className} py-1 px-3 text-white text-sm`}>{text}</button>
		</div>
	);
};

export { Button };
