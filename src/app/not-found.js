import Link from "next/link";

export default function NotFound() {
	return (
		<main>
			<h1>404 Not Found - You are completely lost!</h1>
			<Link href="/">Back to Home</Link>
		</main>
	);
}
