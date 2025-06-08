import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import NavigationBar from "@/components/shared/NavigationBar";

export default function Home() {
	return (
		<main>
			<NavigationBar />
			<HeroSection />
			<AboutSection />
			<Footer />
		</main>
	);
} 