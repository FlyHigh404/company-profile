import Linkedin from '@/assets/icons/Linkedin'
import Facebook from '@/assets/icons/Facebook'
import Twitter from '@/assets/icons/Twitter'
import Instagram from '@/assets/icons/Instagram'

export default function ContactForm() {
  return (
    <section className="w-full px-[8%] py-[5%] pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center lg:items-start gap-12 w-full">
        
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="typo-h3 md:typo-h2 lg:typo-h1 bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text">
            Siap Membantu Mewujudkan Solusi Terbaik
          </h1>
          <p className="text-lg font-semibold text-neutral-600">
            Kami terbuka untuk berbagai bentuk kerja sama, konsultasi, maupun pertanyaan terkait layanan dan produk kami. Silakan hubungi tim kami melalui formulir atau informasi kontak di bawah ini.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center lg:justify-start">
              <div className="space-y-3 text-lg font-semibold text-neutral-600">
                <p className="font-bold">Kontak Kami</p>
                <p>flyhighsinergi.idn@gmail.com</p>
                <p>08543657890</p>
              </div>

              <div className="space-y-3 text-lg font-semibold text-neutral-600">
                <p className="font-bold">Ikuti Kami</p>
                <div className="flex flex-row gap-4 items-center justify-center">
                  <a href="#" className="hover:scale-130">
                    <Linkedin />
                  </a>
                  <a href="#" className="hover:scale-130">
                    <Facebook />
                  </a>
                  <a href="#" className="hover:scale-130">
                    <Twitter />
                  </a>
                  <a href="https://www.instagram.com/flyhighcorp_/" className="hover:scale-130" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-lg font-semibold text-neutral-600">
              <p className="font-bold">Alamat</p>
              <p>Jl. Medayu No. 123, Ngagel, Surabaya, Indonesia</p>
              <a target="_blank" rel="noopener noreferrer" href="https://g.co/kgs/Ayppgeb" className="hover:underline">
                <p>Buka di Peta</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full">
          <div className="p-10 bg-neutral-50 border-neutral-300 border-2 shadow-2xs rounded-2xl w-full max-w-md md:max-w-lg space-y-4">
            <h3 className="typo-h3 font-bold text-black text-center lg:text-left">Kirim Pesan Cepat</h3>
            <p className="text-lg font-semibold text-neutral-600 mb-12 text-center lg:text-left">
              Hubungi kami untuk konsultasi layanan, kerja sama strategis, atau kebutuhan solusi digital khusus.
            </p>
            <form className="flex flex-col gap-6 w-full" action="#">
              <input type="text" placeholder="Nama" className="w-full border-0 border-b border-gray-400 bg-transparent text-neutral-800 placeholder-neutral-500 focus:outline-none focus:border-orange-400 transition-all" />
              <input type="email" placeholder="Email" className="w-full border-0 border-b border-gray-400 bg-transparent text-neutral-800 placeholder-neutral-500 focus:outline-none focus:border-orange-400 transition-all" />
              <textarea
                placeholder="Pesan"
                rows={4}
                className="w-full border-0 border-b border-gray-400 bg-transparent text-neutral-800 placeholder-neutral-500 focus:outline-none focus:border-orange-400 transition-all resize-none"
              ></textarea>
              <button type="submit" className="self-start px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-[#EF9419] to-[#C94F1E] hover:scale-105 transition duration-300">
                Kirim
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  )
}
