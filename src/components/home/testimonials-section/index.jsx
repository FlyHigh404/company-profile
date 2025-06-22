"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import made from "@/assets/images/testimoni-made.png";
import riska from "@/assets/images/testimoni-riska.png";
import kristin from "@/assets/images/testimoni-kristin.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const testimonials = [
	{
		name: "Made Kamisutara, S.T, M.Kom",
		title: "Dekan Fasilkom - Universitas Narotama",
		quote:
			"“Ini inovasi penting untuk mengurangi emisi gas di kota. Saya sangat mendukung inovasi mahasiswa yang menggabungkan teknologi dengan keberlanjutan untuk kualitas udara yang lebih baik.”",
		image: made
	},
	{
		name: "Ns. Riska Yulia Pujiati, S. Kep",
		title: "Perawat - Siloam Hospitals",
		quote:
			"“Voltwheels tuh gak cuma cepat dan praktis, tapi juga ramah lingkungan. Jadi selain merawat pasien, saya juga ngerawat bumi. Double the impact, double the fun!”",
		image: riska
	},
	{
		name: "Kristin Agustia Yuniar, S.Ak",
		title: "Staff Purchasing - Indorent",
		quote:
			"“Bangga dengan kreativitas anak muda yang tidak hanya mencari keuntungan, tetapi juga memikirkan dampak jangka panjang. Semoga Voltwheels semakin dikenal, berkembang, dan memberikan manfaat.”",
		image: kristin
	}
];

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="bg-white rounded-2xl shadow-lg p-8 mx-4 my-4 flex-1 flex flex-col items-center text-center max-w-sm border border-gray-100 h-[480px]">
			{/* Profile */}
			<div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-orange-100 flex-shrink-0">
				<Image
					src={testimonial.image}
					alt={testimonial.name}
					width={128}
					height={128}
					className="object-cover w-full h-full rounded-full"
				/>
			</div>
			{/* Name */}
			<div className="mt-2 mb-8">
				<h3 className="typo-b-md font-bold bg-gradient-to-r from-[#EF9419] to-[#C94F1E] bg-clip-text text-transparent">
					{testimonial.name}
				</h3>
				<p className="typo-b-sm text-neutral-600 font-medium">{testimonial.title}</p>
			</div>

			{/* Quote */}
			<div className="mb-1 flex-1 flex">
				<p className="typo-b-sm text-neutral-700 leading-relaxed italic">{testimonial.quote}</p>
			</div>
		</div>
	);
};

const TestimonialSlider = () => {
	const [_, setSwiper] = useState(null);

	return (
		<div className="w-full">
			<Swiper
				breakpoints={{
					340: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					640: {
						slidesPerView: 1.5,
						spaceBetween: 24
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 32
					}
				}}
				freeMode={true}
				pagination={false}
				modules={[FreeMode, Pagination]}
				className="max-w-[95vw] lg:max-w-[85vw] xl:max-w-[80vw]"
				loop={true}
				onSwiper={(swiper) => {
					setSwiper(swiper);
				}}
			>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide key={index}>
						<TestimonialCard testimonial={testimonial} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

const TestimoniSection = () => {
	return (
		<section id="testimonials" className="relative py-20">
			<div className="relative z-10">
				{/* Header */}
				<div className="flex flex-col items-center justify-center text-center mb-16">
					<h1 className="typo-h1 typo-gradient mb-4">Bagaimana Ulasan Dari Mereka?</h1>
				</div>

				{/* Testimonials */}
				<div className="container mx-auto px-6">
					{/* Mobile/Tablet Slider */}
					<div className="lg:hidden">
						<TestimonialSlider />
					</div>

					{/* Desktop Grid */}
					<div className="hidden lg:flex flex-wrap justify-center gap-6">
						{testimonials.map((testimonial, index) => (
							<TestimonialCard key={index} testimonial={testimonial} />
						))}
					</div>
				</div>

				{/* decorative */}
				<div className="flex justify-center mt-16">
					<div className="w-24 h-1 bg-gradient-to-r gradient-color rounded-full"></div>
				</div>
			</div>
		</section>
	);
};

export default TestimoniSection;
