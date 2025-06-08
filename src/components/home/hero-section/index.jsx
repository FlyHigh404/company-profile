"use client";

import HeorBgImage from "@/assets/images/hero-bg.png";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
	const smoothY = useSpring(scrollYProgress, {
		damping: 20,
		stiffness: 80,
		restDelta: 0.001
	});
	const scale = useTransform(smoothY, [0, 0.25], [1, 1.21]);
	const y = useTransform(smoothY, [0, 1], ["0%", "45%"]);

	return (
<<<<<<< HEAD
		<section
			id="hero"
			className="overflow-hidden w-full min-h-screen py-10 flex flex-col items-center justify-evenly gap-8"
		>
			<h1 className="z-10 w-11/12 md:w-10/12 lg:w-11/12 py-4 font-heading leading-none tracking-wide text-start lg:text-center text-[2.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[6rem] typo-gradient">
				Kami mengembangkan solusi digital untuk bisnis anda
			</h1>

			<div ref={ref} className="relative w-11/12 lg:w-10/12">
				<motion.div style={{ scale, y }}>
					<Image
						src={HeorBgImage}
						alt="Hero Background"
						width={1000}
						height={600}
						className="w-full object-center object-cover aspect-[10/10] sm:aspect-[10/8] lg:aspect-[10/5]"
					/>
				</motion.div>
				<motion.div
					style={{ scale, y }}
					className="absolute top-0 left-0 size-full bg-gradient-to-b from-transparent via-transparent to-neutral-50"
				/>
			</div>

			<div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
				<p className="w-9/12 sm:w-7/12 lg:w-6/12 font-body font-bold text-center text-2xl sm:text-4xl lg:text-5xl text-neutral-700">
					Inovasi Teknologi untuk Mobilitas yang Lebih Hijau dan Terintegrasi
				</p>

				<Link
					href="#product"
					className="py-2 px-8 md:px-10 rounded-full bg-gradient-to-r gradient-color font-body font-semibold leading-relaxed text-base sm:text-xl lg:text-2xl text-neutral-50"
				>
					Cari Tahu Solusi Kami
				</Link>
=======
	<section id="home" className=" px-[20px] md:px-[80px] lg:px-[80px]">
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="typo-h3 md:typo-h2 lg:typo-h1  leading-none bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text mt-10 py-5 md:py-6 lg:py-8 ">Kami mengembangkan solusi digital  untuk bisnis anda</h1>
			<div className="py-2 md:py-4 lg:py-6">
				{/* linear gradient white at bottom image to hide the bottom of the image */}
			<Image className="" src="/images/hero2.png" alt="Hero Background" width={1239.5} height={633.8} />
			</div>
			<div>
				<h1 className="typo-h4 md:typo-h3 lg:typo-h2 pb-6 md:pb-9 lg:pb-8 text-neutral-700 px-[30px] md:px-[230px] lg:px-[300px] cursor-default">Inovasi Teknologi untuk Mobilitas yang Lebih Hijau dan Terintegrasi</h1>
				
				<a href="#product"><span className="typo-b-sm md:typo-b-md lg:typo-b-md font-[600] bg-gradient-to-r from-[#EF9419] to-[#C94F1E] p-2.5 md:p-4 px-6 md:px-10  text-neutral-50 rounded-[30px]">Cari Tahu Solusi Kami</span></a>
>>>>>>> nav-products
			</div>
		</section>
	);
}
