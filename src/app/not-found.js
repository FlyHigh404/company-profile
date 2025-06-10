import Link from "next/link";

export default function NotFound() {
	return (
		<main className="w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-neutral-50 via-neutral-50 to-primary-lightest">
			<div className="w-fit flex flex-col gap-4">
				<h1 className="block typo-h1 typo-gradient">404 // Not Found</h1>
				<p className="block w-8/12 font-medium typo-b-lg text-neutral-700">
					Maaf, halaman yang anda cari tidak ditemukan. Kembali ke{" "}
					<Link href="/" className="underline underline-offset-2">
						Halaman Utama
					</Link>
				</p>
			</div>
		</main>
	);
}
