"use client";

import LogoImage from "@/assets/images/flyhigh-logo.png";
import { InfiniteElement } from "@/components/shared/animations/InfiniteElement";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const data = {
	about: [
		"CV FlyHigh Sinergi Indonesia adalah perusahaan teknologi berbasis di Surabaya yang berfokus pada pengembangan ekosistem kendaraan listrik (EV) di Indonesia.",
		"Didirikan pada tahun 2024, FlyHigh hadir sebagai entitas strategis yang mengintegrasikan inovasi digital, layanan mobilitas, dan infrastruktur pendukung EV untuk mendorong adopsi kendaraan listrik secara menyeluruh dan berkelanjutan.",
		"FlyHigh memposisikan diri sebagai akselerator dalam transisi menuju mobilitas ramah lingkungan di Indonesia melalui pengelolaan produk Voltwheels dan Betulin."
	],
	vision: [
		"Menjadi katalis utama dalam pengembangan ekosistem kendaraan listrik nasional melalui inovasi digital yang terintegrasi, scalable, dan berorientasi pada pertumbuhan berkelanjutan"
	],
	mission: [
		"Membangun dan mengembangkan platform berbasis teknologi yang mendorong percepatan adopsi kendaraan listrik di Indonesia.",
		"Menyediakan solusi terintegrasi dalam ekosistem kendaraan listrik untuk membangun rantai nilai yang berkelanjutan dan mempercepat transisi menuju mobilitas hijau.",
		"Menjalin kemitraan strategis dengan pemangku kepentingan dari sektor publik, swasta, dan komunitas untuk memperluas jangkauan dan dampak sosial-ekonomi.",
		"Meningkatkan daya saing melalui efisiensi operasional, optimalisasi teknologi, dan pendekatan bisnis berbasis data.",
		"Menjadi entitas bisnis yang visioner, adaptif, dan berintegritas tinggi dalam menjawab tantangan transisi energi dan masa depan mobilitas."
	],
	investReason: [
		"Market-Driven: Menjawab kebutuhan mendesak akan transisi energi dan kendaraan listrik di Indonesia.",
		"Integrated Ecosystem: Dua produk saling menguatkan untuk membentuk rantai nilai EV yang utuh dan berkelanjutan.",
		"Scalability: Platform dirancang untuk ekspansi nasional, dengan potensi integrasi lintas kota dan wilayah.",
		"Tech-Enabled Differentiation: Pendekatan berbasis data dan digitalisasi penuh pada layanan dan infrastruktur.",
		"Future-Oriented: Fokus pada green economy, smart mobility, dan digital transformation yang sejalan dengan arah kebijakan nasional."
	]
};

const iconVars = {
	close: {
		rotate: 0
	},
	open: {
		rotate: 90
	}
};
const expandWrapVars = {
	close: {
		height: 0,
		transition: { staggerChildren: 0.05, delay: 0.1, staggerDirection: -1 }
	},
	open: {
		height: "auto",
		transition: { staggerChildren: 0.05, delayChildren: 0.1, staggerDirection: 1 }
	}
};
const expandItemVars = {
	close: {
		x: -20,
		opacity: 0
	},
	open: {
		x: 0,
		opacity: 1
	}
};
const textRevealVars = {
	close: {
		opacity: 0.3
	},
	open: {
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut"
		}
	}
};

