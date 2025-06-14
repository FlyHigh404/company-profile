"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import PortfolioDetailModal from "./PortfolioDetailModal";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import ketika from "@/assets/images/ketika.png";
import vokemons from "@/assets/images/vokemons.png";
import astra from "@/assets/images/astra.png";

const portfolioData = [
    {
        category: "Mobile",
        title: "Ketika",
        description: "Governance Platform untuk Solusi Smart City dengan Integrasi Penyampaian Aspirasi Rakyat hingga Transparansi Data Publik.",
        longDescription: "Jenis Governance Platform untuk solusi Smart City dengan integrasi penyampaian aspirasi rakyat hingga transparasi data publik. KETIKA adalah jendela inovasi yang menghubungkan masyarakat kota dan pemerintah untuk mewujudkan smart city berdaya dan penuh harapan. KETIKA merupakan singkatan dari 'Kota Elektronik Tampung Inovasi, Karya, dan Aspirasi'.",
        portfolioImage: ketika,
        detailImage: ketika,
        technologies: ["Figma", "Dart", "Flutter", "Firebase"],
    },
    {
        category: "Website",
        title: "Vokemons",
        description: "Vokemons GO adalah gim imersif yang memungkinkan pemain merasakan dunia Vokemons dengan cara baru.",
        longDescription: "Vokemons GO adalah gim berbasis web yang menggabungkan teknologi AR untuk pengalaman bermain yang imersif. Pemain dapat menjelajahi dunia virtual dan berinteraksi dengan karakter Vokemons.",
        portfolioImage: vokemons,
        detailImage: vokemons,
        technologies: ["Figma", "Flutter"],
    },
    {
        category: "UI/UX",
        title: "Astra",
        description: "Education App untuk mempelejari kesenian daerah menggunakan Augmented Reality (AR).",
        longDescription: "Astra adalah aplikasi edukasi yang memanfaatkan AR untuk memperkenalkan kesenian daerah kepada generasi muda. Dengan desain UI/UX yang interaktif, belajar menjadi lebih menyenangkan.",
        portfolioImage: astra,
        detailImage: astra,
        technologies: ["Figma"],
    },
];

const PortfolioCard = ({ item, onDetail }) => (
    <div 
        onClick={() => onDetail(item)}
        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.03] cursor-pointer group"
    >
        <div className="p-6">
            <div className="relative w-full h-68 rounded-xl overflow-hidden">
                <Image
                    src={item.portfolioImage}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
        <div className="px-8 pb-8 flex flex-col flex-grow">
            <h3 className="typo-h3 text-neutral-800 font-bold mb-6">{item.title}</h3>
            <p className="typo-b-md text-neutral-600 flex-grow">{item.description}</p>
            <div className="typo-b-md font-semibold text-neutral-800 no-underline self-end mt-12">
                Lihat lebih lanjut <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">&rarr;</span>
            </div>
        </div>
    </div>
);


const FilterButton = ({ category, activeCategory, setCategory }) => (
    <button
        onClick={() => setCategory(category)}
        className={`px-6 py-2.5 rounded-full typo-b-md transition-colors duration-200 cursor-pointer border-neutral-400 border-1
            ${activeCategory === category
                ? 'bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-white'
                : 'hover:bg-neutral-100'
            }`}
    >
        {category}
    </button>
);

export default function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredData = activeCategory === "Semua"
        ? portfolioData
        : portfolioData.filter(item => item.category === activeCategory);

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
        <div className="flex flex-col items-center justify-center text-center">
                <h1 className="typo-h3 md:typo-h2 lg:typo-h1  leading-none bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text mt-10 py-5 md:py-6 lg:py-8 ">Portofolio</h1>
        </div>
            <div className="max-w-[1600px] mx-auto px-6 md:px-16 mb-10">
                <div className="flex flex-col items-start text-center mb-18">
                    <div className="flex flex-wrap justify-start gap-4 mt-8">
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
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="!pb-12"
                >
                    {filteredData.map((item) => (
                        <SwiperSlide key={item.title} className="h-auto">
                           <div className="h-full">
                                <PortfolioCard item={item} onDetail={handleDetail} />
                           </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <PortfolioDetailModal open={modalOpen} onClose={handleCloseModal} data={selectedItem} />
        </section>
    );
}