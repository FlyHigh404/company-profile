"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import ServiceSlider from "./ServiceSlider";

const useIntersectionObserver = (threshold = 0.3) => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return { sectionRef, inView };
};

const ActionButton = ({ href, children }) => (
    <a 
        href={href} 
        className="inline-block py-3 md:py-3.5 px-6 md:px-8 bg-gradient-to-r from-[#f1740d] to-[#f4541c] text-white rounded-[32px] font-medium no-underline shadow-[0_2px_8px_rgba(244,84,28,0.08)] transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#f4541c] hover:to-[#f1740d] typo-b-md"
    >
        {children}
    </a>
);

function ProductSectionHeading() {
	return (
	<section id="hero" className=" px-[20px] md:px-[80px] lg:px-[80px]">
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="typo-h3 md:typo-h2 lg:typo-h1  leading-none bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text mt-10 py-5 md:py-6 lg:py-8 ">Solusi Inovatif FlyHigh</h1>
		</div>
	</section>
	);
}

function VoltwheelsSection() {
    const { sectionRef, inView } = useIntersectionObserver();

    return (
	    <section className="py-12 md:py-16 lg:py-[60px]">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 md:gap-12 max-w-[1600px] mx-auto px-6 md:px-16">
                <div className="flex-1 min-w-[280px] md:min-w-[320px] max-w-full lg:max-w-[460px] text-center lg:text-left">
                    <h1 className="typo-h2 text-neutral-700 flex items-center gap-3 justify-center lg:justify-start">
                        Voltwheels
                    </h1>
                    <p className="typo-b-lg mt-4 md:mt-6 mb-6 md:mb-8 text-neutral-600">
                        Platform super-app kendaraan listrik yang menyediakan solusi mobilitas terintegrasi berbasis EV, mencakup layanan ride-hailing, penyewaan kendaraan listrik, pengiriman barang dan makanan berbasis EV, serta pelacakan kualitas udara dan pengisian daya.
                    </p>
                    <p className="typo-b-lg mb-6 md:mb-8 text-neutral-600">
                        Voltwheels dirancang untuk mendukung mobilitas hijau sekaligus membuka peluang besar dalam pasar mobilitas berkelanjutan yang tengah tumbuh pesat.
                    </p>
                    <ActionButton href="https://voltwheelsindonesia.com/">Jelajahi Voltwheels</ActionButton>
                </div>
                <div
                    ref={sectionRef}
                    className="relative flex flex-col items-center justify-end w-full lg:w-auto group overflow-hidden min-h-[600px] md:min-h-[820px] flex-1"
                >
                    <Image
                        src="/images/voltwheels-logo.png"
                        alt="Voltwheels Logo"
                        width={1000}
                        height={150}
                        className={`absolute top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out z-30 w-[120px] md:w-[550px] ${inView ? 'opacity-100' : 'opacity-0'}`}
			/>
                    <div className="relative w-full h-full pt-24 pb-8 md:pb-16">
                        <Image
                            src="/images/voltwheels-app.png"
                            alt="Voltwheels App Screenshots"
                            width={1200}
                            height={1000}
                            className={`absolute left-2/4 -translate-x-1/2 bottom-4 md:bottom-12 z-10 w-[320px] md:w-[480px] lg:w-[880px] h-auto object-contain transition-all duration-700 delay-100 ease-out
                                ${inView ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-40'}`}
				/>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-32 md:h-65 bg-gradient-to-t from-neutral-50 via-neutral-50/100 to-transparent pointer-events-none z-40" />
                </div>
            </div>
        </section>
    );
}

function BetulinSection() {
    const { sectionRef, inView } = useIntersectionObserver();

    return (
	<section className="py-12 md:py-16 lg:py-[60px]">
	    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 max-w-[1580px] mx-auto px-6 md:px-16">
		<div
		    ref={sectionRef}
		    className="relative flex flex-col items-center justify-end w-full lg:w-auto group overflow-hidden min-h-[600px] md:min-h-[820px] flex-1"
		>
		    <Image
			src="/images/betulin-logo.png"
			alt="Betulin Logo"
			width={600}
			height={380}
			className={`absolute top-1/8 left-3/5 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out z-30 w-[120px] md:w-[320px] ${inView ? 'opacity-100' : 'opacity-0'}`}
		    />
		    <div className="relative w-full h-full pt-24 pb-8 md:pb-16">
			<Image
			    src="/images/betulin-mascot.png"
			    alt="Betulin Mascot"
			    width={350}
			    height={500}
			    className={`absolute left-1/6 -translate-x-[60%] bottom-8 md:bottom-16 z-20 w-[90px] md:w-[150px] lg:w-[300px] transition-all duration-700 delay-200 ease-out
				${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
			/>
			<Image
			    src="/images/betulin-app.png"
			    alt="Betulin App Screenshot"
			    width={1200}
			    height={1000}
			    className={`absolute left-3/5 -translate-x-1/2 bottom-8 md:bottom-16 z-10 w-[180px] md:w-[260px] lg:w-[680px] h-auto object-contain transition-all duration-700 delay-100 ease-out
				${inView ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-40'}`}
			/>
		    </div>
		    <div className="absolute bottom-0 left-0 w-full h-48 md:h-40 bg-gradient-to-t from-neutral-50 via-neutral-50/100 to-transparent pointer-events-none z-40" />
		</div>
		<div className="flex-1 min-w-[280px] md:min-w-[320px] max-w-full lg:max-w-[460px] text-center lg:text-left">
		    <h1 className="typo-h2 text-neutral-700">Betulin</h1>
		    <p className="typo-b-lg mt-4 md:mt-6 mb-6 md:mb-8 text-neutral-600">
			Platform digital layanan purna jual untuk kendaraan listrik roda dua, menghubungkan pengguna dengan bengkel, mekanik, marketplace suku cadang, pengisian daya, pengingat perawatan, konsultasi, dan fitur konsultasi berbasis teknologi.
		    </p>
		    <p className="typo-b-lg mb-6 md:mb-8 text-neutral-600">
			Betulin hadir sebagai fondasi infrastruktur teknis kendaraan listrik, dengan model bisnis multi-sided yang scalable dan berpotensi menjadi standar baru dalam layanan purna jual kendaraan listrik di Indonesia.
		    </p>
		    <ActionButton href="#">Jelajahi Betulin</ActionButton>
		</div>
	    </div>
	</section>
    );
}

function ServiceSection() {
    return (
        <section id="service" className="bg-neutral-50 py-20 md:py-24 lg:py-28">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
                <h2 className="typo-h2 text-neutral-800">
                    Jasa Digital
                </h2>
                <p className="typo-b-lg md:mt-6 mb-8 md:mb-10 text-neutral-600 max-w-3xl">
                    Kami bantu bisnis Anda lepas landas dengan solusi UI/UX, website, aplikasi mobile, dan layanan teknologi lainnya yang cepat, tepat, dan profesional.
                </p>
                <ActionButton href="#">Dapatkan Solusi Anda</ActionButton>
            </div>
            <div>
                <ServiceSlider />
            </div>
        </section>
    );
}

export default function ProductSection() {
    return (
	    <>
	    <section id="product">
            <ProductSectionHeading />
            <VoltwheelsSection />
            <BetulinSection />
            <ServiceSection />
	    </section>
        </>
    );
}