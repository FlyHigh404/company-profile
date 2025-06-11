'use client'

import Hero from "@/components/career/hero";
import ListJob from "@/components/career/list-job";
import Testimoni from "@/components/career/testimoni";
import NavigationBar from "@/components/shared/NavigationBar";
import Footer from "@/components/shared/Footer";
export default function Career() {
	return (
		<main>
			<NavigationBar />
			<Hero />
			<ListJob />
			<Testimoni />
			<Footer />
		</main>
	);
}
