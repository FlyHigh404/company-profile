"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import PortfolioDetailModal from "./PortfolioDetailModal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import ketika from "@/assets/images/portofolio-ketika.png";
import vokemons from "@/assets/images/portofolio-vokemons.png";
import astra from "@/assets/images/portofolio-astra.png";
import routerush from "@/assets/images/portofolio-routerush.png";
import voltwheels from "@/assets/images/portofolio-voltwheels.png";
import betulin from "@/assets/images/portofolio-betulin.png";

const portfolioData = [
	{
		category: "Mobile",
		title: "Ketika",
		description:
			"Governance Platform untuk Solusi Smart City dengan Integrasi Penyampaian Aspirasi Rakyat hingga Transparansi Data Publik.",
		longDescription:
			"Jenis Governance Platform untuk solusi Smart City dengan integrasi penyampaian aspirasi rakyat hingga transparasi data publik. KETIKA adalah jendela inovasi yang menghubungkan masyarakat kota dan pemerintah untuk mewujudkan smart city berdaya dan penuh harapan. KETIKA merupakan singkatan dari 'Kota Elektronik Tampung Inovasi, Karya, dan Aspirasi'.",
		portfolioImage: ketika,
		detailImage: ketika,
		technologies: ["Figma", "Dart", "Flutter", "Firebase"]
	},
	{
		category: "Website",
		title: "Vokemons",
		description: "Vokemons GO adalah gim imersif yang memungkinkan pemain merasakan dunia Vokemons dengan cara baru.",
		longDescription:
			"Vokemons GO adalah gim berbasis web yang menggabungkan teknologi AR untuk pengalaman bermain yang imersif. Pemain dapat menjelajahi dunia virtual dan berinteraksi dengan karakter Vokemons.",
		portfolioImage: vokemons,
		detailImage: vokemons,
		technologies: ["Figma", "React", "Tailwind", "PostgreSQL"]
	},
	{
		category: "Mobile",
		title: "Astra",
		description: "Education App untuk mempelejari kesenian daerah menggunakan Augmented Reality (AR).",
		longDescription:
			"Astra adalah aplikasi edukasi yang memanfaatkan AR untuk memperkenalkan kesenian daerah kepada generasi muda. Dengan desain UI/UX yang interaktif, belajar menjadi lebih menyenangkan.",
		portfolioImage: astra,
		detailImage: astra,
		technologies: ["Figma", "Dart", "Flutter", "Firebase"]
	},
	{
		category: "Mobile",
		title: "Routerush",
		description: "AI-Powered Route Optimization untuk solusi efisiensi logistik.",
		longDescription:
			"Jenis AI-Powered Route Optimization untuk solusi efisiensi logistik. Route Rush adalah aplikasi berbasis Android yang mengoptimalkan rute perjalanan menggunakan model machine learning CNN. Route Rush dirancang untuk mengatasi tantangan dalam sektor logistik, membantu perusahaan dan individu merencanakan jalur pengiriman yang lebih cepat, hemat biaya, dan efisien.",
		portfolioImage: routerush,
		detailImage: routerush,
		technologies: ["Figma", "Kotlin", "TensorFlow"]
	},
	{
		category: "Mobile",
		title: "Voltwheels",
		description: "Super App untuk solusi lifestyle menggunakan 100% Kendaraan Listrik.",
		longDescription:
			"Jenis Super App untuk solusi lifestyle menggunakan 100% Kendaraan Listrik. Voltwheels adalah solusi untuk mengurangi jejak karbon yang telah mencemari udara di banyak kota besar. Voltwheels dirancang untuk memenuhi kebutuhan pengguna namun tetap memperhatikan aspek keberlanjutan lingkungan dan juga kesehatan..",
		portfolioImage: voltwheels,
		detailImage: voltwheels,
		technologies: ["Figma", "Dart", "Flutter", "Firebase"]
	},
	{
		category: "Mobile",
		title: "Betulin",
		description: "Multi-sided Platform untuk solusi layanan purna jual sepeda dan motor listrik.",
		longDescription:
			"Jenis Multi-sided Platform untuk solusi layanan purna jual sepeda dan motor listrik. BETULIN adalah aplikasi yang memfasilitasi purna jual kendaraan listrik sebagai bagian dari ekosistem kendaraan listrik di Indonesia dengan komitmen untuk mendukung keberlanjutan, efisiensi, dan kemudahan bagi pengguna kendaraan listrik.",
		portfolioImage: betulin,
		detailImage: betulin,
		technologies: ["Figma", "Dart", "Flutter", "Firebase"]
	}
];

