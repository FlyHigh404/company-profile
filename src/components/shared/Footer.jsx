import Linkedin from '../../../public/svgs/Linkedin'
import Twitter from '../../../public/svgs/Twitter'
import Facebook from '../../../public/svgs/Facebook'
import Instagram from '../../../public/svgs/Instagram'

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between mx-15 mt-[67px]">
        <div className="flex flex-col">
          <p className="logo-footer bg-gradient-to-r from-[#EF9419] to-[#C94F1E] text-transparent bg-clip-text">FlyHigh</p>
          <p className="typo-b-md text-neutral-700 cursor-default">© Copyright {new Date().getFullYear()} by Fly High</p>
        </div>

        <div className="flex justify-center typo-b-md text-neutral-700 ">
          <div className="flex justify-center gap-20">
            <div className="space-y-5">
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
            <div className="space-y-5 cursor-default">
              <p className="typo-b-lg font-bold">
                <a href="">Hubungi Kami</a>
              </p>
              <p>
                <a href="mailto:flyhighsinergi.idn@gmail.com">flyhighsinergi.idn@gmail.com</a>
              </p>
              <p>+62 851-4116-8042</p>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <a href="https://www.linkedin.com/company/cv-flyhigh-sinergi-indonesia" ><Linkedin /></a>
              <a href="" ><Facebook /></a>
              <a href="" ><Twitter /></a>
              <a href="https://www.instagram.com/flyhighcorp_/"><Instagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