export default function AboutSection() {
	const [expanded, setExpanded] = useState([true, false, false]);
	const handleExpand = (i) => {
		setExpanded((p) => {
			const arr = [...p];
			const val = arr[i];
			arr[i] = !val;
			return arr;
		});
	};

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start center", "end center"]
	});
	const smoothY = useSpring(scrollYProgress, {
		damping: 20,
		stiffness: 40
	});

	return (
		<section id="about" className="w-full min-h-screen">
			{/* Main About */}
			<div ref={ref} className="px-6 lg:px-16 py-16">
				<div className="relative grid grid-cols-1 md:grid-cols-2">
					<div className="px-6 py-12 border-s-2 md:border-s-0 border-neutral-300">
						<h2 className="typo-h1 typo-gradient">Tentang Flyhigh</h2>
					</div>
					<div className="flex px-6 py-12 border-t-2 sm:border-t-0 border-s-2 border-neutral-300 items-center justify-center">
						<Image
							src={LogoImage}
							alt="Flyhigh Logo"
							width={800}
							height={600}
							priority
							className="w-auto h-40 object-cover"
						/>
					</div>

					{data.about.map((text, i) => {
						return i % 2 === 0 ? (
							<Fragment key={i}>
								<div className="hidden md:block px-6 py-12 border-t-2 border-neutral-300" />
								<div className="px-6 py-12 border-t-2 border-s-2 border-neutral-300">
									<motion.p
										variants={textRevealVars}
										initial="close"
										whileInView={"open"}
										viewport={{ once: true, amount: "all" }}
										className="font-semibold typo-b-lg text-neutral-600"
									>
										{text}
									</motion.p>
								</div>
							</Fragment>
						) : (
							<Fragment key={i}>
								<div className="px-6 py-12 border-t-2 border-s-2 md:border-s-0 border-neutral-300">
									<motion.p
										variants={textRevealVars}
										initial="close"
										whileInView={"open"}
										viewport={{ once: true, amount: "all" }}
										className="font-semibold typo-b-lg text-neutral-600"
									>
										{text}
									</motion.p>
								</div>
								<div className="hidden md:block px-6 py-12 border-t-2 border-s-2 border-neutral-300" />
							</Fragment>
						);
					})}

					<motion.div
						style={{ scaleY: smoothY }}
						className="absolute top-0 left:0 md:left-1/2 w-[3px] -translate-x-1/2 h-full bg-gradient-to-t gradient-color origin-top"
					/>
				</div>
			</div>

			{/* Banner */}
			<div className="bg-gradient-to-l gradient-color">
				<InfiniteElement baseVelocity={20}>
					<span className="p-4 typo-h5 tracking-wider text-neutral-50">Lepas Landas Bareng FlyHigh</span>
				</InfiniteElement>
			</div>

			{/* Visi, Misi, Invest */}
			<div className="px-6 md:px-16 py-16">
				{/* Visi */}
				<div
					onClick={() => handleExpand(0)}
					className="cursor-pointer py-4 md:px-8 border-b-3 border-neutral-600 bg-neutral-50 typo-h3 text-neutral-600 hover:text-neutral-900 flex gap-4 items-center"
				>
					<motion.div variants={iconVars} animate={expanded[0] ? "open" : "close"} className="typo-gradient">
						+
					</motion.div>
					<h3>Visi Kami</h3>
				</div>
				<div className="md:px-10 py-6">
					<motion.div
						variants={expandWrapVars}
						initial="close"
						animate={expanded[0] ? "open" : "close"}
						className="overflow-hidden flex flex-col gap-4"
					>
						{data.vision.map((text, i) => (
							<motion.div variants={expandItemVars} className="flex gap-4" key={i}>
								<div className="mt-3 size-2 aspect-square rounded-full bg-neutral-500" />
								<p key={i} className="font-semibold text-lg md:text-xl text-neutral-600">
									{text}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Misi */}
				<div
					onClick={() => handleExpand(1)}
					className="cursor-pointer py-4 md:px-8 border-b-3 border-neutral-600 bg-neutral-50 typo-h3 text-neutral-600 hover:text-neutral-900 flex gap-4 items-center"
				>
					<motion.div variants={iconVars} animate={expanded[1] ? "open" : "close"} className="typo-gradient">
						+
					</motion.div>
					<h3>Misi Kami</h3>
				</div>
				<div className="md:px-10 py-6">
					<motion.div
						variants={expandWrapVars}
						initial="close"
						animate={expanded[1] ? "open" : "close"}
						className="overflow-hidden flex flex-col gap-4"
					>
						{data.mission.map((text, i) => (
							<motion.div variants={expandItemVars} className="flex gap-4" key={i}>
								<div className="mt-3 size-2 aspect-square rounded-full bg-neutral-500" />
								<p key={i} className="font-semibold text-lg md:text-xl text-neutral-600">
									{text}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Invest */}
				<div
					onClick={() => handleExpand(2)}
					className="cursor-pointer py-4 md:px-8 border-b-3 border-neutral-600 bg-neutral-50 typo-h3 text-neutral-600 hover:text-neutral-900 flex gap-4 items-center"
				>
					<motion.div variants={iconVars} animate={expanded[2] ? "open" : "close"} className="typo-gradient">
						+
					</motion.div>
					<h3>Mengapa Berinvestasi di FlyHigh?</h3>
				</div>
				<div className="md:px-10 py-6">
					<motion.div
						variants={expandWrapVars}
						initial="close"
						animate={expanded[2] ? "open" : "close"}
						className="overflow-hidden flex flex-col gap-4"
					>
						{data.mission.map((text, i) => (
							<motion.div variants={expandItemVars} className="flex gap-4" key={i}>
								<div className="mt-3 size-2 aspect-square rounded-full bg-neutral-500" />
								<p key={i} className="font-semibold text-lg md:text-xl text-neutral-600">
									{text}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
