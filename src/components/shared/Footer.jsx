import Linkedin from '../../../public/svgs/Linkedin'
import Twitter from '../../../public/svgs/Twitter'
import Facebook from '../../../public/svgs/Facebook'
import Instagram from '../../../public/svgs/Instagram'
import ArrowToTop from '../../../public/svgs/ArrowToTop'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap justify-between mx-5 md:mx-8 lg:mx-20 ">
        <div className="flex flex-col">
          <p className="logo-footer leading-[0.8] text-start  bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text pb-5 md:pb-10 lg:pb-12">FlyHigh</p>
          <p className="text-lg font-[500] text-neutral-700 cursor-default pb-5 md:pb-10 lg:pb-12">© Copyright {new Date().getFullYear()} by Fly High</p>
        </div>

        <div className="text-lg text-neutral-700 ">
          <div className="flex lg:justify-center md:gap-8 lg:gap-x-24">
            <div className="w-2/5 md:w-1/6 lg:w-3/5 space-y-2 lg:space-y-5 ">
              <p className="text-lg font-bold">Navigasi</p>
              <p>
                <a href="#">Tentang Kami</a>
              </p>
              <p>
                <a href="#">Layanan</a>
              </p>
              <p>
                <a href="#">Kontak</a>
              </p>
              <p>
                <a href="">Makro</a>
              </p>
            </div>

            <div className="w-2/5 md:w-3/6 lg:w-2/5 space-y-2 lg:space-y-5 cursor-default">
              <p className="text-lg font-bold">
                <a href="">Hubungi Kami</a>
              </p>
              <p>
                <a href="mailto:flyhighsinergi.idn@gmail.com">flyhighsinergi.idn@gmail.com</a>
              </p>
              <p>+62 851-4116-8042</p>
            </div>

            <div className="w-1/1 md:w-1/6 lg:w-1/5 ">
              <div className='flex flex-row md:flex-col lg:flex-col items-center gap-5 md:gap-2 lg:gap-5 pt-5 md:pt-0 lg:pt-0'>
                <a href="https://www.linkedin.com/company/cv-flyhigh-sinergi-indonesia">
                  <Linkedin />
                </a>
                <a href="">
                  <Facebook />
                </a>
                <a href="">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/flyhighcorp_/">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#hero">
        <div className="flex flex-col justify-center items-center gap-2 py-10">
          <ArrowToTop />
          <p className="text-lg text-neutral-700 font-semibold ">Kembali Ke Atas</p>
        </div>
      </a>
    </footer>
  )
}
