import React, { useEffect, useState } from "react";
export type ButtonVariations = "solid" | "outline" | "ghost";
type Props = {
	title: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	type?: "submit" | "button";
	className?: string;
	variation?: ButtonVariations;
	color?: string;
};

const Button: React.FC<Props> = React.memo(
	({ title, onClick, type = "button", variation = "outline", color, className }: Props) => {
		const [buttonType, setButtonType] = useState<ButtonVariations>("outline");
		useEffect(() => {}, []);
		// bu kadar da componentleştirmeye gerek olmayabilir
		return (
			<button
				onClick={onClick}
				type={type}
				className='border rounded-md px-3 py-1 hover:'
				style={{ borderColor: color ? color : undefined, color: color ? color : undefined }}
			>
				{title}
			</button>
		);
	},
);

export default Button;
