import Linkedin from '../../../public/svgs/Linkedin'
import Twitter from '../../../public/svgs/Twitter'
import Facebook from '../../../public/svgs/Facebook'
import Instagram from '../../../public/svgs/Instagram'

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 lg:px-15 py-10 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:gap-8 lg:gap-20 py-10">
        <div className="flex flex-col">
          <p className="typo-h2 md:typo-h2 lg:logo-footer leading-[0.8] text-start  bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text pb-5 md:pb-10 lg:pb-12">FlyHigh</p>
          <p className="typo-b-sm md:typo-b-md lg:typo-b-md font-[500] text-neutral-700 cursor-default pb-5 md:pb-10 lg:pb-12">© Copyright {new Date().getFullYear()} by Fly High</p>
        </div>

        <div className="typo-b-sm md:typo-b-md lg:typo-b-md text-neutral-700 ">
          <div className="flex flex-wrap lg:justify-center md:gap-8 lg:gap-10">
            <div className="w-1/3 md:w-1/6 lg:w-1/5 space-y-2 lg:space-y-5 ">
              <p className="typo-b-lg font-bold">Navigasi</p>
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

            <div className="w-2/3 md:w-3/6 lg:w-2/5 space-y-2 lg:space-y-5 cursor-default">
              <p className="typo-b-lg font-bold">
                <a href="">Hubungi Kami</a>
              </p>
              <p>
                <a href="mailto:flyhighsinergi.idn@gmail.com">flyhighsinergi.idn@gmail.com</a>
              </p>
              <p>+62 851-4116-8042</p>
            </div>

            <div className="w-full md:w-1/6 lg:w-1/5 flex flex-row md:flex-col lg:flex-col items-center gap-5 md:gap-2 lg:gap-5 pt-5 md:pt-0 lg:pt-0">
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
    </footer>
  )
}
