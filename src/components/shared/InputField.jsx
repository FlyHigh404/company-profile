import { useState } from "react";

export function InputField({ label, name, ...props }) {
	const [val, setVal] = useState(props.value || "");

	return (
		<div className="relative w-full flex flex-col gap-2">
			<input
				{...props}
				id={name}
				name={name}
				onChange={(e) => {
					setVal(e.target.value);
					if (props.onChange) props.onChange(e);
				}}
				className="w-full px-2 py-2 border-b border-neutral-500 font-medium tracking-wide typo-b-md text-neutral-800 focus:outline-none focus:ring-0 peer"
			/>

			<label
				htmlFor={name}
				className={`pointer-events-none absolute left-2 font-medium tracking-wide transition-all 
				${
					val
						? "top-0 -translate-y-full typo-b-sm text-neutral-800"
						: "top-1/2 -translate-y-1/2 typo-b-md text-neutral-500 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:typo-b-sm peer-focus:text-neutral-800"
				}
				`}
			>
				{label}
			</label>
		</div>
	);
}

export function TextAreaField({ label, name, ...props }) {
	const [val, setVal] = useState(props.value || "");

	return (
		<div className="relative w-full flex flex-col gap-2">
			<textarea
				{...props}
				id={name}
				name={name}
				onChange={(e) => {
					setVal(e.target.value);
					if (props.onChange) props.onChange(e);
				}}
				className="resize-none w-full px-2 py-2 border-b border-neutral-500 font-medium tracking-wide typo-b-md text-neutral-800 focus:outline-none focus:ring-0 peer"
			/>

			<label
				htmlFor={name}
				className={`pointer-events-none absolute left-2 font-medium tracking-wide transition-all 
					${
						val
							? "top-0 -translate-y-full typo-b-sm text-neutral-800"
							: "top-6 -translate-y-1/2 typo-b-md text-neutral-500 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:typo-b-sm peer-focus:text-neutral-800"
					}`}
			>
				{label}
			</label>
		</div>
	);
}

export function CheckBoxField({ label, name, ...props }) {
	return (
		<div className="flex gap-4">
			<input
				{...props}
				id={name}
				name={name}
				type="checkbox"
				onChange={props.onChange}
				className="size-8 accent-neutral-50 focus:ring-0 focus:outline-none"
			/>
			<label htmlFor={name} className="font-medium typo-b-rg text-neutral-700">
				{label}
			</label>
		</div>
	);
}
