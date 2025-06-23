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
			{...props}
			style={{
				backgroundSize: "300% 100%"
			}}
			className={`font-semibold tracking-wide text-neutral-50 w-fit px-8 py-4 rounded-full bg-gradient-to-l from-[#ef9419] via-[#c94f1e] to-[#ef9419] bg-left-bottom flex justify-center hover:bg-right-top hover:scale-102 active:scale-102 disabled:opacity-70 transition-all duration-300 ${props.className}`}
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
				backgroundSize: "300% 100%"
			}}
			className={`font-semibold tracking-wide text-neutral-50 w-fit px-8 py-4 rounded-full bg-gradient-to-l from-[#ef9419] via-[#c94f1e] to-[#ef9419] bg-left-bottom flex justify-center hover:bg-right-top hover:scale-102 active:scale-102 disabled:opacity-70 transition-all duration-300 ${props.className}`}
		>
			{children}
		</Link>
	);
}
