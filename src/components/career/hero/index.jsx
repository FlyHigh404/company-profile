import Image from "next/image";
import HeroCareer from "@/assets/images/hero-career.png";

export default function Hero() {
	return (
		<section id="start" className="w-full pt-28 pb-10 sm:px-6 lg:px-16">
			<div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-10 md:gap-4 lg:gap-10 items-center">
				<div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
					<h1 className="typo-h1 typo-gradient">Investasi Pada Pengembangan Talenta</h1>

					<p className="w-10/12 font-medium typo-b-lg text-neutral-700 leading-relaxed">
						Sebagai bagian dari strategi jangka panjang, FlyHigh menjalankan program MAKRO (Magang Kreatif dan
						Progresif), sebuah inisiatif akselerasi talenta digital untuk membekali generasi muda dengan pengalaman
						nyata di industri teknologi. Program ini tidak hanya menciptakan pipeline SDM unggul, tetapi juga memperkuat
						fondasi inovasi internal perusahaan.
					</p>
				</div>

				<div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
					<Image
						src={HeroCareer}
						alt="Career Hero"
						width={800}
						height={600}
						className="w-full h-auto object-contain"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
