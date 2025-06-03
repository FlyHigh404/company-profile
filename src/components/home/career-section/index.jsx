import Image from 'next/image';

export default function CareerSection() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-16">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Bagian Gambar */}
        <div className="flex flex-col gap-6 md:w-1/2 w-full">
          <Image
            src="/images/image 2.png"
            alt="Gambar 1"
            width={588}
            height={210}
            className="rounded-lg shadow-md w-full object-cover"
          />
          <Image
            src="/images/image 3.png"
            alt="Gambar 2"
            width={588}
            height={210}
            className="rounded-lg shadow-md w-full object-cover"
          />
          <Image
            src="/images/image 4.png"
            alt="Gambar 3"
            width={588}
            height={210}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Bagian Teks */}
        <div className="flex flex-col gap-6 md:w-1/2 w-full text-center md:text-left">
          <h1 className="typo-h1 bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text">
            Investasi pada Pengembangan Talenta
          </h1>

          <p className="text-neutral-700 leading-relaxed">
            Bersama FlyHigh, wujudkan potensi terbaikmu! Kami menghadirkan <strong>MAKRO (Magang Kreatif dan Progresif)</strong>,
            program akselerasi talenta digital yang memberikan pengalaman nyata di industri teknologi untuk membentuk SDM unggul.
            FlyHigh juga membuka berbagai lowongan kerja bagi Anda yang siap bertumbuh dan berkontribusi dalam membangun inovasi masa depan.
          </p>

          <div>
            <a href="#">
              <span className="typo-b-md text-white px-8 py-4 inline-block rounded-full bg-gradient-to-r from-[#EF9419] to-[#C94F1E] transition duration-300 hover:opacity-90">
                Raih Peluangmu!
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
