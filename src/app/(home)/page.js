import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import NavigationBar from "@/components/shared/NavigationBar";
import ProductSection from "@/components/home/product-section";
import PortfolioSection from "@/components/home/portofolio-section";
import TestimoniSection from "@/components/home/testimonials-section";
import CareerSection from "@/components/home/career-section";
import ContactForm from "@/components/home/contact-form";

export default function HomePage() {
	return (
		<main className="pt-16">
			<NavigationBar />
			<HeroSection />
			<AboutSection />
			<ProductSection />
			<TestimoniSection />
			<PortfolioSection />
			<CareerSection />
			<ContactForm />
			<Footer />
		</main>
	);
}
