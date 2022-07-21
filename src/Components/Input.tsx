import React, { HTMLInputTypeAttribute, useState } from "react";

type Props = {
	type: HTMLInputTypeAttribute | undefined;
	onBlur: (value: string) => void;
	label: string;
	name: string;
};

const Input: React.FC<Props> = React.memo(({ type, onBlur, label, name }: Props) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
		setIsFocused(true);
	};
	const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
		if (event.currentTarget.value) {
			onBlur(event.currentTarget.value);
		} else {
			setIsFocused(false);
		}
	};
	return (
		<div className='flex flex-col items-center justify-center tracking-wide my-3 w-64 relative'>
			<label
				htmlFor={name}
				className={`self-start -z-10 left-2 transition-all duration-200 ease-linear absolute ${
					isFocused ? "-top-5 text-sm" : "top-2 text-xs"
				}`}
			>
				{label}
			</label>
			<input
				type={type}
				onBlur={handleBlur}
				onFocus={handleFocus}
				name={name}
				className='ring-0 outline-none px-1 bg-transparent transition-all w-full duration-200 ease-linear rounded-md border border-white py-1 focus:shadow-md hover:shadow-md'
			/>
		</div>
	);
});

export default Input;
