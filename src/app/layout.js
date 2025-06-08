import "@/styles/globals.css";

export const metadata = {
	title: "FlyHigh",
	description: "FLyHigh Company Profile"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main className="pt-15">
					{children}
				</main>
			</body>
		</html>
	);
}
