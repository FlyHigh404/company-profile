import Image from 'next/image';

export default function CareerSection() {
  const imageList = [
    '/images/image 2.png',
    '/images/image 3.png',
    '/images/image 4.png',
  ];

  return (
    <section id="career" className="w-full min-h-screen px-[8%] py-[5%]">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        
        <div className="flex flex-col gap-6 md:w-1/2 w-full">
          {imageList.map((src, idx) => (
            <div key={idx} className="aspect-[3/1] w-full relative">
              <Image
                src={src}
                alt={`Program MAKRO ${idx + 1}`}
                fill
                className="rounded-lg shadow-md object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:w-1/2 text-center md:text-left gap-10">
          <h1 className="typo-h3 md:typo-h2 lg:typo-h1 bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text">
            Investasi pada Pengembangan Talenta
          </h1>

          <p className="text-lg font-semibold text-neutral-700 leading-relaxed">
            Bersama FlyHigh, wujudkan potensi terbaikmu! Kami menghadirkan MAKRO (Magang Kreatif dan Progresif),
            program akselerasi talenta digital yang memberikan pengalaman nyata di industri teknologi untuk membentuk SDM unggul.
            FlyHigh juga membuka berbagai lowongan kerja bagi Anda yang siap bertumbuh dan berkontribusi dalam membangun inovasi masa depan.
          </p>

          <div>
            <a href="#career">
              <span className="text-lg font-semibold text-white px-10 py-3 inline-block rounded-full bg-gradient-to-r from-[#EF9419] to-[#C94F1E] transition duration-300 hover:scale-110">
                Raih Peluangmu!
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
