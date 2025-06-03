import "@/styles/globals.css";
import Footer from "@/components/shared/Footer";

export const metadata = {
	title: "FlyHigh",
	description: "FLyHigh Company Profile"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
		
	);
}
