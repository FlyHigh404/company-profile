export const metadata = {
	title: "FlyHigh | Bangun Karirmu Sekarang",
	description:
		"Jelajahi peluang karier di CV FlyHigh Sinergi Indonesia. Temukan lowongan kerja dan program magang di bidang teknologi digital bersama tim inovatif kami."
};

export default function CareerLayout({ children }) {
	return (
		<html lang="id">
			<body className="scroll-smooth">{children}</body>
		</html>
	);
}
