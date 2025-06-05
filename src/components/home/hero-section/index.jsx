import Image from "next/image";
export default function HeroSection() {
	return (
	<section id="hero" className=" px-[20px] md:px-[80px] lg:px-[80px]">
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="typo-h3 md:typo-h2 lg:typo-h1  leading-none bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text mt-10 py-5 md:py-6 lg:py-8 ">Kami mengembangkan solusi digital  untuk bisnis anda</h1>
			<div className="py-2 md:py-4 lg:py-6">
				{/* linear gradient white at bottom image to hide the bottom of the image */}
			<Image className="" src="/images/hero2.png" alt="Hero Background" width={1239.5} height={633.8} />
			</div>
			<div>
				<h1 className="typo-h4 md:typo-h3 lg:typo-h2 pb-6 md:pb-9 lg:pb-8 text-neutral-700 px-[2px] md:px-[50px] lg:px-[300px] cursor-default">Inovasi Teknologi untuk Mobilitas yang Lebih Hijau dan Terintegrasi</h1>
				
				<a href="#"><span className="typo-b-sm md:typo-b-md lg:typo-b-md font-[600] bg-gradient-to-r from-[#EF9419] to-[#C94F1E] p-2.5 md:p-4 px-6 md:px-10  text-neutral-50 rounded-[30px]">Cari Tahu Solusi Kami</span></a>
			</div>
		</div>
	</section>
	);
}
