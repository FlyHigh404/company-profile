import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import NavigationBar from "@/components/shared/NavigationBar";
import ProductSection from "@/components/home/product-section";

import CareerSection from "@/components/home/career-section";
import ContactForm from "@/components/home/contact-form";
export default function Home() {
	return (
		<main className="pt-16">
			<NavigationBar />
			<HeroSection />
			<AboutSection />
			<ProductSection />
			<CareerSection />
			<ContactForm />
			<Footer />
		</main>
	);
}
