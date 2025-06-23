"use client";

import Linkedin from "@/assets/icons/Linkedin";
import Twitter from "@/assets/icons/Twitter";
import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import ArrowToTop from "@/assets/icons/ArrowToTop";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function Footer() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
	const smoothY = useSpring(scrollYProgress, {
		damping: 25,
		stiffness: 80
	});
	const y = useTransform(smoothY, [0, 1], ["100%", "0%"]);

	return (
		<footer ref={ref} className="overflow-clip">
			<motion.div
				style={{ y }}
				className="relative w-full pb-24 pt-8 lg:pt-0 lg:pb-16 px-6 sm:px-10 md:px-16 lg:px-6 xl:px-12 border-t-2 border-neutral-200 bg-neutral-50 flex flex-col-reverse lg:flex-row justify-between gap-6"
			>
				<div className="-mt-4 sm:-mt-10 lg:mt-0 flex flex-col gap-2">
					<span className="font-heading font-bold leading-[125%] text-[calc(1.5rem+20vw)] sm:text-[calc(2.5rem+20vw)] lg:text-[calc(2rem+12vw)] typo-gradient">
						FlyHigh
					</span>
					<p className="font-medium typo-b-md text-neutral-600">© Copyright {new Date().getFullYear()} by Fly High</p>
				</div>

				<div className="lg:pt-10 flex flex-col sm:flex-row sm:justify-between gap-8 xl:gap-16">
					<div className="typo-b-md text-neutral-700 flex flex-col gap-2">
						<p className="font-bold typo-b-lg">Navigasi</p>

						<Link className="underline underline-offset-2" href="/#about">
							Tentang Kami
						</Link>

						<Link className="underline underline-offset-2" href="/#services">
							Layanan
						</Link>

						<Link className="underline underline-offset-2" href="/#contact">
							Kontak
						</Link>

						<Link className="underline underline-offset-2" href="/#career">
							Makro
						</Link>
					</div>

					<div className="typo-b-md text-neutral-700 flex flex-col gap-2">
						<p className="font-bold typo-b-lg">Hubungi Kami</p>

						<Link className="underline underline-offset-2" href="mailto:flyhighsinergi.idn@gmail.com">
							flyhighsinergi.idn@gmail.com
						</Link>

						<Link className="underline underline-offset-2" href="tel:+6285141168042">
							+62 851-4116-8042
						</Link>
					</div>

					<div className="flex sm:flex-col items-center gap-6">
						<Link target="_blank" href="https://www.linkedin.com/company/cv-flyhigh-sinergi-indonesia">
							<Linkedin />
						</Link>
						<Link target="_blank" href="https://www.instagram.com/flyhighcorp_/">
							<Instagram />
						</Link>
						<Link target="_blank" href="https://www.facebook.com/flyhighsinergi">
							<Facebook />
						</Link>
						<Link target="_blank" href="https://twitter.com/flyhighsinergi">
							<Twitter />
						</Link>
					</div>
				</div>

				{/* Back To Top */}
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="cursor-pointer absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-2"
				>
					<ArrowToTop />
					<p className="typo-b-md text-neutral-800">Kembali Ke Atas</p>
				</button>
			</motion.div>
		</footer>
	);
}
