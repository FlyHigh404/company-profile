"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

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
        portfolioImage: ketika,
    },
    {
        category: "Website",
        title: "Vokemons",
        description: "Vokemons GO adalah gim imersif yang memungkinkan pemain merasakan dunia Vokemons dengan cara baru.",
        portfolioImage: vokemons,
    },
    {
        category: "UI/UX",
        title: "Astra",
        description: "Education App untuk mempelejari kesenian daerah menggunakan Augmented Reality (AR).",
        portfolioImage: astra,
    },
];

const PortfolioCard = ({ item }) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
        <div className="relative w-full h-74">
              <Image
                  src={item.portfolioImage}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
              />
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="typo-h3 text-neutral-800 font-bold mb-6">{item.title}</h3>
            <p className="typo-b-md text-neutral-600 flex-grow">{item.description}</p>
            <a href="#" className="typo-b-md font-semibold text-neutral-800 no-underline self-start mt-16 group">
                Lihat lebih lanjut <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">&rarr;</span>
            </a>
        </div>
    </div>
);


const FilterButton = ({ category, activeCategory, setCategory }) => (
    <button
        onClick={() => setCategory(category)}
        className={`px-6 py-2.5 rounded-full typo-b-md transition-colors duration-200 cursor-pointer border-neutral-400 border-1
            ${activeCategory === category
                ? 'bg-gradient-to-r from-[#f1740d] to-[#f4541c] text-white'
                : 'hover:bg-neutral-100'
            }`}
    >
        {category}
    </button>
);

export default function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filteredData = activeCategory === "Semua"
        ? portfolioData
        : portfolioData.filter(item => item.category === activeCategory);

    return (
        <section id="portfolio">
        <div className="flex flex-col items-center justify-center text-center">
                <h1 className="typo-h3 md:typo-h2 lg:typo-h1  leading-none bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text mt-10 py-5 md:py-6 lg:py-8 ">Portofolio</h1>
        </div>
            <div className="max-w-[1600px] mx-auto px-6 md:px-16">
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
                    pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
                    modules={[FreeMode, Pagination]}
                    className="!pb-12"
                >
                    {filteredData.map((item) => (
                        <SwiperSlide key={item.title} className="h-auto">
                           <div className="h-full">
                                <PortfolioCard item={item} />
                           </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                 <div className="swiper-pagination flex justify-center gap-2 mt-4"></div>
            </div>
        </section>
    );
}