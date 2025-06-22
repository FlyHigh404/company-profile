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
						priority
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
			</div>
		</section>
	);
}
