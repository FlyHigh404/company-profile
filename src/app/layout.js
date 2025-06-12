import "@/styles/globals.css";

export const metadata = {
	title: "FlyHigh | Solusi Digital Inovatif",
	description:
		"CV FlyHigh Sinergi Indonesia adalah perusahaan berbasis di Surabaya yang membangun ekosistem kendaraan listrik serta menyediakan layanan UI/UX, web app, mobile app, dan penulisan paper berbasis teknologi."
};

export default function HomeLayout({ children }) {
	return (
		<html lang="id">
			<body className="scroll-smooth">{children}</body>
		</html>
	);
}