const PortfolioCard = ({ item, onDetail }) => (
	<div
		onClick={() => onDetail(item)}
		className="bg-white rounded-2xl shadow-md flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.03] cursor-pointer group"
	>
		<div className="p-6">
			<div className="relative w-full h-68 rounded-xl overflow-hidden">
				<Image src={item.portfolioImage} alt={item.title} className="w-full h-full object-cover object-center" />
			</div>
		</div>
		<div className="px-8 pb-8 flex flex-col flex-grow">
			<h3 className="typo-h3 text-neutral-800 font-bold mb-6">{item.title}</h3>
			<p className="typo-b-md text-neutral-600 flex-grow">{item.description}</p>
			<div className="typo-b-md font-semibold text-neutral-800 no-underline self-end mt-12">
				Lihat lebih lanjut{" "}
				<span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">&rarr;</span>
			</div>
		</div>
	</div>
);

const FilterButton = ({ category, activeCategory, setCategory }) => (
	<button
		onClick={() => setCategory(category)}
		className={`px-3 md:px-6 py-1.5 md:py-2.5 rounded-full typo-b-sm md:typo-b-md transition-all cursor-pointer border-neutral-300 border
            ${activeCategory === category ? "bg-gradient-to-r gradient-color text-white" : "hover:bg-neutral-100"}`}
	>
		{category}
	</button>
);

export default function PortfolioSection() {
	const [activeCategory, setActiveCategory] = useState("Semua");
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [swiper, setSwiper] = useState(null);
	const [slidesPerView, setSlidesPerView] = useState(1);

	const filteredData =
		activeCategory === "Semua" ? portfolioData : portfolioData.filter((item) => item.category === activeCategory);

	// Calculate how many pagination dots should be shown
	const navigableSlides = Math.max(1, filteredData.length - slidesPerView + 1);

	const handleDetail = (item) => {
		setSelectedItem(item);
		setTimeout(() => {
			setModalOpen(true);
		}, 50);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setTimeout(() => {
			setSelectedItem(null);
		}, 300);
	};

	return (
		<section id="portfolio">
			<h1 className="my-10 text-center typo-h1 typo-gradient">Portofolio</h1>

			<div className="w-full">
				<div className="mb-4 px-6 md:px-16 flex flex-col items-start text-center">
					<div className="flex flex-wrap justify-start gap-4">
						<FilterButton category="Semua" activeCategory={activeCategory} setCategory={setActiveCategory} />
						<FilterButton category="Mobile" activeCategory={activeCategory} setCategory={setActiveCategory} />
						<FilterButton category="Website" activeCategory={activeCategory} setCategory={setActiveCategory} />
						<FilterButton category="UI/UX" activeCategory={activeCategory} setCategory={setActiveCategory} />
					</div>
				</div>

				<Swiper
					breakpoints={{
						340: { slidesPerView: 1, spaceBetween: 20 },
						700: { slidesPerView: 2, spaceBetween: 24 },
						1024: { slidesPerView: 3, spaceBetween: 32 }
					}}
					modules={[Pagination, FreeMode]}
					loop={false}
					freeMode={true}
					onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
					onSwiper={(swiper) => {
						setSwiper(swiper);
						setActiveIndex(swiper.realIndex);
						setSlidesPerView(swiper.params.slidesPerView);
					}}
					onBreakpoint={(swiper) => {
						setSlidesPerView(swiper.params.slidesPerView);
					}}
					className="!px-[4vw] my-6"
				>
					{filteredData.map((item, i) => (
						<SwiperSlide key={i} className="!h-[40rem] py-4">
							<PortfolioCard item={item} onDetail={handleDetail} />
						</SwiperSlide>
					))}
				</Swiper>

				<div className="flex justify-center gap-6 lg:mt-6 mb-10">
					{Array.from({ length: navigableSlides }, (_, idx) => (
						<button
							key={idx}
							onClick={() => swiper.slideTo(idx)}
							className={`h-1.5 md:h-2 w-6 md:w-8 rounded-full transition-colors duration-300 cursor-pointer hover:bg-neutral-400 ${
								activeIndex === idx ? "bg-neutral-500" : "bg-neutral-300"
							}`}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					))}
				</div>
			</div>
			<PortfolioDetailModal open={modalOpen} onClose={handleCloseModal} data={selectedItem} />
		</section>
	);
}
