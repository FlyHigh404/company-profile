import Image from 'next/image';

export default function Hero() {
  return (
    <section className="px-[8%] py-[8%] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">

        {/* Teks */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="typo-h3 md:typo-h2 lg:typo-h1 typo-gradient">
            Investasi Pada Pengembangan Talenta
          </h1>
          <p className="text-lg text-neutral-700 font-semibold leading-relaxed">
            Sebagai bagian dari strategi jangka panjang, FlyHigh menjalankan program MAKRO (Magang Kreatif dan Progresif), sebuah inisiatif akselerasi talenta digital untuk membekali generasi muda dengan pengalaman nyata di industri
            teknologi. Program ini tidak hanya menciptakan pipeline SDM unggul, tetapi juga memperkuat fondasi inovasi internal perusahaan.
          </p>
        </div>

        {/* Gambar */}
        <div className="w-full">
          <Image
            src="/images/hero-career.png"
            alt="Career Hero"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
