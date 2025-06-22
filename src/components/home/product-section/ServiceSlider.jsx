import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const sliderData = [
	{
		title: "Website",
		content:
			"Website profesional untuk semua kebutuhan Anda mulai dari company profile hingga desain custom yang sepenuhnya personal.",
		backgroundImage: "https://images.pexels.com/photos/5077048/pexels-photo-5077048.jpeg"
	},
	{
		title: "Aplikasi Mobile",
		content:
			"Solusi aplikasi mobile berbasis Android dan iOS, dikembangkan sesuai dengan tujuan dan kebutuhan spesifik bisnis Anda.",
		backgroundImage: "https://images.pexels.com/photos/3585074/pexels-photo-3585074.jpeg"
	},
	{
		title: "Desain Antarmuka",
		content: "Desain antarmuka dengan pendekatan berpusat pada pengguna, mulai dari wireframe hingga prototipe.",
		backgroundImage: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg"
	},
	{
		title: "Jurnal Ilmiah",
		content:
			"Penulisan jurnal ilmiah dengan standar akademik nasional dan internasional, disusun secara profesional untuk mendukung publikasi bereputasi.",
		backgroundImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
	}
];

export default function App() {
	return (
		<div className="mt-12 flex items-center justify-center font-sans">
			<ServiceSlider />
		</div>
	);
}

const ServiceSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [swiper, setSwiper] = useState(null);

	return (
		<div className="w-full py-8">
			<style>
				{`
        `}
			</style>

			<Swiper
				breakpoints={{
					340: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					700: {
						slidesPerView: 2,
						spaceBetween: 24
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 32
					}
				}}
				freeMode={true}
				pagination={false}
				modules={[FreeMode, Pagination]}
				className="max-w-[95vw] lg:max-w-[85vw] xl:max-w-[80vw]"
				loop={true}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				onSwiper={(swiper) => {
					setSwiper(swiper);
					setActiveIndex(swiper.realIndex);
				}}
			>
				{sliderData.map((item) => (
					<SwiperSlide key={item.title}>
						<div
							className="relative flex flex-col justify-end group rounded-2xl shadow-lg overflow-hidden h-[360px]"
							style={{
								backgroundImage: `url(${item.backgroundImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center"
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500 z-10" />
							<div className="relative z-20 p-6 flex flex-col items-start h-full justify-center text-center">
								<h1
									className="typo-h2 font-bold text-neutral-100 mb-10 drop-shadow-lg w-full transition-all duration-500
                  group-hover:mb-2 translate-y-8 scale-100 group-hover:translate-y-0 group-hover:scale-90"
								>
									{item.title}
								</h1>
								<p className="typo-b-lg text-neutral-100 drop-shadow-lg w-full mb-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 group-hover:translate-y-0 -translate-y-2 transition-all duration-500 overflow-hidden">
									{item.content}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex justify-center gap-6 mt-12">
				{sliderData.map((_, idx) => (
					<button
						key={idx}
						onClick={() => swiper.slideToLoop(idx)}
						className={`h-1.5 md:h-2 w-6 md:w-8 rounded-full transition-colors duration-300 cursor-pointer hover:bg-neutral-400 ${
							activeIndex === idx ? "bg-neutral-500" : "bg-neutral-300"
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
};
