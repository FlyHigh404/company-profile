import Image from "next/image";
export default function HeroSection() {
	return (
	<section id="hero" className="min-h-screen px-[20px] md:px-[80px] lg:px-[80px]">
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="typo-hero-h1 md:typo-h1 lg:typo-h1  leading-none bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text mt-10 py-5 md:py-6 lg:py-8 ">Kami mengembangkan solusi digital  untuk bisnis anda</h1>
			<div className="py-2 md:py-4 lg:py-6">
			<Image className="" src="/images/hero2.png" alt="Hero Background" width={1239.5} height={633.8} />
			</div>
			<div>
				<h1 className="typo-h2 pb-8 md:pb-9 lg:pb-10 text-neutral-700 px-[50px] md:px-[20px] lg:px-[220px] cursor-default">Inovasi Teknologi untuk Mobilitas yang Lebih Hijau dan Terintegrasi</h1>
				
				<a href="#"><span className="text-lg font-semibold bg-gradient-to-r from-[#EF9419] to-[#C94F1E] p-2.5 md:p-4 px-6 md:px-10  text-neutral-50 rounded-[30px]">Cari Tahu Solusi Kami</span></a>
			</div>
		</div>
	</section>
	);
}
