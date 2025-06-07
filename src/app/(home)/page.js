import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import CareerSection from "@/components/home/career-section";
export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<CareerSection />
			<Footer />
		</main>
	);
}
