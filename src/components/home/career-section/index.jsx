import Image from "next/image";
import CareerImg1 from "@/assets/images/career-img-1.png";
import CareerImg2 from "@/assets/images/career-img-2.png";
import CareerImg3 from "@/assets/images/career-img-3.png";
import Link from "next/link";
const imageList = [CareerImg1, CareerImg2, CareerImg3];

export default function CareerSection() {
	return (
		<section
			id="karir"
			className="overflow-hidden w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row gap-4 lg:gap-10"
		>
			{/* Image Wrapper */}
			<div className="w-full flex flex-col items-center justify-evenly gap-4">
				{Array.isArray(imageList) &&
					imageList.map((src, i) => (
						<Image
							key={i}
							src={src}
							alt={`Foto MAKRO ${i + 1}`}
							className="w-full min-w-[15rem] max-w-lg aspect-[3/1] rounded-lg shadow-md object-cover"
							width={600}
							height={200}
							priority={i == 0}
						/>
					))}
			</div>

			{/* Content Wrapper */}
			<div className="w-full flex flex-col items-center md:items-start lg:justify-evenly gap-4">
				<h1 className="overflow-visible text-center md:text-left typo-h1 typo-gradient">
					Investasi pada Pengembangan Talenta
				</h1>

				<p className="text-center md:text-left typo-b-lg text-neutral-600">
					Bersama FlyHigh, wujudkan potensi terbaikmu! Kami menghadirkan MAKRO (Magang Kreatif dan Progresif), program
					akselerasi talenta digital yang memberikan pengalaman nyata di industri teknologi untuk membentuk SDM unggul.
					FlyHigh juga membuka berbagai lowongan kerja bagi Anda yang siap bertumbuh dan berkontribusi dalam membangun
					inovasi masa depan.
				</p>

				<Link
					href="/career"
					className="w-fit mt-6 px-10 py-3 rounded-full bg-gradient-to-r gradient-color font-body font-semibold text-lg text-neutral-50 transition duration-300 hover:scale-110"
				>
					Raih Peluangmu!
				</Link>
			</div>
		</section>
	);
}
