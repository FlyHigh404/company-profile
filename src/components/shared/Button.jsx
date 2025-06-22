import Link from "next/link";

/**
 * Example Usage:
 *
 * <Button
 *    type="submit"
 *    onClick={() => console.log("clicked")}
 *    className="typo-h5 !w-full"
 * >
 *   <Loading /> Submit
 * </Button>
 */
export function Button({ children, ...props }) {
	return (
		<button
			style={{
				backgroundSize: "200% 100%"
			}}
			className={`font-semibold tracking-wider text-neutral-50 w-fit px-8 py-4 rounded-full bg-gradient-to-bl gradient-color bg-left-bottom flex justify-center hover:bg-right-top hover:scale-102 active:scale-102 disabled:opacity-70 transition-all ${props.className}`}
		>
			{children}
		</button>
	);
}

/**
 * Example Usage:
 *
 * <ButtonLink
 *    href="/career"
 *    className="typo-b-lg underline underline-offset-2"
 * >
 *   Career
 * </ButtonLink>
 */
export function ButtonLink({ children, ...props }) {
	return (
		<Link
			{...props}
			style={{
				backgroundSize: "200% 100%"
			}}
			className={`font-semibold tracking-wider text-neutral-50 w-fit px-8 py-4 rounded-full bg-gradient-to-bl gradient-color bg-left-bottom flex justify-center hover:bg-right-top hover:scale-102 active:scale-102 disabled:opacity-70 transition-all ${props.className}`}
		>
			{children}
		</Link>
	);
}
