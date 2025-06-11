import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import NavigationBar from "@/components/shared/NavigationBar";
import ProductSection from "@/components/home/product-section";

export default function HomePage() {
	return (
		<main className="pt-16">
			<NavigationBar />
			<HeroSection />
			<AboutSection />
			<ProductSection />
			<Footer />
		</main>
	);
}
