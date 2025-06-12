import Image from 'next/image'
import HeroCareer from '@/assets/images/hero-career.png'

export default function Hero() {
  return (
    <section id='start' className="pt-28 px-6 sm:px-[8%] py-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-10 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="typo-h2 lg:typo-h1 font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
            Investasi Pada Pengembangan Talenta
          </h1>
          <p className="text-base md:text-lg text-neutral-700 font-medium leading-relaxed">
            Sebagai bagian dari strategi jangka panjang, FlyHigh menjalankan program MAKRO (Magang Kreatif dan Progresif), sebuah inisiatif akselerasi talenta digital untuk membekali generasi muda dengan pengalaman nyata di industri
            teknologi. Program ini tidak hanya menciptakan pipeline SDM unggul, tetapi juga memperkuat fondasi inovasi internal perusahaan.
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
  )
}
